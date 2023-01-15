function getRandomImage(data) {
    const list = [];
    const dataKeys = Object.keys(data);

    while (list.length < 8) {
        let index = Math.floor(Math.random() * dataKeys.length);
        let image = dataKeys[index];

        if (!list.includes(image)) {
            list.push(image);
        }
    }
    return list;
}

export default getRandomImage;