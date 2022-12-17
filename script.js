const rockButton = document.querySelector("#rockButton")
const paperButton = document.querySelector("#paperButton")
const scissorsButton = document.querySelector("#scissorsButton")
const iaHandLabel = document.querySelector("#iaHandLabel")
const turnResult = document.querySelector("#turnResult")

const Hand = {
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors",
}

function randomInt(maxExcluded) {
    return Math.floor(Math.random() * maxExcluded);
}

function randomHand() {
    const handSize = Object.keys(Hand).length
    const randomIndex = randomInt(handSize)
    
    const allHands = Object.values(Hand)

    var hand
    allHands.forEach((value, index) => {
        if (index === randomIndex) {
            hand  = value
            return
        }
    });

    return hand
}

function selectButton(e) {
    e.target.style.backgroundColor = "red"
}

function hasUserWon(userHand, iaHand) {
    if(userHand === Hand.Scissors) {
        if(iaHand === Hand.Rock) {
            return false
        }
        if(iaHand === Hand.Scissors) {
            return null
        }
        if(iaHand === Hand.Paper) {
            return true
        }
    }

    if(userHand === Hand.Rock) {
        if(iaHand === Hand.Rock) {
            return null
        }
        if(iaHand === Hand.Scissors) {
            return true
        }
        if(iaHand === Hand.Paper) {
            return false
        }
    }

    if(userHand === Hand.Paper) {
        if(iaHand === Hand.Rock) {
            return true
        }
        if(iaHand === Hand.Scissors) {
            return false
        }
        if(iaHand === Hand.Paper) {
            return null
        }
    }
}

function showTurnResult(hasUserWon){
    if(hasUserWon){
        turnResult.innerText = "l'utilisateur a gagné"
    } else if(hasUserWon === null){
        turnResult.innerText = "matche nul"
    } else {
        turnResult.innerText = "l'IA a gagné"
    }
}


function onRockButtonClick(e) {
    onHandPlayed(e, Hand.Rock)
}

function onPaperButtonClick(e){
    onHandPlayed(e, Hand.Paper)
}

function onScissorsButtonClick(e){
    onHandPlayed(e, Hand.Scissors)
}

function onHandPlayed(e, userHand) {
    selectButton(e)
    const iaHand = randomHand()
    iaHandLabel.innerText = `IA a joué ${iaHand}`
    const userWon = hasUserWon(userHand, iaHand)
    showTurnResult(userWon)
}

rockButton.addEventListener("click", onRockButtonClick)
paperButton.addEventListener("click", onPaperButtonClick)
scissorsButton.addEventListener("click", onScissorsButtonClick)