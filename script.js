const darkButton = document.getElementsByTagName("a")[0]
const darkButtonImg = document.getElementsByTagName("img")[2]
const spiroIcon = document.getElementsByTagName("img")[0]
let isDarkMode = true

darkButton.addEventListener("click", ()=>{
    event.preventDefault();
    isDarkMode = (isDarkMode) ? false : true;
    changeTheme()
})

function changeTheme() {
    return (isDarkMode) ? turnOffDarkMode() : turnOnDarkMode();
}

const turnOffDarkMode = ()=>{
    darkButtonImg.src = "img/sun.png"
    spiroIcon.src = "img/spirob.png"
    document.documentElement.style.setProperty('--title-color', 'rgba(255, 255, 255, 0.7)')
    document.documentElement.style.setProperty('--placeholder-color', 'rgba(0, 0, 0, 0.7)')
    document.documentElement.style.setProperty('--second-part-bg', '#ffffff')
    document.documentElement.style.setProperty('--mail-bg', '#e8e8e8')
    document.documentElement.style.setProperty('--footer-bg', '#e1e1e1')
    document.documentElement.style.setProperty('--white-bg', '#000000')
    document.documentElement.style.setProperty('--black-bg', '#ffffff')
}

const turnOnDarkMode = ()=>{
    darkButtonImg.src = "img/moon.png"
    spiroIcon.src = "img/spiro.png"
    document.documentElement.style.setProperty('--title-color', 'rgba(0, 0, 0, 0.7)')
    document.documentElement.style.setProperty('--placeholder-color', 'rgba(255, 255, 255, 0.7)')
    document.documentElement.style.setProperty('--second-part-bg', '#1C1C1C')
    document.documentElement.style.setProperty('--mail-bg', '#272727')
    document.documentElement.style.setProperty('--footer-bg', '#383838')
    document.documentElement.style.setProperty('--white-bg', '#ffffff')
    document.documentElement.style.setProperty('--black-bg', '#000000')
}