/**
 * Varre um objeto de forma profunda em busca de um atributo.
 * Ao encontra-lo, atualiza seu valor.
 * Caso encontre, retorna true, e false no caso contrário
 * 
 * @param {Object} object objeto que deseja-se alterar um atributo
 * @param {String} attributeName nome do atributo a ser alterado
 * @param {any} value valor a ser atribuído ao atributo
 * @returns {Boolean}
 */
function setFirstDeepAttributeFound(object, attributeName, value) {
    for(const attr in object) {
        if(attr === attributeName) {
            object[attributeName] = value;
            return true;
        }

        if(typeof object[attr] === 'object' && setFirstDeepAttributeFound(object[attr], attributeName, value))
            return true;
    }

    return false;
}

export { setFirstDeepAttributeFound }