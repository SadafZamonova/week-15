function check() {
    let name = document.querySelector("#disabledTextInput");
    let surname = document.querySelector("#disabledTextInput1");
    let password = document.querySelector("#inputPassword5");
    let confirm = document.querySelector("#inputPassword4");

    document.querySelector("#errorMessage").innerHTML = "";
    document.querySelector("#correctMessage").innerHTML = "";

    if (name.value == "") {
        document.querySelector("#errorMessage").innerHTML += "Имя не заполнено <br>";
    }
    if (surname.value == "") {
        document.querySelector("#errorMessage").innerHTML += "Фамилия не заполнена <br>";
    }

    if (password.value == "") {
        document.querySelector("#errorMessage").innerHTML += "Пароль не заполнен <br>";
    }
    if (confirm.value == "") {
        document.querySelector("#errorMessage").innerHTML += "Пароль не заполнен <br>";
    }
    if (confirm.value != password.value) {
        document.querySelector("#errorMessage").innerHTML += "пароль не совпадает <br>";
    }

    if (name.value != "" &&
        surname.value != "" &&
        password.value != "" &&
        confirm.value != "" &&
        confirm.value == password.value) {
        document.querySelector("#correctMessage").innerHTML += "всё верно <br>";
    } else
        document.querySelector("#errorMessage").innerHTML += "есть ошибка!!! <br>";



}