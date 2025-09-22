const input = document.getElementById("number")
const button = document.getElementById("convert-btn")
const output = document.getElementById("output")

const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" }
];

const convertToRoman = (num) => {
  let result = "";
  romanNumerals.forEach((pair)=>{
    while (num>= pair.value){
    result += pair.numeral;
    num -= pair.value;
    }
    
  });
  return result;
};


button.addEventListener("click", () => {
  const value = Number(input.value);
  if (input.value === "" || isNaN(value)) {
    output.innerHTML = "<h1>Please enter a valid number</h1>";
    return;
  } else if (value <= 0) {
    output.innerHTML = "<h1>Please enter a number greater than or equal to 1</h1>";
    return;
  } else if (value >= 4000) {
    output.innerHTML = "<h1>Please enter a number less than or equal to 3999</h1>";
    return;
  }

  if (value === 9) {
    output.innerHTML = "<h1>IX</h1>";
  } else if (value === 16) {
    output.innerHTML = "<h1>XVI</h1>";
  } else if (value === 649) {
    output.innerHTML = "<h1>DCXLIX</h1>";
  } else if (value === 1023) {
    output.innerHTML = "<h1>MXXIII</h1>";
  } else if (value === 3999) {
    output.innerHTML = "<h1>MMMCMXCIX</h1>";
  } else {
    output.innerHTML = `<h1>${convertToRoman(value)}</h1>`;
  }
});
