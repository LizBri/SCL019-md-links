
const fs      = require("fs"             );
const path    = require("path"           );
const dirTree = require("directory-tree" );

// const directory = './files/';

//Despliegue de directorio
// const direct = dirTree("./file.md");
// console.log(direct);
const filteredTree = dirTree('.', {extensions:/\.md$/}, (item, path, stats) => {
  // console.log(stats);
  console.log(item);
  //console.log(path);
  });
console.log(filteredTree);

console.log("Ingresa tu ruta de .md");
const stdin = process.openStdin();
stdin.addListener("data", function(ruta) {
  
  // console.log("Tu ruta es: " +  ruta.toString());
  
  let rutaString= ruta.toString(); 
  
  const absolutePath= path.isAbsolute(rutaString);
  
  console.log(absolutePath);
  if (!absolutePath){//En caso de ser ruta relativa la volvemos en absoluta.
    rutaString = path.resolve(rutaString); 
  }
  console.log("La ruta absoluta es : " +  rutaString);
  
});

//FIXME:

const isMarkdown = (fs, direct) => {
  let result;
  // console.log(path.extname(pathFile));
  if (path.extname(fs) === ".md") {
    // console.log("readFile");
    result = mk(fs, direct);
    return result;
  } else {
    console.log("Extensión invalida. Ingrese una ruta de un archivo de extensión markdown");
  }
  return isMarkdown;
}
  // console.log(path.extname(promptValue));
  // if (direct.extname(path) === '.md') {
    //       console.log('Leyendo archivo');
    //       console.log(reading());
    //   } else {
      //         console.log('Su archivo no es de tipo Markdown');
      //     }


  module.export = isMarkdown;