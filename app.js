const fs = require('fs');
const path = require('path');
//-----
// fs.mkdir(path.join('boys'), (err)=>{
//     if (err) throw new Error();
// })
// fs.mkdir(path.join('girl'), (err)=>{
//     if (err) throw new Error();
// })
//-----
// fs.writeFile(path.join('boys', 'Dima.json'), '{name:Dima, age:29, gender:male}', (err)=>{
//     if(err) throw new Error();
// })
// fs.writeFile(path.join('boys', 'Roma.json'), '{name:Roma, age:29, gender:male}', (err)=>{
//     if(err) throw new Error();
// })
// fs.writeFile(path.join('boys', 'Anna.json'), '{name:Anna, age:27, gender:female}', (err)=>{
//     if(err) throw new Error();
// })
//-----
// fs.writeFile(path.join('girl', 'Kola.json'), '{name:Kola, age:5, gender:male}', (err)=>{
//     if(err) throw new Error();
// })
// fs.writeFile(path.join('girl', 'Ola.json'), '{name:Ola, age:27, gender:female}', (err)=>{
//     if(err) throw new Error();
// })
// fs.writeFile(path.join('girl', 'Marina.json'), '{name:Marina, age:27, gender:female}', (err)=>{
//     if(err) throw new Error();
// })
//-----
// fs.readdir('./boys',(err, files)=>{
//     console.log(files);
//
//     for (const fileName of files){
//         fs.stat(`./boys/${fileName}`,(err, stats)=>{
//             console.log(`./boys/${fileName}`);
//             console.log(stats.isDirectory());
//
//             if (stats.isFile()){
//                 fs.readFile(`./boys/${fileName}`,(err, data)=>{
//                     console.log(data.toString());
//                 })
//             }
//         })
//     }
// })
//
// fs.rename(path.join('boys', 'Anna.json'), path.join('girl', 'Anna.json'), (err) => {
//     if (err) throw new Error(err.message)
// })
//-----
// fs.readdir('./girl',(err, files)=>{
//     console.log(files);
//
//     for (const fileName of files){
//         fs.stat(`./girl/${fileName}`,(err, stats)=>{
//             console.log(`./girl/${fileName}`);
//             console.log(stats.isDirectory());
//
//             if (stats.isFile()){
//                 fs.readFile(`./girl/${fileName}`,(err, data)=>{
//                     console.log(data.toString());
//                 })
//             }
//         })
//     }
// })
//
// fs.rename(path.join('girl', 'Kola.json'), path.join('boys', 'Kola.json'), (err) => {
//     if (err) throw new Error(err.message)
// })
//-----

// fs.unlink(path.join('./boys', 'Dima.json'), (err)=>{
//     if(err) throw new Error();
// })
// fs.unlink(path.join('./girl', 'Ola.json'), (err)=>{
//     if(err) throw new Error();
// })

// // fs.rmdir('./boys',{recursive:true},(err)=>{
// //     console.log(err);
// // })
// fs.rmdir('./girl',{recursive:true},(err)=>{
//     console.log(err);
// })