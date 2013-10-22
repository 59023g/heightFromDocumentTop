

window.onscroll = function() {
    var top = document.body.scrollTop;

    imgs = document.querySelectorAll('.imgContainer')
    console.log(imgs)

    for (i = 0; i < imgs.length; i++) {

        var divY = imgs[i].getBoundingClientRect().top
        var img = imgs[i].lastElementChild
        var imgH = img.height

        if ((divY < 100) && (divY > 0)) {
            img.classList.add('color')
        } else if ((-divY) == imgH) {
            img.classList.remove('color')
        }
    }


}
