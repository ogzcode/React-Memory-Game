function createBoard(images, data) {
    const board = [];
    const imageList = images.slice();
    const imageDict = {};

    while (board.length < 16) {
        let index = Math.floor(Math.random() * imageList.length);
        let image = imageList[index];

        if (!imageDict[image]) {
            imageDict[image] = 0;
        }

        if (imageDict[image] < 2) {
            board.push({
                "index": board.length,
                "image": data[image],
                "isOpen": false
            });
            imageDict[image] += 1;
        }

        if (imageDict[image] === 2) {
            imageList.splice(index, 1);
        }
    }
    return board;
}

export default createBoard;