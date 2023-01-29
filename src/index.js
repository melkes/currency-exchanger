import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchanger from './currencies';

function printError(newXhr) {
  const response = JSON.parse(newXhr.response);
  if (response.result === "error") {
    document.querySelector('#showResponse').innerText = `There was an error in accessing data: ${response['error-type']}`;
  }
}

function printElements(response, dollars) {
  document.querySelector('#showResponse').innerHTML = `$${dollars}</b> in <b>${response.target_code} is <b>${response.conversion_result}</b>`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const dollars = document.querySelector('#amount').value;
  const currencyCode = document.querySelector('#currencyCode').value;
  document.querySelector('#amount').value = null;
  Exchanger.getRate(dollars, currencyCode, printElements, printError);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});