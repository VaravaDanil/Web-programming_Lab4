function calc_diameter() {
	const a = +document.getElementById('a').value
	if (a === 0){
		document.getElementById('output').innerHTML = 'Error! 	<b>a = 0</b>'
	}
	else{
		document.getElementById('output').innerHTML = `diameter = ${2*a}`
	}
}

function is_long() {
	const a = +document.getElementById('a').value
	if (a === 0){
		document.getElementById('output').innerHTML = 'Error! 	<b>a = 0</b>'
	}
	else{
		document.getElementById('output').innerHTML = `long = ${2*3.14*a}`
	}
}

function quare() {
	const a = +document.getElementById('a').value
	if (a === 0){
		document.getElementById('output').innerHTML = 'Error! 	<b>a = 0</b>'
	}
	else{
		document.getElementById('output').innerHTML = `quare = ${3.14*Math.pow(a, 2)}`
	}
}
