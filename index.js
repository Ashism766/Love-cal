
function LoveNumber()
{
  var x = Math.random()*100;
  x = Math.floor(x)+1;

  while(x<70){
    x = Math.random()*100;
    x = Math.floor(x)+1;
  }
  var pre = "Your compatibility ";
  x+='%';


  var y = document.getElementById('finput').value;
  var z = document.getElementById('linput').value;


 if(y.length > 0 && z.length >0 ){
  document.getElementById("result").innerHTML = x;
  document.getElementById("button").innerHTML = "Tray Again";
  }
}
