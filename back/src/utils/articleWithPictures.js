
function articleWithPictures(queryA, queryB) {
    const picture = [...queryB];

    queryA.push(picture);


    return queryA;
}

export { articleWithPictures };