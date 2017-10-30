const properties = require ("properties");

const options = exports.options = {
    path: true,
    variables: true,
    sections: true,
    namespaces: true,
    include: true,
    comments: [";", "#"]
};

exports.stringify = obj => properties.stringify(obj, options);

exports.parse = obj => properties.parse(obj, options);
