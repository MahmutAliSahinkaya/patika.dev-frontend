let inputname =prompt("Adinizi Giriniz: ")
let username = document.querySelector("#myName")
username.innerHTML=`${inputname}`

function time(){
let dateData = new Date()
let hours = dateData.getHours()
let minutes=dateData.getMinutes()
let seconds=dateData.getSeconds()

let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
let dayName = days[dateData.getDay()]

let info =document.querySelector("#myClock")
info.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`

}
setInterval(time,1000);