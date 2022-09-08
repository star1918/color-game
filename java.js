var x=6;
var colors=grcolors(x);
var squares= document.querySelectorAll(".square");
var r=Math.floor(Math.random()*6);
var pickedColor=colors[r];
var colorDisplay=document.getElementById("colorDisplay");
var message=document.getElementById("message");
colorDisplay.textContent=pickedColor;
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
f=0;
var mode=document.querySelectorAll(".mode");
for(var i=0;i<2;i++)
{	
	var x;
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");	
		this.textContent==="EASY" ? x=3 : x=6;
		console.log(x.toString());
		reset1(x); 
	})
}
function reset1(n1){
	reset.textContent="New Colors";
	message.textContent="";
	colors=grcolors(n1);
	r=Math.floor(Math.random()*n1);
	pickedColor=colors[r];
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";	
		}
		else
		{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
}

// easy.addEventListener("click",function(){
// 	f=1;
// 	reset.textContent="New Colors";
// 	message.textContent="";
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	colors=grcolors(3);
// 	r=Math.floor(Math.random()*3);
// 	pickedColor=colors[r];
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++)
// 	{
// 		squares[i].style.backgroundColor=colors[i]
// 	}
// 	h1.style.backgroundColor="steelblue";
// 	for(var i=0;i<6;i++)
// 	{
// 		if(colors[i])
// 		{
// 			squares[i].style.backgroundColor=colors[i];
// 		}
// 		else
// 		{
// 			squares[i].style.display="none";
// 		}
// 	}

// })
// hard.addEventListener("click",function(){
// 	f=0;
// 	easy.classList.remove("selected");
// 	hard.classList.add("selected");
// 	reset.textContent="New Colors";
// 	message.textContent="";
// 	colors=grcolors(6);
// 	r=Math.floor(Math.random()*6);
// 	pickedColor=colors[r];
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<6;i++)
// 	{
// 		squares[i].style.backgroundColor=colors[i];
// 		squares[i].style.display="block";
// 	}
// 	h1.style.backgroundColor="steelblue";

// })

reset.addEventListener("click",function(){
	reset1(x);

	// reset.textContent="New Colors";
	// message.textContent="";
	// if(f===1)
	// 	n=3;
	// else
	// 	n=6;
	// colors=grcolors(n);
	// r=Math.floor(Math.random()*n);
	// pickedColor=colors[r];
	// colorDisplay.textContent=pickedColor;
	// for(var i=0;i<n;i++)
	// {
	// 	squares[i].style.backgroundColor=colors[i]
	// }
	// h1.style.backgroundColor="steelblue";
})

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i]
	squares[i].addEventListener("click",function(){
	 var clickedcolor=this.style.backgroundColor;
	 if(clickedcolor===pickedColor)
	 {
	 	changecolor(clickedcolor);
	 	message.textContent="Correct!";
	 	h1.style.backgroundColor=pickedColor;
	 	reset.textContent="Play again?"
	 } 
	 else
	 {
	 	this.style.backgroundColor= "#232323";
	 	message.textContent="Try again";
	 }
	});
}

function changecolor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function grcolors(num)
{
	var a=[];
	for(var i=0;i<num;i++)
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		var rgb="rgb("+r+", "+g+", "+b+")";
		a.push(rgb);
	}	
	return a;
}











