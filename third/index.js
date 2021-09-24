function show() {
    let color = document.querySelector("#color");
    let result = document.querySelector("#result");
    if (color.value == "red") {
        result.style.backgroundColor = "red";
    }
    if (color.value == "yellow") {
        result.style.backgroundColor = "yellow";
    }
    if (color.value == "green") {
        result.style.backgroundColor = "green";
    }
    if (color.value == "blue") {
        result.style.backgroundColor = "blue";
    }

}