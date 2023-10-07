let enterBill=document.getElementById('enterBill')
let enterPercent=document.getElementById('enterPercent')
let btn=document.getElementById('btn')
let para=document.getElementById('para')

btn.addEventListener('click', ()=>{
  let bill= Number(enterBill.value)
  let percent=Number(enterPercent.value)
  let total=bill+percent
  console.log(total)

  para.textContent=`Total: $${total}.00`
})