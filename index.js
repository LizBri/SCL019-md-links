const fs      = require("fs"     );
const path    = require("path"   );

console.log("Ingresa tu ruta");
const stdin = process.openStdin();
let 
stdin.addListener("data", function(ruta) {
    console.log("Tu ruta es: " + 
        ruta.toString());
       let otravariabler= ruta.toString(); 
       const absolutePath= path.isAbsolute(otravariabler)
       console.log(absolutePath);
       if (!absolutePath){
         otravariabler = path.resolve(otravariabler); 

       }
       console.log(otravariabler);


  });






// err=== an error object 
// fs.readdir(".", (err, files) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(files);
// });

// console.log(path.join(__dirname, "./"));

// fs.readFile('./README.md', 'utf-8', (err, archivo) => { 

//     if (err){

//         console.log(archivo);
//     }
// });
