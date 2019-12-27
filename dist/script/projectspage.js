
    let projects = document.querySelectorAll('.card-shell')
    let display = document.querySelector('#project-display')

    let back = display.querySelector('#back-button')
    let displayBody = display.querySelector('#display-body')
    let displayTitle = display.querySelector('#display-title')
    console.log(projects)
    let mobileMenu2 = document.querySelector("#mobileMenu")

    back.addEventListener('click', ()=> {
        display.style.display = "none";
        mobileMenu2.style.display = "block"
        
    })

    projects.forEach(project => {
        project.addEventListener('click',(e) => {
            showArticle(project)
        })
    })


    async function showArticle(project) {
        let link = project.getAttribute("link")
        console.log(link)
        // project.style.transform = "scale(3)"
        const response = await fetch(`/project/${link}`);
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));

        display.style.display = "block"
        displayBody.innerHTML = myJson.body
        displayTitle.innerHTML = myJson.title
        mobileMenu2.style.display = "none"

    }

