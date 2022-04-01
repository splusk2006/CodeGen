const fileName = document.getElementById("fileName");
const count = document.getElementById("count");
const codeLen = document.getElementById("codeLen");
const checks = document.getElementsByName("checks");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    const cnt = count.value;
    const length = codeLen.value;
    const lower = checks[0].checked;
    const upper = checks[1].checked;
    const number = checks[2].checked;

    let ascii = [];
    if (lower) for (let i = 97; i <= 122; i++) ascii.push(String.fromCharCode(i));
    if (upper) for (let i = 65; i <= 90; i++) ascii.push(String.fromCharCode(i));
    if (number) for (let i = 48; i <= 57; i++) ascii.push(String.fromCharCode(i));

    let codeSet = new Set();
    let result = "";

    while (codeSet.size < cnt) {
        let generated = "";
        for (let i = 0; i < length; i++) {
            const rand = Math.floor(Math.random() * ascii.length);
            generated = generated.concat(ascii[rand]);
        }

        codeSet.add(generated);
        result = result.concat(generated + "\n");
    }

    result = result.substring(0, result.length -1);
    console.log(result);
    
    var blob = new Blob([result], {type: "text/plain;charset=utf-8"});
    _global.saveAs(blob, fileName.value);
});