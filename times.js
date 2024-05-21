const elm = document.getElementById('input');
elm.addEventListener("change",change,false);
async function change() {
    if (elm.files.length>0) {
        const f = elm.files[0];
        let contents = await f.text();
        let param = new URLSearchParams(window.location.search);
        param.set("times",btoa(contents));
        window.location.search=param.toString();
        console.log(param.toString());
    }
}
