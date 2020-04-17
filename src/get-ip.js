var getIp = async () => {
    // eslint-disable-next-line no-undef
    return new Promise(resolve => {
        require('dns').lookup(require('os').hostname(), function (err, add) {
            resolve(add);
        });
    });
};

module.exports = getIp;
