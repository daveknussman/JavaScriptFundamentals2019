/**
 * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
 *
 *
 *  Developer notes:
 *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
 *
 *
 * This is the API you will be using. The method will be GET.
 * https://ron-swanson-quotes.herokuapp.com/v2/quotes
 */

const btnAxios = document.querySelector("#button");
const btnAxios2 = document.querySelector("#button2");
const quote = document.querySelector("#quote");

async function getQuote() {
    try {
      const result = await axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
      quote.textContent = result.data[0];
    } catch (err) {
       console.error('Error:', err);
    }
};

async function getQuote2() {
  try {
    const result = await axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
   return result.data[0];
  } catch (err) {
     console.error('Error:', err);
  }
};

btnAxios.addEventListener("click",() => getQuote());

btnAxios2.addEventListener("click",() => {
  getQuote2().then(response => {
    quote.textContent = response;
  });
  });