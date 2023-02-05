# Currency Exchanger

### By Mike Wilkes
#### An application to convert currency pairs using the [ExchangeRate API](https://www.exchangerate-api.com/)
---
## Technologies Used
* Git
* HTML
* CSS/Bootstrap
* Javascript
* npm
* Webpack
* [ExchangeRate API](https://www.exchangerate-api.com/)

## Setup/Installation Requirements

### Get an API key:
* Visit https://www.exchangerate-api.com and enter an email address, then choose a new password to finish registration and create your API key.
* After you are signed in with an email address and password, your API key is available at https://app.exchangerate-api.com/dashboard.

### Run the program
* Clone this repository
* Navigate to its directory in a terminal window, and run:
  * `npm install`
* Create a new `.env ` file in the project directory by entering `touch .env` in the terminal.
* Open the `.env` file and paste in `API_KEY=YOUR-API-KEY`, replacing `YOUR-API-KEY` with your actual API key, and save.
* In the terminal enter
  * `npm run build`, then
  * `npm run start`

## Potential improvements/roadmap
* Allow for conversion both to and from USD
* UI improvements:
    * Allow user's inputed number to persist after form submission for easier conversion to other currencies
    * Shorten converted amounts to two decimals
    * Use the appropriate symbol for the converted currency
    * Add comma separators to results to make large numbers easier to read. Or, convert larger number into rounded millions/billions, or both (e.g., “$1,000 is equal to ¥1.3 million”)
* Additional design and styling improvements
* Cache API results and use session storage for new conversions

## License
---
MIT License

Copyright (c) _2023_ _Mike Wilkes_ 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
