exports.getBase = () => {
    return 5;
}

exports.getValue = () => {
    return module.exports.getBase() + 1;
};