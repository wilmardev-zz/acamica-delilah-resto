const coolImages = require('cool-images');

const manyImages = (quantity) => {
    return coolImages.many(600, 800, quantity); // array of 10 image random images with 600x800!

}

module.exports = {
    manyImages
}