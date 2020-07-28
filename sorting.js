let array = [-1,7,8,2,3,99,23,423,33,54,11,21];

function bubbleSort(array) {
    const len = array.length;
    let swap = false;
    let count = 0;
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < len-i ; j++) {
            count++;
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                swap = true;
            }
        }
        if(swap === false) {
            break;
        }
    }
    console.log('count', count);
    return array;
}
console.log('Bubble sort => ', bubbleSort(array));

function insertationSort(array) {
    let i=1;
    while(i< array.length) {
        let j=i;
        while(j> 0 && array[j-1] > array[j]) {
            let temp = array[j-1];
            array[j-1] = array[j];
            array[j] = temp;
            j--;
        }
        i++;
    }
    return array;
}

console.log('Insertation sort => ', insertationSort([-1,7,8,2,3,99,23,423,33,54,11,21]));

