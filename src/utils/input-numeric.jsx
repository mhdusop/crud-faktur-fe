export const handleNumericInput = (event) => {
   let inputValue = event.target.value;
   let numericValue = inputValue.replace(/[^0-9]/g, '');
   event.target.value = numericValue;
}