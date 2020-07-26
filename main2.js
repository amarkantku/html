
function count(str, substr) {
    let count=0;
    let found = false;
    for (let i=0; i < str.length; ) {
        if(str[i] === substr[0]) {
            for(let j=0; j < substr.length; j++ ) {
                if(str[i] === substr[j]) {
                    found =  true;
                } else {
                    found =  false;
                }
                i++;
            }
            if(found) {
                count++;
            }
        }
        i++;
    }
    return count;
}

const str = 'hello how are you how how hey are how';
const substr = 'o h';

console.log(count(str, substr));