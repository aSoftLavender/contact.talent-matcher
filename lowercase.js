function lowerCasify(data) {
    for (var i in data) {
        if (typeof data[i] === 'string') {
            data[i] = data[i].toLowerCase();
        }
        if (typeof data[i] === 'object') {
            lowerCasify(data[i]);
        }
    }
    return data
}

module.exports = {
    lowerCasify,
}