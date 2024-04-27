export const Datastore = [{
    image: "/images/hero-image1.png",
    title: "Yellow Jacket",
    price: 90,
    id: 1,
    description:"Yellow specimen image  with price of 10 and description of price",
    category:["men","children","womens"],
    quantiry:100
  },
  {
    image: "/images/hero-image.png",
    title: "Yellow Jacket",
    price: 40,
    id: 2,
    description:"Yellow specimen image  with price of 10 and description of price",
    category:["men","children","womens"],
    quantiry:100
  },
  {
    image: "/images/81HCIlcM7xL._AC_SX679_.jpg",
    title: "Yellow Jacket",
    price: 10,
    id: 3,
    description:"Yellow specimen image  with price of 10 and description of price",
    category:["men","children","womens"],
    quantiry:100
  }
  ,
  {
    image: "/images/air-jordan-1-retro-high-og-rebellionaire-release-datea.jpg",
    title: "Yellow Jacket",
    price: 10,
    id: 4,
    description:"Yellow specimen image  with price of 10 and description of price",
    category:["men","children","womens"],
    quantiry:100
  }

];

function calculateTotalPrice(data) {
  let totalPrice = 0;

  data.forEach(item => {
    // Check if the price is a string with a dollar sign
    if (typeof item.price === "string" && item.price.endsWith("$")) {
      // Remove the dollar sign and convert to a number
      const priceWithoutSymbol = parseFloat(item.price);
      totalPrice += priceWithoutSymbol;
    } else if (typeof item.price === "number") {
      // Add the price directly if it's a number
      totalPrice += item.price;
    }
  });

  return totalPrice;
}

 export const totalPrice = calculateTotalPrice(Datastore);
console.log("Total Price:", totalPrice);
