let imageBox = document.getElementById('ImgBox');
let QR_image = document.getElementById("QR-img");
let QR_text = document.getElementById("QR-text");
function getQRcode() {
    QR_image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QR_text.value;
    imageBox.classList.add("show-img");
}

