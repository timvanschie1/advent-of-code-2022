function pathArrayFromString (pathString) {
    const arrayWithoutSlashes = pathString.split('/')
    arrayWithoutSlashes.pop(); // Remove the last item, since it's an empty string.
    return arrayWithoutSlashes.map(dir => dir + '/');
}

function pathStringFromArray (pathArray) {
    let pathString = '';
    pathArray.forEach(dir => {
        pathString = pathString + dir;
    })
    return pathString;
}

module.exports = {pathArrayFromString, pathStringFromArray};