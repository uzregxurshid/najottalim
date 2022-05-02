const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const token = process.env.TG_TOKEN;

const bot = new TelegramBot(token, { polling: true });
let name;
let course;
let phonenumber;
let submitId;
const mainMenu = async chatId => {
  bot.sendMessage(chatId, "Bizning o'quv markaz botiga xush kelibsiz!", {
    reply_markup: {
      keyboard: [
        [{ text: "🔬 Bizning kurslar" }, { text: "💡 Biz haqimizda" }],
        [{ text: "📞 Qayta aloqa!" }, { text: "📍 Bizning manzil" }],
      ],
      resize_keyboard: true,
      remove_keyboard: true,
    },
  });
};

const recall = async chatId => {
  bot.sendMessage(
    chatId,
    `<b>Telefon raqam</b>: +998912345678\n<b>Email: </b> example@example.com`,
    {
      parse_mode: "HTML",
    }
  );
};

const aboutUs = async chatId => {
  bot.sendMessage(chatId, "https://www.youtube.com/watch?v=z3GS5oYGq5U");
};

const shareLocation = async chatId => {
  bot.sendLocation(chatId, 41.346783, 69.215456, {
    protect_content: true,
  });
};

const sendCourses = async chatId => {
  bot.sendMessage(
    chatId,
    "Bizning markazimiz sizga quyidagi kurlarini taqdim etadi! ",
    {
      reply_markup: JSON.stringify({
        keyboard: [
          [
            {
              text: "📓 SMM",
            },
            {
              text: "📷 Grafik dizayn",
            },
          ],
          [
            {
              text: "💻 Dasturlash",
            },
          ],
          [
            {
              text: "🔙 Asosiy menyu",
            },
          ],
        ],
        resize_keyboard: true,
      }),
    }
  );
};

const ourCourse = async (chatId, imagepath, info, data, url) => {
  bot.sendPhoto(chatId, imagepath, {
    caption: info,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Kursga yozilish",
            callback_data: data,
          },
          {
            text: "Kurs haqida malumot",
            url: url
          },
        ],
      ],
    },
  });
};

const registrator = async (chatId, coursename) => {
  course = coursename;
  let replyId;

  await bot
    .sendMessage(chatId, "Ismingizni kiriting:", {
      reply_markup: {
        force_reply: true,
      },
    })
    .then(data => {
      replyId = data.message_id;
    });

  bot.onReplyToMessage(chatId, replyId, msg => {
    name = msg.text;

    bot
      .sendMessage(chatId, "📱 Telefon raqamingizini jo'nating", {
        reply_markup: {
          keyboard: [
            [{ text: "Telefon raqamni ulashish", request_contact: true }],
          ],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      })
      .then(msg => {
        const msgId = msg.message_id;

        bot.onReplyToMessage(chatId, msgId, msg => {
          phonenumber = msg.contact.phone_number;

          bot
            .sendMessage(
              chatId,
              `<b>Kursingiz: </b> ${coursename}\n<b>Ismingiz: </b> ${name}\n<b>Telefon raqamingiz: </b>${phonenumber}`,
              {
                parse_mode: "HTML",
                reply_markup: {
                  inline_keyboard: [
                    [
                      { text: "✅ Tasdiqlash", callback_data: "submit" },
                      { text: "✏️ Tahrirlash", callback_data: `edit` },
                    ],
                    [{ text: "🚫 Bekor qilish", callback_data: "cancel" }],
                  ],
                },
              }
            )
            .then(data => {
              submitId = data.message_id;
            });
        });
      });
  });
};
const onSubmit = async (chatId, query) => {
  bot.deleteMessage(chatId, query.message.message_id);
  bot.sendMessage(-1001781751959, query.message.text, {
    parse_mode: "HTML",
  });
  bot.sendMessage(chatId, "✅ Ma'lumotlaringiz jo'natildi").then(_ => {
    mainMenu(chatId);
  });
};
const onCancel = async (chatId, query) => {
  bot.deleteMessage(chatId, query.message.message_id);
  mainMenu(chatId);
};
bot.onText(/\/start/, msg => {
  const chatId = msg.chat.id;
  mainMenu(chatId);
});

bot.on("message", msg => {
  const chatId = msg.chat.id;
  const text = msg.text;

  switch (text) {
    case "📞 Qayta aloqa!":
      {
        recall(chatId);
      }
      break;
    case "💡 Biz haqimizda":
      {
        aboutUs(chatId);
      }
      break;
    case "📍 Bizning manzil":
      {
        shareLocation(chatId);
      }
      break;
    case "🔬 Bizning kurslar":
      {
        sendCourses(chatId);
      }
      break;
    case "🔙 Asosiy menyu":
      {
        mainMenu(chatId);
      }
      break;
    case "📓 SMM":
      {
        ourCourse(chatId, "./img/smm.jpg", "SMM kursi", "smm", "https://youtube.com");
      }
      break;
      case "📷 Grafik dizayn":
      {
        ourCourse(chatId, "./img/smm.jpg", "Grafik design kursi", "design", "https://youtube.com");
      }
      break;
      case "💻 Dasturlash":
      {
        ourCourse(chatId, "./img/smm.jpg", "Dasturlash kursi", "programming", "https://youtube.com");
      }
      break;
  }
});

bot.on("callback_query", query => {
  const chatId = query.message.chat.id;
  const data = query.data;

  switch (data) {
    case "smm":
      {
        registrator(chatId, "SMM");
      }
      break;
      case "design":
        {
          registrator(chatId, "Grafik Dizayn");
        }
        break;
        case "programming":
          {
            registrator(chatId, "Dasturlash");
          }
          break;
    case "submit":
      {
        onSubmit(chatId, query);
      }
      break;
    case "edit":
      {
        registrator(chatId, course);
      }
      break;
    case "cancel":
      {
        onCancel(chatId, query);
      }
      break;
  }
});
