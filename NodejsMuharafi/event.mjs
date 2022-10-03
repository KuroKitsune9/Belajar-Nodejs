import { EventEmitter } from "events";

//objek

const emitter = new EventEmitter();

emitter.addListener("hello", (name)=>{
    console.info(`Hello ${name}`);
})

emitter.emit("hello","eko")