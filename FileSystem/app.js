

// CRUD Operations on file 

let fs=require('fs')


let data = "hello mofos! pathakboyanand is here"


// write file or create file


fs.writeFile('abc.txt',data,
    {
        encoding:'utf-8',
        flag:'w'
    },
    (err)=>{
        if(err){
            throw err;
        }
        else{
            console.log("file written successfully");
        }
    })



// fs.writeFileSync('abc.txt',"hello mofos again!",
// {
//     encoding:'utf-16le',
//     flag:'w'
// },
// (err)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log("file written successfully");
//     }
// })




// read files 



// fs.readFile('abc.txt',{
//     encoding:'utf-8',
//     flag:'r'
// },
// (err,data)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(data);
//     }
// })



// fs.readFile('abc.txt',(err,data)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(data.toString());
//     }
// })



// fs.readFileSync('abc.txt',(err,data)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(data);
//     }
// })



// Update files 

// let updated="moj lo\nroj lo\nna mile toh\nkhoj lo"
// fs.appendFile('abc.txt',updated,(err)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log("file updated successfully");
//     }
// })



// delete files



// fs.unlink('abc.txt',(err)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log("file deleted successfully");
//     }
// })