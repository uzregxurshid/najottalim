var array = [];
var min, max, length;


function CreateArray() {
    var i;
    var min_e = document.getElementById("min_e").value;
    var max_e = document.getElementById("max_e").value;
    var length_e = document.getElementById("length").value;
    min = parseInt(min_e);
    max = parseInt(max_e);
    length = parseInt(length_e);
    for (i = 0; i < length; i++) {
        array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    document.getElementById("area1").innerText = array.join("  ,  ");
}

function sorrt() {
    var x, y, i, temp, j;
    x = document.getElementById("sort").checked;
    y = document.getElementById("selector").value;
    if (x == true) {
        switch (y) {
            case "Buble_sort": {
                for (i = 0; i < length; i++) {
                    for (j = 0; j < length - 1; j++) {
                        if (array[j] > array[j + 1]) {
                            temp = array[j + 1];
                            array[j + 1] = array[j];
                            array[j] = temp;
                        }
                    }
                }
                document.getElementById("area2").innerText = array.join("  ,  ");
            };
            break;
        case "Insertion_sort": {


            for (var i = 0; i < length; i++) {
                temp = array[i],
                    j = i - 1;
                while (j >= 0 && array[j] > temp) {
                    array[j + 1] = array[j];
                    j--;
                }
                array[j + 1] = temp;
            }
            document.getElementById("area2").innerText = array.join("  ,  ");
            break;

        }
        case "Shell_sort": {

            i = Math.floor(length / 2);
            while (i > 0) {
                for (var j = 0; j < length; j++) {
                    var k = j;
                    temp = array[j];
                    while (k >= i && array[k - i] > temp) {
                        array[k] = array[k - i];
                        k -= i;
                    }
                    array[k] = temp;
                }
                i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
            }

        }
        document.getElementById("area2").innerText = array.join("  ,  ");
        break;
        }

    } else {
        switch (y) {
            case "Buble_sort": {
                for (i = 0; i < length; i++) {
                    for (j = 0; j < length - 1; j++) {
                        if (array[j] < array[j + 1]) {
                            temp = array[j + 1];
                            array[j + 1] = array[j];
                            array[j] = temp;
                        }
                    }
                }
                document.getElementById("area2").innerText = array.join("  ,  ");
            };
            break;
        case "Insertion_sort": {


            for (var i = 0; i < length; i++) {
                temp = array[i],
                    j = i - 1;
                while (j >= 0 && array[j] < temp) {
                    array[j + 1] = array[j];
                    j--;
                }
                array[j + 1] = temp;
            }
            document.getElementById("area2").innerText = array.join("  ,  ");
            break;

        }
        case "Shell_sort": {

            i = Math.floor(length / 2);
            while (i > 0) {
                for (var j = 0; j < length; j++) {
                    var k = j;
                    temp = array[j];
                    while (k >= i && array[k - i] < temp) {
                        array[k] = array[k - i];
                        k -= i;
                    }
                    array[k] = temp;
                }
                i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
            }

        }
        document.getElementById("area2").innerText = array.join("  ,  ");
        break;

        }
    }
}