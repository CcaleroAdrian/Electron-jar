'use stric'

// Objecto APP => Instancia de Chromium
// Objecto BrowserWindo =>Permite visualizar el contenido
import { app, BrowserWindow } from 'electron'
import devtools from './devtools'

if (process.env.NODE_ENV === 'development') {
  devtools()
}

// Ejecutando código cuando la aplicación esta lista.
app.on('ready', () => {
  // Creando una ventan
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,
    title: 'Launcher',
    resizable: true,
    show: false
  })

  /* window.on("move",()=>{
    const position = window.getPosition()
    console.log(position)
  }) */

  // once => Eventos que se ejecutan una unica vez
  window.once('ready-to-show', () => {
    window.show()
  })

  // Detectando el cierre de la ventana
  window.on('close', () => {
    window = null
    app.quit()
  })

  // cargamos nuestro archivo HTML local
  window.loadURL(`file://${__dirname}/renderer/index.html`)
})
