window.addEventListener("load", function (event) {
    qr_image = document.getElementById("download");
    link = document.getElementById("compartir")
    // Add an event listener that will fire our code when the link is clicked
    qr_image.addEventListener("click", setUpDownload);
    link.addEventListener("click", copyLink);

})



// Grab the generated img src, and copy it into the link href
function setUpDownload() {
    // Find the image inside the #qrcode div
    var image = document.getElementById("qrcode").getElementsByTagName("img");

    // Get the src attribute of the image, which is the data-encoded QR code
    var qr = image[0].src;

    // Copy that to the download link
    qr_image.href = qr;
}

function copyLink() {

    var copyText = sessionStorage.getItem("url")

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Link copied!");

}
