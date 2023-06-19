// const { EventEmitter } = require('stream')

EventEmitter = require('events')

const event = new EventEmitter();

event.on('checkMyStatus', (sc , msg)=>{
    console.log(`Server is Up with status code ${sc}, and ${msg}`);
})
event.emit('checkMyStatus',200,'running')