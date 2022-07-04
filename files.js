const fs = require('fs');

// reading files
// fs.readFile('./blog.txt', (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data.toString());
// });

// console.log('last line');



//writing files
// fs.writeFile('./blog.txt', 'hello world', () => {
//     console.log('fil was written');
// });

// fs.writeFile('./blog1.txt', 'hello world', () => {
//     console.log('fil was written');
// });



// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (error) => {
//         if (error) {
//             console.log(error);
//         }
//         console.log('folder created');
//     });
// } else {
//     fs.rmdir('./assets', (error) => {
//         if (error) {
//             console.log(error);
//         }
//         console.log('folder deleted');
//     });
// }



// deleting files
if (fs.existsSync('./blog.txt')) {
    fs.unlink('./blog.txt', (error) => {
        if (error) {
            console.log(error);
        }
        console.log('file deleted');
    });
}

