window.onload = startSlidesShow;

function startSlidesShow() {
    setInterval(doAnimationSlideShow, 3000);

}
function doAnimationSlideShow() {
let imgs = document.querySelectorAll('img');

for (let i = 0; i < imgs.length; i++) {

    if(imgs[i].classList.contains('show')){
        imgs[i].classList.remove('show')

        let nextIndex = (i + 1);
        if(nextIndex >= imgs.length) {
            nextIndex = 0;
        }
        imgs[nextIndex].classList.add('show');
        break;
    } 
    


}
}