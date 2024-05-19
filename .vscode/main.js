function moveSlider(direction) {
    let sliderItems = sliderlist.queryselectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')

    if(direction = 'next'){
        sliderlist.appendchild(sliderItems[0])
        thumbnail.appendchild(thumbnailItems[0])
        sliderItems.classlist.add('next')
    } else {
        sliderlist.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classlist.add('prev')
    }
}