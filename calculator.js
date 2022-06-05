const numberbutton=document.querySelectorAll(".num")
const operatorbutton=document.querySelectorAll('.operator')
const input=document.querySelector('.input')


const clear=document.querySelector('.clear')
const dotbutton=document.querySelector('.dot')
const resultbutton=document.querySelector('.result')

let text=""
document.getElementById('zero').addEventListener("click",()=>{
    text+="0"
    input.innerHTML=`${text}`
})
document.getElementById('one').addEventListener('click',()=>{
    text+="1"
    input.innerHTML=`${text}`
})
document.getElementById('two').addEventListener('click',()=>{
    text+="2"
    input.innerHTML=`${text}`
})
document.getElementById('three').addEventListener('click',()=>{
    text+="3"
    input.innerHTML=`${text}`
})
document.getElementById('four').addEventListener('click',()=>{
    text+="4"
    input.innerHTML=`${text}`
})
document.getElementById('five').addEventListener('click',()=>{
    text+="5"
    input.innerHTML=`${text}`
})
document.getElementById('six').addEventListener('click',()=>{
    text+="6"
    input.innerHTML=`${text}`
})
document.getElementById('seven').addEventListener('click',()=>{
    text+="7"
    input.innerHTML=`${text}`
})
document.getElementById('eight').addEventListener('click',()=>{
    text+="8"
    input.innerHTML=`${text}`
})
document.getElementById('nine').addEventListener('click',()=>{
    text+="9"
    input.innerHTML=`${text}`
})

function clearfunc(){
    clear.addEventListener('click', ()=>{
        text=" "
        input.innerHTML=`${text}`
    })
}
clearfunc()

function operator(){

}

function result(){


}