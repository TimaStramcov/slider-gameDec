const slide = document.querySelectorAll('#slide-item'),
      btnPrev = document.getElementById('btn-prev'),
      btnNext = document.getElementById('btn-next'),
      slider = document.getElementById('slider');
      let arrayItem = [...slide];


const removeItem = () => {
    for (let i = 0; i < arrayItem.length; i++){
        arrayItem[i].remove()
    }
}
removeItem()

const render = () => {
    for (let i = 0; i < arrayItem.length; i++){
        slider.appendChild(arrayItem[i]);
    }
    arrayItem[1].classList.add('current')
}
render()

const clickBtnPrev = () => {
    arrayItem.forEach(item => {
        item.classList.remove('current')
    })
    
    arrayItem.unshift(arrayItem[2])
    arrayItem.splice(3,3)
    render()
    console.log('click-button-prev')
}

const clickBtnNext = () => {
    arrayItem.forEach(item => {
        item.classList.remove('current')
    })
    arrayItem.push(arrayItem[0])
    arrayItem.splice(0,1)
    render()
    console.log('click-button-next')
    console.log(arrayItem)
}

btnPrev.addEventListener('click', () => {
    clickBtnPrev()
})

btnNext.addEventListener('click', () => {
    clickBtnNext()
})

const timeout = () => {
    setInterval(() => {
        clickBtnNext()
    }, 4000);
}

timeout()