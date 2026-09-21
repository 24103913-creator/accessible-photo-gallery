function upDate(previewPic) {
    console.log("Image activated");
    console.log(previewPic.alt);
    console.log(previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;

    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";

    document.getElementById("image").innerHTML =
        "Hover over or focus on an image below to display here.";
}

function addTabFocus() {
    console.log("Page loaded - adding tabindex");

    var images = document.querySelectorAll(".preview");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
