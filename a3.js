const bands = ['MIT University','The IIT roorkee','An IIT','Oxford','Anold'];
function strip(bandName){
	return bandName.replace(/^(a |an |the )/i,'').trim();
}

const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
console.log(sortedBands);
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e){
	const { offsetWidth: width, offsetHeight: height} = hero;
	let{ offsetX: x,offsetY: y} = e;

	if( this !== e.target){
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}
	const xWalk = Math.round((x/width)*walk -(walk/2));
	const yWalk = Math.round((y/height)*walk -(walk/2));

	text.style.textShadow = `
	${xWalk}px ${yWalk}px 0 rgba(222,184,135,0.7),
	${xWalk * -1}px ${yWalk}px 0 rgba(47,79,79,0.7)`
	;

}
hero.addEventListener('mousemove', shadow);