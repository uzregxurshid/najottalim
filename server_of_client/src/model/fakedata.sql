INSERT INTO COMPANY (NAME, ADDRESS, PHONE, WEBSITE, EMAIL, PICTURE) 
VALUES
  ('Justo Sit Ltd','6315 Semper. Road','998-(80)-781-68-87','Leila.uz','conubia.nostra@outlook.net','https://i.postimg.cc/SspspMRT/Justo-Sit-Ltd.png'),
  ('Sed Tortor Foundation','P.O. Box 997, 8788 Tellus Ave','998-(43)-269-63-69','Uma.uz','massa.integer@icloud.ca','https://i.postimg.cc/3N8xkQg2/Sed-Tortor-Foundation.png'),
  ('Mauris Institute','P.O. Box 340, 1522 Egestas. Ave','998-(26)-635-17-37','Dara.uz','luctus.sit@protonmail.couk','https://i.postimg.cc/rmCpywt8/Mauris-Institute.png'),
  ('Tristique Foundation','8216 Sem Street','998-(12)-564-34-53','Zachery.uz','eu.tellus@outlook.ca','https://i.postimg.cc/wMwTJ4VZ/Tristique-Foundation.png');

INSERT INTO BUILDING (NAME, ADDRESS, COMPANY_ID, PRICE_PER_SQUARE_METER)
VALUES
  ('Building 1', 'Address 1', '118c65be-d51e-4247-a68a-22cd4057b25a', 100),
  ('Building 5', 'Address 5', 'a33ae0b5-9982-4429-bf73-db38a068a2d7', 120),
  ('Building 9', 'Address 9',   'b55d8eca-8df1-40b5-8703-4550bdbe0ad3', 130),
  ('Building 13', 'Address 13', 'e153ab8a-814f-48dc-aa0c-0f2ae0979d17', 160);
  

INSERT  INTO 
  APARTMENT (COUNT_OF_ROOMS,AREA,BUILDING_ID)
VALUES 
  (2,48, '04c2c8dd-b6d6-41aa-9204-c561f7d1008a'),
  (3,60, '04c2c8dd-b6d6-41aa-9204-c561f7d1008a'),
  (2,48,'1e0aeb83-67dd-46bb-a8c6-f77206d0a46f'),
  (3,60,'1e0aeb83-67dd-46bb-a8c6-f77206d0a46f'),
  (2,48,'2c212576-8530-4fb8-9212-7831c22c2b11'),
  (3,60,'2c212576-8530-4fb8-9212-7831c22c2b11'),
  (2,48,'a69a7327-a07e-45ee-8476-56b28d25bbec'),
  (3,60,'a69a7327-a07e-45ee-8476-56b28d25bbec');



INSERT INTO
  BANK(NAME,ADDRESS, PHONE, WEBSITE, EMAIL, LOAN_AMOUNT, LOAN_PERIOD,PICTURE)
VALUES
('Bank of America', 'P.O. Box 997, 8788 Tellus Ave', '998-(43)-269-63-69', 'BankofAmerica.uz', 'email@email.email', 100000, 12, 'https://i.postimg.cc/CdTxtFVz/bankofamerica.jpg'),
('JPMorgan Chase', '8216 Sem Street', '998-(12)-564-34-53', 'JPMorganChase.uz', 'email@email.email', 80000, 8, 'https://i.postimg.cc/MZc0hdSS/jpmorgan.jpg'),
('Wells Fargo', '6315 Semper. Road', '998-(80)-781-68-87', 'WellsFargo.uz', 'email@email.email', 90000, 12, 'https://i.postimg.cc/PfBbhYX8/wellsfargo.jpg'),
('Citibank', 'P.O. Box 340, 1522 Egestas. Ave', '998-(26)-635-17-37', 'Citibank.uz', 'email@email.email', 70000, 20, 'https://i.postimg.cc/GhGFpttg/citibank.png');