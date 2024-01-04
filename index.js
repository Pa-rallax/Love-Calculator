document.querySelector("#butt1").addEventListener("click",reload)
function reload(){
var randomNum = Math.random();
randomNum = Math.floor(randomNum * 100) + 1;
if(randomNum <= 30){
  alert(randomNum + "% " + "Lmfao 💀");
}else if(randomNum >=30 && randomNum <= 50 ){
   alert(randomNum + "% " +'Not really 😂');
}else if(randomNum >=50 && randomNum <= 80){
    alert(randomNum + "% " +'You should give it a shot');
}else{
    alert(randomNum + "% " +'Congratulations 😏');
}
}