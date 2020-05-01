const images = require('./image');
const fileManagement = require('../41-nodejs/file-management');
const moment = require('moment');



const main = async() => {
    const fecha = new moment().format('MMMM Do YYYY, h:mm:ss a');
    let img = images.manyImages(10);
    let urls = '';
    let informacion = '';

    img.forEach((element) => {
        urls += '\n' + element
    })

    let data = '';

    if (await fileManagement.existFile('log.txt')) {
        data = await fileManagement.readFile('log.txt')
        informacion = data + '\n' + fecha + '\n' + urls + '\n'
        console.log(informacion)
    } else {
        informacion = fecha + '\n' + urls + '\n'
    }

    fileManagement.createFile('log.txt', informacion);
}

main();