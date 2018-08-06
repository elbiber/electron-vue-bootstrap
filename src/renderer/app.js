document.addEventListener( "DOMContentLoaded", () => {
  const version = process.version;
  const e = document.getElementById( "info" );
  e.textContent = `I'm running Node.js version: ${ version }`;
} );