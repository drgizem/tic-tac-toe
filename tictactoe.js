const b1=document.getElementById("firstleft")
const b2=document.getElementById("firstmiddle")
const b3=document.getElementById("firstright")
const b4=document.getElementById("secondleft")
const b5=document.getElementById("secondmiddle")
const b6=document.getElementById("secondright")
const b7=document.getElementById("thirdleft")
const b8=document.getElementById("thirdmiddle")
const b9=document.getElementById("thirdright")
const reset=document.querySelector(".reset")
const result=document.querySelector(".result")
result.innerHTML="Player X Turn"

reset.addEventListener("click",()=>{
        b1.innerHTML=""
        b2.innerHTML=""
        b3.innerHTML=""
        b4.innerHTML=""
        b5.innerHTML=""
        b6.innerHTML=""
        b7.innerHTML=""
        b8.innerHTML=""
        b9.innerHTML=""
        result.innerHTML="Player X Turn"
    })

function bFunc1 (){
        b1.addEventListener("click",()=>{
                if (result.innerHTML==="Player X Turn"){
                        b1.innerHTML="X"
                        winner()
                }    else if (result.innerHTML==="Player O Turn"){
                        b1.innerHTML="O"
                        winner()
                }})}
bFunc1 ()  
function bFunc2 (){
         b2.addEventListener("click",()=>{
                if (result.innerHTML==="Player X Turn"){
                                b2.innerHTML="X"
                                winner()
                } else if (result.innerHTML==="Player O Turn"){
                                b2.innerHTML="O"
                                winner()
                }})}
 bFunc2 ()  
 function bFunc3 (){
        b3.addEventListener("click",()=>{
                if (result.innerHTML==="Player X Turn"){
                        b3.innerHTML="X"
                        winner()
                }    else if (result.innerHTML==="Player O Turn"){
                        b3.innerHTML="O"
                        winner()
                }})}
bFunc3 ()  
function bFunc4 (){
        b4.addEventListener("click",()=>{
                if (result.innerHTML==="Player X Turn"){
                        b4.innerHTML="X"
                        winner()
                }    else if (result.innerHTML==="Player O Turn"){
                        b4.innerHTML="O"
                        winner()
                }})}
bFunc4 ()  
function bFunc5 (){
        b5.addEventListener("click",()=>{
                if (result.innerHTML==="Player X Turn"){
                        b5.innerHTML="X"
                        winner()
                }    else if (result.innerHTML==="Player O Turn"){
                        b5.innerHTML="O"
                        winner()
                }})}
bFunc5 ()  
function bFunc6 (){
        b6.addEventListener("click",()=>{
                if (result.innerHTML==="Player X Turn"){
                        b6.innerHTML="X"
                        winner()
                }    else if (result.innerHTML==="Player O Turn"){
                        b6.innerHTML="O"
                        winner()
                }})}
bFunc6 ()  
function bFunc7 (){
        b7.addEventListener("click",()=>{
                if (result.innerHTML==="Player X Turn"){
                        b7.innerHTML="X"
                        winner()
                }    else if (result.innerHTML==="Player O Turn"){
                        b7.innerHTML="O"
                        winner()
                }})}
bFunc7 ()
function bFunc8 (){
        b8.addEventListener("click",()=>{
                if (result.innerHTML==="Player X Turn"){
                        b8.innerHTML="X"
                        winner()
                }    else if (result.innerHTML==="Player O Turn"){
                        b8.innerHTML="O"
                        winner()
                }})}
bFunc8 () 
function bFunc9 (){
        b9.addEventListener("click",()=>{
                if (result.innerHTML==="Player X Turn"){
                        b9.innerHTML="X"
                        winner()
                }    else if (result.innerHTML==="Player O Turn"){
                        b9.innerHTML="O"
                        winner()

                }})}
bFunc9 ()  
function winner(){   
if((b1.innerHTML==="X") && (b2.innerHTML==="X") && (b3.innerHTML==="X")){
                        result.innerHTML="Player X Won"} 
                else if ((b1.innerHTML==="X") && (b4.innerHTML==="X") && (b7.innerHTML==="X") ){
                        result.innerHTML="Player X Won"} 
                else if ((b1.innerHTML==="X") && (b5.innerHTML==="X") && (b9.innerHTML==="X") ){
                        result.innerHTML="Player X Won"} 
                else if ((b2.innerHTML==="X") && (b5.innerHTML==="X") && (b8.innerHTML==="X") ){
                        result.innerHTML="Player X Won"}
                else if ((b3.innerHTML==="X") && (b6.innerHTML==="X") && (b9.innerHTML==="X") ){
                        result.innerHTML="Player X Won"}
                else if ((b3.innerHTML==="X") && (b5.innerHTML==="X") && (b7.innerHTML==="X") ){
                        result.innerHTML="Player X Won"}
                else if ((b4.innerHTML==="X") && (b5.innerHTML==="X") && (b6.innerHTML==="X") ){
                        result.innerHTML="Player X Won"}
                else if ((b7.innerHTML==="X") && (b8.innerHTML==="X") && (b9.innerHTML==="X") ){
                         result.innerHTML="Player X Won"}
                else if ((b1.innerHTML==="O") && (b2.innerHTML==="O") && (b3.innerHTML==="O") ){
                        result.innerHTML="Player O Won"} 
                else if ((b1.innerHTML==="O") && (b4.innerHTML==="O") && (b7.innerHTML==="O") ){
                        result.innerHTML="Player O Won"} 
                else if ((b1.innerHTML==="O") && (b5.innerHTML==="O") && (b9.innerHTML==="O") ){
                        result.innerHTML="Player O Won"} 
                else if ((b2.innerHTML==="O") && (b5.innerHTML==="O") && (b8.innerHTML==="O") ){
                        result.innerHTML="Player O Won"}
                else if ((b3.innerHTML==="O") && (b6.innerHTML==="O") && (b9.innerHTML==="O") ){
                        result.innerHTML="Player O Won"}
                else if ((b3.innerHTML==="O") && (b5.innerHTML==="O") && (b7.innerHTML==="O") ){
                        result.innerHTML="Player O Won"}
                else if ((b4.innerHTML==="O") && (b5.innerHTML==="O") && (b6.innerHTML==="O") ){
                        result.innerHTML="Player O Won"}
                else if ((b7.innerHTML==="O") && (b8.innerHTML==="O") && (b9.innerHTML==="O") ){
                        result.innerHTML="Player O Won"}
                else if ((b1.innerHTML==="X" || b1.innerHTML==="O")&& (b2.innerHTML==="X" || b2.innerHTML==="O")&& (b3.innerHTML==="X" || b3.innerHTML==="O")&& (b4.innerHTML==="X" || b4.innerHTML==="O")&& (b5.innerHTML==="X" || b5.innerHTML==="O")&& (b6.innerHTML==="X" || b6.innerHTML==="O")&& (b7.innerHTML==="X" || b7.innerHTML==="O")&& (b8.innerHTML==="X" || b8.innerHTML==="O")&& (b9.innerHTML==="X" || b9.innerHTML==="O")){
                        result.innerHTML="Match Tie"}
                else{
                if (result.innerHTML==="Player X Turn"){
                        result.innerHTML="Player O Turn"
                }
                else if (result.innerHTML==="Player O Turn"){
                        result.innerHTML="Player X Turn"
                }}
        
}                