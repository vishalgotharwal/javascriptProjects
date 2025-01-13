const inputdob= document.querySelector('#inputdob')
const calculateButton = document.querySelector('#calculateButton')

const agecalculate = document.querySelector('.agecalculate')


//let month = todaydata.getmonth() , gatyear()

calculateButton.addEventListener("click" , ()=>{
    const inputdobvalue =  new Date(inputdob.value)

    console.log(inputdobvalue)

    const day = inputdobvalue.getDate()
    const year = inputdobvalue.getFullYear()
    const month = inputdobvalue.getMonth() + 1

    checkage(day , year , month) ; 

})

function checkage(day ,year , month){
    const TodayDate = new Date() 
    let countdate =  TodayDate.getDate()- day
    let countmonth = (TodayDate.getMonth() + 1) - month
    let countYear = TodayDate.getFullYear() - year

    if (countdate < 0) {
        countmonth -= 1
        countdate += 30
    }

    if (countmonth < 0) {
        countYear -= 1
        countmonth += 12
    }

       
     console.log(`${countYear} month ${countmonth} year ${countdate} `)

     showdate(countdate , countmonth , countYear)
     

}

function showdate(countdate , countmonth , countYear){
     const agecalculatedisplay = document.createElement('p')
     agecalculatedisplay.className = 'calculatedisplay' ;
     agecalculatedisplay.innerHTML = `Day : ${countdate} month : ${countmonth} year : ${countYear}`

     agecalculate.innerHTML = ''
     agecalculate.appendChild(agecalculatedisplay)


}


