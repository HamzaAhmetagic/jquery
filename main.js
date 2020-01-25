// https://jsonplaceholder.typicode.com/users

// let boxes = $(".box");
// // boxes.hide(3000)
// boxes.css("background","red")
// // boxes.html("Hamza")
// // boxes[0].innerHTML = "Danilo"
// boxes.eq(2).html('Hamza')
// $("ul").find(".black").css("background","tomato")
// $("li").click(function(){
// 	$(this).css("background","tomato").fadeOut(3000)
// })
// $("li").on("click",function(){
// 	$(this).css("background","red")
// })

// let xml = new XMLHttpRequest();
// xml.open("get","https://jsonplaceholder.typicode.com/users");
// xml.onreadystatechange = function(){
// 	if (xml.readyState == 4 && xml.status == 200) {
// 		console.log(xml.responseText)
// 	}
// }
// xml.send()
// $("li").first().css({
// 	background:"tomato",
// 	fontSize:"100px"
// })
// let names = new Array(10,20)
// console.log(names)
// function info(){
// 	console.log('radi')
// }
// info.car = "volvo";
// info()
// console.log(info.car)
$.ajax({
	url:"https://jsonplaceholder.typicode.com/users"
})
.done(function(data){
	console.log(data)
})
// $(".box:first").animate({
// 	top:500,
// 	left:500
// },3000)
// $(window).on("click",function(e){
// 	$(".circle1").animate({
// 		top:e.clientY,
// 		left:e.clientX
// 	},2000),
// 	$(".circle2").animate({
// 		top:e.clientY,
// 		left:e.clientX
// 	},2100),
// 	$(".circle3").animate({
// 		top:e.clientY,
// 		left:e.clientX
// 	},2200),
// 	$(".circle4").animate({
// 		top:e.clientY,
// 		left:e.clientX
// 	},2300)
// })
// console.log($(".box4").position())
$(".box").on("click",function(e){
	let n = this.classList[0][this.classList[0].length-1]
	console.log(n)
	$(".circle"+n).animate({
		top:e.clientY,
		left:e.clientX
	},2000)
})