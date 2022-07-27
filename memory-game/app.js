const cardArray =[
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'lolipop',
        img: 'images/lolipop.jpg'
    },
    {
        name: 'pasta',
        img: 'images/pasta.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'soda',
        img: 'images/soda.jpg'
    },
    {
        name: 'strawberry',
        img: 'images/strawberry.jpg'
    },
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'lolipop',
        img: 'images/lolipop.jpg'
    },
    {
        name: 'pasta',
        img: 'images/pasta.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'soda',
        img: 'images/soda.jpg'
    },
    {
        name: 'strawberry',
        img: 'images/strawberry.jpg'
    }
]

let cardsChosen=[]
let cardsChosenIds = []
const cardsWon = []

cardArray.sort(() => 0.5 - Math.random()) //soet an array randomly
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

function createBord(){
    for(let i = 0; i < 12; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/rainbow.jpg')
        card.setAttribute('data-id', i);

        gridDisplay.append(card);

        card.addEventListener('click', flipCard)
    }
}

createBord()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    
    if(cardsChosenIds[0] == cardsChosenIds[1])
    alert('same image');

    if(cardsChosen[0] === cardsChosen[1]){
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.jpg')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.jpg')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }
    else{
        cards[cardsChosenIds[0]].setAttribute('src', 'images/rainbow.jpg')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/rainbow.jpg')
        alert('try again :)');
    }
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.innerHTML = cardsWon.length;

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'You Won!!!';
    }
}

function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }

}

