const path = require ('path');
const fs = require ('fs');
const fetch = require('node-fetch');

const functions ={
    abFile: (validatePath) => path.isAbsolute(validatePath) ? validatePath :path.resolve(validatePath),
    //Ruta relativa a absoluta.

// funcioin recursiva para encotrar archivos .md 
findMd:(initialPath =>{
  //array de los archivos en la ruta
const arrayFiles = fs.readdirSync(initialPath);
let filesMd = [];
arrayFiles.forEach(theFile => {
   //union ruta inicial con el archivo de ruta absoluta 
   const filePath = path.join(validatePath, theFile);
   //stats de la ruta
   const stat =fs.statSync(filePath);
   //confirmacion dce si la ruta es un directorio para recursion
   if(stat.isDirectory()){ 
   //recursion
       filesMd = filesMd.concat(this.findMd(filePath));
    //opbtencion en un array rutas de archivos.md
   }else if(path.extname(filePath)=== '.md') {
       filesMd.push(filePath);
   }
});
return filesMd;
})

//extraer urls


};