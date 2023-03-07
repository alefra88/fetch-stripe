import STRIPE_KEYS from "./stripe-keys.js";

const d = document,
  $productos = d.getElementById("productos"),
  $template = d.getElementById("producto-template").content,
  $fragment = d.createDocumentFragment();

fetch("https://api.stripe.com/v1/products", {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => console.log(json));