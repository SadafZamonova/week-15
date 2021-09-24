function showMessageplus() {
    let a = document.getElementById("task1").value;
    let b = document.getElementById("task2").value;
    let c = (Number(a) + Number(b));
    document.getElementById("task3").value = c;
}

function showMessageminus() {
    let a = document.getElementById("task4").value;
    let b = document.getElementById("task5").value;
    let c = a - b;
    document.getElementById("task6").value = c;
}

function ShowMessagemultiply() {
    let a = document.getElementById("task7").value;
    let b = document.getElementById("task8").value;
    let c = a * b;
    document.getElementById("task9").value = c;

}

function ShowMessagedivide() {
    let a = document.getElementById("task10").value;
    let b = document.getElementById("task11").value;
    if (b == "0") {
        alert("на 0 делить нельзя");
    }
    let c = a / b;

    document.getElementById("task12").value = c;
}