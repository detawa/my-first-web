// script.js

// 1. เลือกปุ่มที่เราต้องการใช้งาน
const myButton = document.getElementById('magicButton');

// 2. สร้างฟังก์ชันสำหรับสุ่มสี
function changeColor() {
    // รายการสีเท่ๆ (เน้นโทนแดง/ดำ/ส้ม ตามสไตล์คุณ)
    const colors = ['#ff4b2b', '#ff416c', '#1a2a6c', '#b21f1f', '#fdbb2d'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // เปลี่ยนสีเส้นขอบของกล่อง .container
    const container = document.querySelector('.container');
    container.style.borderColor = randomColor;
    
    // เปลี่ยนข้อความในหัวข้อ h1 นิดหน่อย
    document.querySelector('h1').innerText = "Magic Happened! ✨";
}

// 3. สั่งให้ปุ่มทำงานเมื่อถูกคลิก
myButton.addEventListener('click', changeColor);