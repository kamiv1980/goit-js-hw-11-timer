'use strict'

const days = document.querySelector('span[data-value="days"]')
const hours = document.querySelector('span[data-value="hours"]')
const minutes = document.querySelector('span[data-value="mins"]')
const seconds = document.querySelector('span[data-value="secs"]')

const timeNow = Date.now()
const targetDate = new Date('Jul 17, 2020').getTime()
let time = timeNow - targetDate

const timer = setInterval(() => {
  days.textContent = Math.floor(time / (1000 * 60 * 60 * 24))
  hours.textContent = Math.floor(
    (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  )
  minutes.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  seconds.textContent = Math.floor((time % (1000 * 60)) / 1000)
  time = time - 1000
  if (time < 0) {
    clearInterval(timer)
  }
}, 1000)
