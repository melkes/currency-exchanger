// export default function getRate(dollars) {
//   let request = new XMLHttpRequest();
//   const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/EUR/${dollars}`;
//   request.addEventListener("loadend", function() {
//     const response = JSON.parse(this.responseText);
//     if (this.status === 200) {
//       printElements(response, input);
//     } else {
//       printError(this, input);
//     }
//   });

//   request.open("GET", url, true);
//   request.send();
// }
export default class Exchanger {
static getRate(dollars, currencyCode, printElements, printError) {
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
}