
var div=document.getElementById('canvas')
  document.onmousedown=function(a) 
  {	
	var x=a.clientX
	var y=a.clientY
	var divA=document.createElement('div')
	divA.style="width:6px; height:6px;border-radius:3px;" +
	"background:black; position:absolude;left:"+x+"px;"+"top:"+y+"px;"
	div.appendChild(divA)
  }
  document.onmousemove =function(){
			
  }