const express = require('express')
const os = require("os")
const app = express()
const port = 80

const phrases = [
  {id:1, nombre:'SantiO', altura:12, habilidad:'bajito', imagen:'https://storage.googleapis.com/pokeneas-images123/007.png', frase:'Soy chiquito, pero peligroso'},
  {id:2, nombre:'Mister Musculo', altura:175, habilidad:'fuerza', imagen:'https://storage.googleapis.com/pokeneas-images123/450_1000.png', frase:'Soy fuerte, pero tosco'},
  {id:3, nombre:'Maestro chifu', altura:167, habilidad:'ninja', imagen:'https://storage.googleapis.com/pokeneas-images123/descarga%20(1).jpg', frase:'Ñaimmmmm'},
  {id:4, nombre:'Maestro chifu2', altura:167, habilidad:'ninja', imagen:'https://storage.googleapis.com/pokeneas-images123/descarga%20(2).jpg', frase:'Ñaimmmmm'},
  {id:5, nombre:'Maestro chifu3', altura:167, habilidad:'ninja', imagen:'https://storage.googleapis.com/pokeneas-images123/descarga.jpg', frase:'Ñaimmmmm'},
  {id:6, nombre:'Maestro chifu4', altura:167, habilidad:'ninja', imagen:'https://storage.googleapis.com/pokeneas-images123/images%20(1).jpg', frase:'Ñaimmmmm'},
  {id:7, nombre:'Maestro chifu5', altura:167, habilidad:'ninja', imagen:'https://storage.googleapis.com/pokeneas-images123/images.jpg', frase:'Ñaimmmmm'},
]

app.get('/', (req, res) => {
  const number = Math.floor(Math.random() * 7);
  const phrases1 = phrases[number];
  const datos = {id:phrases1["id"], nombre:phrases1['nombre'], altura:phrases1['altura'], habilidad:phrases1['habilidad'], containerID:os.hostname()};
  res.send(datos)
})

app.get('/imagen', (req, res)=>{
  const number = Math.floor(Math.random() * 7);
  const phrases1 = phrases[number];
  const image = {image:phrases1['imagen'], frase:phrases1['frase'], containerID:os.hostname()};
  res.send(image);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})