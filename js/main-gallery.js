function toggleImage() {
    var img1 = "https://wallpaperaccess.com/full/1278278.jpg";
    var img2 = "https://wallpapercave.com/wp/wp2564766.jpg";
    var img3 = "https://i.pinimg.com/236x/5d/ea/fa/5deafa093ed8110ead2494351d1b5260.jpg";
    var img4 = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png";
    var img5 = "https://images5.alphacoders.com/770/thumb-1920-770521.jpg";

    var imgElement = document.getElementById('toggleImage');

    if (imgElement.src === img1) {
        imgElement.src = img2;
        return false;
    }
    else if (imgElement.src === img2) {
        imgElement.src = img3;
        return false;
    }
    else if (imgElement.src === img3) {
        imgElement.src = img4;
        return false;
    }
    else if (imgElement.src === img4) {
        imgElement.src = img5;
        return false;
    }
    else if (imgElement.src === img5) {
        imgElement.src = img1;
        return false;
    }
}