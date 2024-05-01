function RomanToInteger(roman) {
    let ans = 0;
    let obj = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};

    for (let i = 0; i < roman.length; i++) {
        // If current value is less than next value, subtract the current value
        if (i + 1 < roman.length && obj[roman[i]] < obj[roman[i + 1]]) {
            ans -= obj[roman[i]];
        } else {
            ans += obj[roman[i]];
        }
    }

    return ans;
}

let output = RomanToInteger("XCDM");
console.log(output); 
