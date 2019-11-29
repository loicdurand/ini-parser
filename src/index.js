const parser = (ini, result = {}) => {

    let mem = '';

    ini
        // découpe le texte en lignes
        .split(/[\n]+/g)
        // supprime les lignes vides et les commentaires
        .filter(line => line.trim() && !line.match(/^\s*[;#]/))
        // recherche par :          section    |key      = value
        .map(line => line.match(/^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i))
        // boucle sur les matchs
        .map(match => {

            let [, section, key, , value] = match.map(m => m && m.trim());

            if (section) {

                mem = section;

            } else {

                // affactation de références
                if (typeof value == 'string' && value.charAt(0) == '$') {
                    let // 
                        search = result,
                        varName = value.slice(1),
                        props = varName.split(/\./);
                    props.map(prop => {
                        search = search[prop]
                    });
                    value = search;
                }

                // typage des Int
                if (typeof value == 'string' && value.charAt(0) == '+' && !isNaN(value.slice(1)))
                    value = +value;
                // typage des Bool
                if (['true', 'false', 'null'].indexOf(value) != -1)
                    value = JSON.parse(value);

                // création des tableaux
                if (key.length > 2 && key.slice(-2) === '[]') {
                    key = key.substring(0, key.length - 2);
                    if (mem) {
                        if (result[mem] && !result[mem][key])
                            result[mem][key] = []
                        result[mem][key].push(value);
                    } else {
                        if (!result[key])
                            result[key] = [];
                        result[key].push(value);
                    }

                } else {

                    // affectations simples
                    if (mem == '') {
                        result[key] = value;
                    } else {
                        // affectations dans une section -> objet
                        if (!result[mem])
                            result[mem] = {};

                        result[mem][key] = value;
                    }
                }
            }
        })

    return result;
};

export default parser;