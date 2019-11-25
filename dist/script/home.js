
    let menu, bounds
    let pages = document.querySelectorAll(".grid")
    let right, bottom
    console.log(pages)
    let range = 40
    let locked = false
    let lock = 26
    // page.style.transform = `
    topPage = document.querySelector('[order="1"]');
    console.log(topPage)

    // TODO: implement with a Queue structure (somehow)
    pages.forEach((page) => {
        let order = page.getAttribute("order")
        page.style.zIndex = 1000 - order
        page.addEventListener('click', (e) => {
            console.log(page, topPage)
            if (page != topPage) {
                console.log("changin pages")
                topPage.setAttribute("order", page.getAttribute("order"))
                topPage.style.zIndex = 1000 - page.getAttribute("order")
                page.setAttribute("order", 1)
                page.style.zIndex = 1000 - 1
                console.log(page, topPage)

                topPage = page
            } else {
                console.log("already front")
            }
            if (!page.getAttribute("order") == 1) {
                page.style.cursor = "pointer"
            } else {
                page.style.cursor = "default"
            }
        })
    })



    document.addEventListener('mousemove', (e) => {

        pages.forEach((page) => {
            let order = page.getAttribute("order")
            // console.log(order)
            if (order == 1) {
                menu = page.querySelector("#menu")
                bounds = menu.getBoundingClientRect()
                right = bounds.right
                bottom = bounds.bottom
            } else {
                page.style.cursor = "pointer"
            }

            let { clientX, clientY } = e
            let deltaX = clientX - right
            let deltaY = clientY - bottom
            let closest = Math.max(deltaY, deltaX)

            let dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
            // console.log(range - closest)
            let control = range - closest
            if (control < 0) {
                control = 0
            }
            // console.log(control, locked)

            // TODO: unlock when mouseover active card
            if (control > lock) {
                locked = true
            }

            if (!locked) {
                uniqueControl = control * (pages.length - order)
                let styleString = `translate(${uniqueControl * 1.25}px,${uniqueControl * .75}px) rotate(${-uniqueControl / 18}deg)`

                page.style.transform = styleString
            } else {
                if (range - closest <= -lock * 2) {
                    locked = false
                }
            }
        })

    })


