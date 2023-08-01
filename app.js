
const enterDay = document.querySelector('.input-date')
const enterMonth = document.querySelector('.input-month')
const enterYear = document.querySelector('.input-year')
const inputData = document.querySelector('.inputData')

const displayDate = document.querySelector('.dys')
const displayMonth = document.querySelector('.mnths')
const displayYear = document.querySelector('.yrs')

const submit = document.querySelector('.submitBtn')

/* --------listen to the input typed by the user is valid number, not negative, no special characters , no alphabets ------------------------------ */
let invalidChars = ["-", "e", "+", "E"]

enterMonth.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) 
  {e.preventDefault() }
})

enterMonth.addEventListener('input',function(evt)
{
if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57 && invalidChars.includes(e.key))
  { evt.preventDefault() }   
  
})

enterYear.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) 
  { e.preventDefault();  }
})

enterYear.addEventListener('input',function(evt)
{
if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57 && invalidChars.includes(e.key) )
  { evt.preventDefault()  }
})

enterDay.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) 
  {e.preventDefault()   }
})

enterDay.addEventListener('input',function(evt)
{
if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57 && invalidChars.includes(e.key) )
  { evt.preventDefault()  }
})


/* ----------------------listen to the input typed by the user is a valid date,month,year ------------------------------ */

enterMonth.addEventListener('input',function()
{
  if(enterMonth.value > 12)
  { document.querySelector('.month-invalid-msg').style.display='block'
    document.querySelector('.input-data-month').style.border='1px solid hsl(0, 100%, 67%)'
    document.querySelector('.title1').style.color='hsl(0, 100%, 67%)' } 
    else
    { document.querySelector('.month-invalid-msg').style.display='none'
      document.querySelector('.input-data-month').style.border='1px solid hsl(0, 0%, 86%)'
      document.querySelector('.title1').style.color='hsl(0, 1%, 44%)'
      document.querySelector('.month-error-msg').style.display='none' } 
  
})

enterYear.addEventListener('input',function()
{
  if(enterYear.value > 2023)
  { document.querySelector('.year-invalid-msg').style.display='block'
    document.querySelector('.input-data-year').style.border='1px solid hsl(0, 100%, 67%)'
    document.querySelector('.title2').style.color='hsl(0, 100%, 67%)' }
    else if(enterYear.value < 1800)
    {
      document.querySelector('.year-invalid').style.display='block'
    document.querySelector('.input-data-year').style.border='1px solid hsl(0, 100%, 67%)'
    document.querySelector('.title2').style.color='hsl(0, 100%, 67%)' }
     else
    { document.querySelector('.year-invalid-msg').style.display='none'
    document.querySelector('.year-invalid').style.display='none'
      document.querySelector('.input-data-year').style.border='1px solid hsl(0, 0%, 86%)'
      document.querySelector('.title2').style.color='hsl(0, 1%, 44%)' } 
      document.querySelector('.year-error-msg').style.display='none' 
})

enterDay.addEventListener('input',function()
{
  if(enterDay.value > 31)
  { document.querySelector('.date-invalid-msg').style.display='block'
    document.querySelector('.input-data-day').style.border='1px solid hsl(0, 100%, 67%)'
    document.querySelector('.title').style.color='hsl(0, 100%, 67%)' }
    else
    { document.querySelector('.date-invalid-msg').style.display='none'
      document.querySelector('.input-data-day').style.border='1px solid hsl(0, 0%, 86%)'
      document.querySelector('.title').style.color='hsl(0, 1%, 44%)'
      document.querySelector('.date-error-msg').style.display='none' }  
})


submit.addEventListener('click',function()
{
  let day = enterDay.value
  let month = enterMonth.value
  let year = enterYear.value 
/* ----------------------listen to the submit event and check the input fields are empty or not ------------------------------ */
  if(day == "")
  { document.querySelector('.date-error-msg').style.display='block'
    document.querySelector('.input-data-day').style.border='1px solid hsl(0, 100%, 67%)'
    document.querySelector('.title').style.color='hsl(0, 100%, 67%)' 
  } 

  if( month == "")
  { document.querySelector('.month-error-msg').style.display='block'
    document.querySelector('.input-data-month').style.border='1px solid hsl(0, 100%, 67%)'
    document.querySelector('.title1').style.color='hsl(0, 100%, 67%)'
  }

    
  if( year == "")
  { document.querySelector('.year-error-msg').style.display='block'
    document.querySelector('.input-data-year').style.border='1px solid hsl(0, 100%, 67%)'
    document.querySelector('.title2').style.color='hsl(0, 100%, 67%)'
  }

/* ---------------------- display invalid message for months having less than 30 days ------------------------------ */
 if( month == 4 && day > 30 || month == 6 && day > 30 || month == 9 && day > 30 || month == 11 && day > 30)    
  {  document.querySelector('.date-invalid-msg').style.display='block' 
  }

/* ---------------------- display message for leap years ------------------------------ */
  else if( year % 4 == 0 && day > 29 && month == 2 || year % 4 != 0 && day > 28 && month == 2 )
  {  document.querySelector('.date-invalid-msg').style.display='block' 
  }
/* ---------------------- display date,month and year for valid dates ------------------------------ */  
 else if(month !="" && day !="" && enterYear.value != "")
{
  let date = new Date()
  let currentDate = date.getDate()
  let currentMonth = date.getMonth() + 1
  let currentYear = date.getFullYear()

  let newDate = Math.abs(day - currentDate)
  let newMonth = Math.abs(month - currentMonth)
  let newYear = Math.abs(year - currentYear)

/* ---------------------- animated display date,month and year for valid dates ------------------------------ */   
  let counts = setInterval(updated,70)
  let counts1 = setInterval(updated1,70)
  let counts2 = setInterval(updated2,70)
  let counterDate = 0
  let counterMonth = 0 
  let counterYear = 0
  function updated() {
    displayDate.innerHTML = ++counterDate
    if (counterDate === newDate) {
      clearInterval(counts)
    }
  }
  function updated1() {
    displayMonth.innerHTML = ++counterMonth 
    if (counterMonth === newMonth) {
      clearInterval(counts1)
    }
  }
  function updated2() {
    displayYear.innerHTML = ++counterYear
    if (counterYear === newYear) {
      clearInterval(counts2)
    }
  }

}
else{
  displayDate.innerHTML=" --"
  displayMonth.innerHTML="--"
  displayYear.innerHTML="--"
}    
})

