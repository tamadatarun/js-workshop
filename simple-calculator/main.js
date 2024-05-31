function calculate() {
    var fn = parseFloat(document.getElementById("fn").value);
    var operation = document.getElementById("operation").value;
    var sn = parseFloat(document.getElementById("sn").value);
    var result;
    switch (operation) {
        case '+':
            result = fn + sn;
            break;
        case '-':
            result = fn - sn;
            break;
        case '*':
            result = fn * sn;
            break;
        case '/':
            result = sn !== 0 ? fn / sn : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operation';
            break;
    }
    document.getElementById("result").innerHTML = "Result: " + result;
}