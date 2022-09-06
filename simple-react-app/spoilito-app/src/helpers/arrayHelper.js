import React from 'react';

class ArrayHelper {
    static remove(item, array) {
        if (array.includes(item)) {
            let index = array.indexOf(item);
            array.splice(index, 1);
        }
    }
}
export default ArrayHelper;