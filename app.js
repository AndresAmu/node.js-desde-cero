// function mostrarTema(tema){
//   console.log(`Estoy aprendiendo ${tema}`)
// }

// setTimeout(mostrarTema, 1000, 'Node.js')


// function mostrarTema(tema){
//   console.log(`Estoy aprendiendo ${tema}`)
// }

// console.log('Antes de setImmediate()')

// setImmediate(mostrarTema, 'Node.js') // la funcion tine la maxima prioridad


// console.log('Despues de setImmediate()')

// function mostrarTema(tema){
//   console.log(`Estoy aprendiendo ${tema}`)
// }
// setInterval(mostrarTema, 1500, 'Node.js')

// function sumar(a,b){
//   console.log(a + b)
// }
// setInterval(sumar, 1500, 8, 2)

const fs = require('fs')

// Leer un archivo

fs.readFile('index.html', 'utf-8', (err, contenido) => {
  if(err){
    throw err
  }else {
    console.log(contenido)
  }
  console.log('Mensaje')
})

// Cambiar nombre de un archivo

fs.rename('index.html', 'main.html', (err) =>{
  if(err){
    throw err
  }
  console.log('Nombre cambiado exitosamente')
})

// Agregar contenido al final de un archivo.

fs.appendFile('index.html', '<p>Contenido nuevo</p>', (err)=>{
  if(err){
    throw err
  }
  console.log('Agrego nuevo contenido')
})

// Remplazar todo el contendio del archivo

fs.writeFile('index.html', 'Contenido Nuevo', (err) =>{
  if (err){
    throw err
  }
  console.log('Contenido remplazo exitosamente')
})

// Eliminar archivo

fs.unlink('main.js', (err) =>{
  if(err){
    console.log(err)
  }
  console.log('Archivo eliminado correctamente')
})