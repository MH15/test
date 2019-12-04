
    let cardContainer = document.querySelector("#card-container")
    let cards = cardContainer.querySelectorAll(".card")
    console.log(cards)
    let cstate = {
        height: window.innerHeight,
        current: 0,
        speed: 5000
    }
    // cstate.height = 650
    cards.forEach(card => {
        card.style.height = cstate.height - 80+"px"
    })

    scaleCards()

    console.log(cstate)
    window.setInterval(()=> {
        updateCardState()
        changeCard(cstate.current)
    }, cstate.speed)

    function changeCard(current) {
        let top = -(cstate.height-80)*current + 40
        let styleString = `${top}px`
        console.log(styleString)
        cardContainer.style.top = styleString
        scaleCards()
    }

    function scaleCards() {
        cards.forEach(card => {
            card.classList.toggle("scaled",Array.from(card.parentNode.children).indexOf(card) !== cstate.current)
        })

    }

    function updateCardState() {
        if (cstate.current < cards.length - 1) {
            cstate.current += 1
        } else {
            cstate.current = 0
        }
    }

