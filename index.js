let money = 1000;
let employees = 10;
let products = 100;

function hireEmployee() {
    if (money >= 100) {
        money -= 100;
        employees++;
        updateUI();
    } else {
        alert("Not enough money to hire employees!");
    }
}

function produceProduct() {
    if (employees >= 1) {
        employees--;
        products += 10;
        updateUI();
    } else {
        alert("Not enough employees to produce products!");
    }
}

function updateUI() {
    document.getElementById("money").innerText = money;
    document.getElementById("employees").innerText = employees;
    document.getElementById("products").innerText = products;
}
