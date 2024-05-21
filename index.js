import * as wasm from "timeleft-web";
wasm.greet();
wasm.handler();
setInterval(wasm.handler, 1000);
//nit().then(() => {
    //wasm.greet();
    //wasm.handler();
//});
//window.handler = wasm.handler;
