let products = [
  { price: 100, discount: 10 },
  { price: 250, discount: 20 },
  { price: 300, discount: 5 },
  { price: 150, discount: 0 },
  { price: 400, discount: 15 }, 
];

function calculateTotal() {
  let total = 0;

  products.forEach(function (product, index) {
    let priceAfterDiscount =
      product.price * (1 - product.discount / 100);

    console.log(
      `สินค้า ${index + 1} | ราคาเต็ม: ${product.price} | ส่วนลด: ${product.discount}% | หลังลด: ${priceAfterDiscount.toFixed(2)}`
    );

    total += priceAfterDiscount;
  });

  console.log(
    `Total price after discount: $${total.toFixed(2)}`
  );
}
console.log("=== Workshop 3.4: รวมราคาสินค้าหลังส่วนลด ===");
calculateTotal();
