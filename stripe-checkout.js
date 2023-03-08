import STRIPE_KEYS from "./stripe-keys.js";

const d = document,
  $productos = d.getElementById("productos"),
  $template = d.getElementById("producto-template").content,
  $fragment = d.createDocumentFragment(), 
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };
let prices, products;
Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    console.log(json);
  });
