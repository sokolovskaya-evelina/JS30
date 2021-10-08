const secondsArrow = document.querySelector('.second')
const minuteArrow = document.querySelector('.minute')
const hourArrow = document.querySelector('.hour')
const setDate = () => {
    const date = new Date()

    const seconds = date.getSeconds()
    const secondsDeg = (seconds / 60) * 360 + 90
    secondsArrow.style.transform = `rotate(${secondsDeg}deg)`

    const minutes = date.getMinutes()
    const minuteDeg = (minutes / 60) * 360 + 90
    minuteArrow.style.transform = `rotate(${minuteDeg}deg)`

    const hours = date.getHours()
    const hoursDeg = (hours / 12) * 360 + 90
    hourArrow.style.transform = `rotate(${hoursDeg}deg)`
}

setInterval(setDate, 1000)