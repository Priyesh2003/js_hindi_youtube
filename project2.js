//...javascript
const form = document.querySelector('Form');
//this use case given empty value-- agr hm yaha pr id ko pass karenge tb
//const height=parseInt(document.querySelector('height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value); //id ko #se likhte hai
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    (results.innerHTML = 'Please Give A Valid height'), height;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    (results.innerHTML = 'Please Give A Valid weight'), weight;
  } else {
    const BMI = (weight / ((height * weight) / 10000)).toFixed(2);
results.innerHTML = '<span>' + BMI + '</span>';//'${BMI}'
  }
});
