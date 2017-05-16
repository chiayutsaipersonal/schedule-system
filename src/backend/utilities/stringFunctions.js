module.exports = {
    decapitalize: decapitalize
};

function decapitalize(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
