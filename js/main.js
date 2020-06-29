var array = [5, 4, 3, 1, 7];

function inserct(array) {
    var w;
    var troca;
    var array2 = [];
    for (i = 0; i < array.length; i++) {
        w = array[i];
        for (j = 0; j < i; j++) {
            if (w < array2[j]) {
                troca = array2[j];
                array2[j] = w;
                w = troca;
            }
        }
        array2.push(w);
    }
    return array2;
}
console.log(inserct(array));
