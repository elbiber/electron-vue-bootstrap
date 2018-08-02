const { ipcRenderer } = require( "electron" );

console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
  
ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})

ipcRenderer.on('click-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})

ipcRenderer.send('asynchronous-message', 'ping')

document.addEventListener( "DOMContentLoaded", () => {
  const version = process.version;
  const info = document.getElementById( "info" );
  info.textContent = `I'm running Node.js version: ${ version }`;

  const btn = document.getElementById( "clickme" );
  btn.addEventListener( "click", e => {
      //console.log( "I was clicked." );
      ipcRenderer.send( "show-dialog", { message: "The button was clicked" } );
      //ipcRenderer.sendSync('synchronous-message', 'ping')
  } );
} );