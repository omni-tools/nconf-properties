const properties = require ("properties");

exports.stringify = obj => properties.stringify(obj)

exports.parse = obj => properties.parse(obj);