const projectList = [
    {
        id: 1,
        number: "01",
        title: "Movie Flex",
        description: "Developed Movie Flex, a movie listing app that fetches and displays movie details using API integration.",
        techStack: ["HTML","CSS"],
        image: "img4.png",
        liveLink: "#",
        githubLink: "#",

    },
     {
        id: 2,
        number: "02",
        title: "My Portfolio",
        description: "Developed a personal portfolio website using HTML, CSS, and JavaScript to showcase projects, skills, and contact information.",
        techStack: ["HTML , CSS , JavaScript"],
        image: "portfolio.jpeg",
        liveLink: "#",
        githubLink: "https://github.com/shukuryerole/Myportfolio",

    },

    {
        id: 3,
        number: "03",
        title: "Currency Coverter",
        description: "Built a Currency Converter using HTML, CSS, and JavaScript with real-time exchange rates",
        techStack: ["HTML","CSS","JavaScript"],
        image: "img5.png",
        liveLink: "#",
        githubLink: "https://github.com/shukuryerole/CurrencyConverter",

    },
    {
        id: 4,
        number: "04",
        title: "Weather App",
        description: "Developed a Weather App using React.js that displays real-time weather data through API integration.",
        techStack: ["React.js"],
        image: "img6.1.jpg",
        liveLink: "#",
        githubLink: "https://github.com/shukuryerole/Weather.App",

    },

];
const projects = document.querySelector(".projects");
let currentIndex = 0;

const renderProject = (index) =>{
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;
    const nextDisabled = currentIndex === projectList.length - 1;

    projects.innerHTML = `
     <div class="project-info">
                <h3>${projectContent?.number}</h3>
                <h4>${projectContent?.title}</h4>
                <p>${projectContent?.description}</p>
                <div class="tech-stack">
                    ${projectContent?.techStack?.map((tech, i) => {
                        return `
                        <span key=${i}>${tech}</span>
                        `;
                    }).join(",")}
                </div>
                <hr/>
                <div class="links">
                    <a href=${projectContent?.liveLink}>
                       <i class="ph ph-arrow-right"></i>
                    </a>
                    <a href=${projectContent?.githubLink}>
                        <i class="ph ph-github-logo"></i>
                    </a>
                </div>
            </div>


            <div class="carousel">
                <img src=${projectContent.image} alt=${projectContent.title}/>

                <div class="arrows">
                    <a href="#" id="previous" class=${previousDisabled?"disabled-btn":""}>
                    <i class="ph ph-caret-left"></i>
                        </a>

                        <a href="#"  id="next" class=${nextDisabled?"disabled-btn":""}>
                   <i class="ph ph-caret-right"></i>
                        </a>
                </div>
            </div>
    `;

    document.getElementById("previous").addEventListener("click", (e) => {
        e.preventDefault();
        if(currentIndex > 0){
            currentIndex--;
            renderProject(currentIndex);
        }
    });

    document.getElementById("next").addEventListener("click", (e) => {
        e.preventDefault();
        if(currentIndex < projectList.length -1){
            currentIndex++;
            renderProject(currentIndex);
        }
    });
};

renderProject(currentIndex);



