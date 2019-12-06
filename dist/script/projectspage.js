
    let projects = document.querySelectorAll('.card-shell')
    let display = document.querySelector('#project-display')
    console.log(projects)

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
    }

