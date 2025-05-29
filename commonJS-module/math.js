function add (a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

// module.exports={add, subtract}
exports.add= add;
exports.subtract=subtract;

module.exports.default=divide