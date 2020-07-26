console.log('Please use latest chrome browser to experience the best graphic :)');
// alert('\nPlease use latest chrome browser to experience the best graphic :)\nClick the Button to expand details !');

const clickBtn = document.querySelector('.btn')
const content = document.getElementById('content')
const aside = document.getElementById('aside')
const rightMenu = document.querySelector('.right-head')
const leftMenu = document.querySelector('.left-head')
const hideBtn = document.querySelector('.btn')

clickBtn.addEventListener('click', event => {
    if (content.style.display === 'none') {
        content.style.display = 'block'
        aside.style.display = 'block'
        rightMenu.style.display = 'block'
        clickBtn.innerHTML = 'Hide'
    } else {
        content.style.display = 'none'
        aside.style.display = 'none'
        rightMenu.style.display = 'none'
        clickBtn.innerHTML = 'Click Me'
    }
})