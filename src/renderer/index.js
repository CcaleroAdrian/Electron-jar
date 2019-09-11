import {exec} from 'child_process'

window.addEventListener('load', () => {
  RunScriptEvent()
})

function selectPathFiles () {
  const btn = document.getElementById("btnFileExplorer")
  btn.addEventListener('click', function() {
    switch (os.platform){
      case 'win32':
        break
      case 'darwin':
        break
      default:
        break
    }
  })
}

function RunScriptEvent() {
  const btnRun = document.getElementById('btnRunScript')
  btnRun.addEventListener('click',function(e){
      e.preventDefault()
      console.log('Boton clickeado')
      exec('java -jar C:\\Users\\jesus.calero\\Documents\\Proyectos\\Electron_app\\HolaMundo.jar', function(err, stdout, stderr){
        if (err){
          console.log(err)
        }
        console.log(stdout)
      })
  })
}
