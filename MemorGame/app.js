const arrayList=[
{
	name: 'fries',
	img: 'images/fries.png'
},
{
	name: 'cheeseburger',
	img: 'images/cheeseburger.png'
},
{
	name: 'hotdog',
	img: 'images/hotdog.png'
},
{
	name: 'ice-cream',
	img: 'images/ice-cream.png'
},
{
	name: 'milkshake',
	img: 'images/milkshake.png'
},
{
	name:'pizza',
	img: 'images/pizza.png'
},{
	name: 'fries',
	img: 'images/fries.png'
},
{
	name: 'cheeseburger',
	img: 'images/cheeseburger.png'
},
{
	name: 'hotdog',
	img: 'images/hotdog.png'
},
{
	name: 'ice-cream',
	img: 'images/ice-cream.png'
},
{
	name: 'milkshake',
	img: 'images/milkshake.png'
},
{
	name:'pizza',
	img: 'images/pizza.png'
}
]
arrayList.sort(()=>0.5-Math.random())
const gridDisplay = document.querySelector('.grid');
const scoreResult = document.querySelector('#score')
let cardChosen= []
let cardChosenIds= []
const cardsWon= []
let LastScore=0;

function gridCreator(){
	for (let i=0; i< arrayList.length ; i++){
		const card= document.createElement('img');
		card.setAttribute('src','images/blank.png');
		card.setAttribute('id', i);
		card.addEventListener('click',flipper)
		gridDisplay.append(card);
	
	}
}
function flipper(){
	const cardId= this.getAttribute('id')
	cardChosen.push(arrayList[cardId].name);
	console.log('clicked', cardId)
	console.log(cardChosen)
	this.setAttribute('src',arrayList[cardId].img)
	cardChosenIds.push(cardId)
	console.log(cardChosenIds)
	if(cardChosen.length===2){
			setTimeout(checker,500);
	}
}

function checker(){
	const cards= document.querySelectorAll("img");
	const scoreboard= document.getElementById("score");
	console.log(scoreboard)
	if(cardChosen[0]===cardChosen[1]){
		alert("you found a match")

 			cards[cardChosenIds[0]].setAttribute('src','images/white.png')
		 	cards[cardChosenIds[1]].setAttribute('src','images/white.png')
		 	cards[cardChosenIds[0]].removeEventListener('click',flipper)
		 	cards[cardChosenIds[1]].removeEventListener('click',flipper)
		 	cardsWon.push(cardChosen)
		 	LastScore+=1;
		 	console.log(LastScore)
		 	scoreResult.textContent=LastScore
	}else{
		alert("try again")
			cards[cardChosenIds[0]].setAttribute('src','images/blank.png')
		 	cards[cardChosenIds[1]].setAttribute('src','images/blank.png')
		 	
	}
	cardChosenIds=[];
	cardChosen=[];
	if(cardsWon.length==arrayList.length/2){
		alert("congrats")
		scoreResult.textContent="congrats, you found them all"
	}
}
gridCreator();