const {EventEmitter} = require('events')

const ev = new EventEmitter()

ev.once('saySomething', (message) => console.log('Eu ouvi você: ', message ))
//ev.on('saySomething', (message) => console.log('Eu ouvi você: ', message ))

ev.emit('saySomething', 'Maires')
ev.emit('saySomething', 'João')
ev.emit('saySomething', 'Camila')
