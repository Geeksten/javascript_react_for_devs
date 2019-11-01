function getElementsByAttribute(attribute, value) {
    var all = document.getElementsByTagName('*');
    var found = [];

    for (let i = 1; i < all.length; i++) {
        elem = all[i];

        if (elem.getAtrribute(attribute) === value) {
            found.push(elem);
        }
    }
    return found;
}