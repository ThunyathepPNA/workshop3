let productPrice = 600;      
let discountPercentage = 20;

let priceAfterDiscount = productPrice * (1 - discountPercentage / 100);

let finalPrice = priceAfterDiscount;

if (priceAfterDiscount <= 0) {
  finalPrice = 0;
}

if (priceAfterDiscount > 0 && priceAfterDiscount <= 500) {
  finalPrice = priceAfterDiscount + 50;
}

if (priceAfterDiscount > 500) {
  finalPrice = priceAfterDiscount * 0.9;
}
console.log("=== Workshop 3.2: การคำนวณราคา ===");
console.log(`ราคาเต็ม: ${productPrice} บาท`);
console.log(`ส่วนลดพื้นฐาน: ${discountPercentage}%`);
console.log(`ราคาหลังหักส่วนลดพื้นฐาน: ${priceAfterDiscount.toFixed(2)} บาท`);
console.log(`ราคาสุดท้ายที่ต้องจ่าย: ${finalPrice.toFixed(2)} บาท`);
