import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import  from './currencies';

function getRate(dollars, currencyCode) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currencyCode}/${dollars}`;
  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, dollars);
    } else {
      printError(this, dollars);
    }
  });

  request.open("GET", url, true);
  request.send();
}

function printError(newXhr) {
  document.querySelector('#showResponse').innerText = `There was an error in accessing data: ${newXhr.status} ${newXhr.statusText}`;
}

function printElements(response, dollars) {
  document.querySelector('#showResponse').innerHTML = `$${dollars}</b> in <b>${response.target_code} is <b>${response.conversion_result}</b>`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const dollars = document.querySelector('#amount').value;
  // const currencyCode = document.querySelector('#currencyCode').value;
  document.querySelector('#amount').value = null;
  getRate(dollars);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});

