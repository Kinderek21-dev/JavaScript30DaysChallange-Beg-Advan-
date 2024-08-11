document.getElementById('toRoman').addEventListener('click', function() {
    const num = parseInt(document.getElementById('input').value);
    if (num >=3001 || num <= 0) {
        document.getElementById('result').innerText = 'Wprowadź poprawną liczbę!';
    } else {
        document.getElementById('result').innerText = 'Wynik: ' + arabicToRoman(num);
    }
});
function arabicToRoman(num) {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' },
    ];

    let result = '';
    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    
    return result;
    
    
}
console.log(result);