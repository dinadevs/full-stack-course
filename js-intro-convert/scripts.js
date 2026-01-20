//Currency exchange rates of the day.
const USD = 5.37
const EUR = 6.30
const GBP = 7.23

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

amount.addEventListener("input", () => {
   const hasCharactersRegex = /\D+/g
   amount.value = amount.value.replace(hasCharactersRegex, "")
  })

  form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value) {
      case "USD": 
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
    }
  }

  function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol)
  }