const properties = require ("properties");

const options = exports.options = {
    variables: true,
    sections: true,
    namespaces: true,
    comments: [";", "#"]
};

exports.stringify = obj => properties.stringify(obj, options);

exports.parse = obj => properties.parse(obj, options);
