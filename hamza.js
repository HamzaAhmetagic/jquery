function colorMe (el,color){
	let element = document.querySelectorAll(el)
	if (color == undefined) {
		color = "black"
	}   
	for (var i = 0; i < element.length; i++) {
		element[i].style.background = color
	}
}

// colorMe(element,[color])
// puts background to element
