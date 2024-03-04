
function getDetails() {
    let url = document.getElementById("linkUrl");
    let holder = document.getElementById("placeHolder");
    let qrCodeText = document.getElementById("qrcode");
    qrCodeText.innerHTML = "";
    const newQr = new QRious({
        element: qrCodeText,
        value: url.value,
        size: 600,
        padding: 50,
    });
    url.value = "";
    holder.innerHTML = "";
    const newElement = document.createElement('img');
    const hrTag = document.createElement('hr');
    hrTag.classList.add('border', 'border-dashed', 'border-gray-400')
    newElement.classList.add('w-full', 'h-full', 'rounded-t-2xl', 'shadow-lg')
    newElement.src = newQr.toDataURL();
    holder.appendChild(newElement);
    holder.appendChild(hrTag);
}
function download() {
    let link = document.createElement("a");
    link.download = "download.png";
    link.href = document.getElementById("qrcode").toDataURL();
    link.click();
}
