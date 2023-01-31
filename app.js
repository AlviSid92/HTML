
function send() {
    var mess = document.getElementById("chat").value;
    str = `Привет ${mess}`;
    document.getElementById('result').innerText = str

}
