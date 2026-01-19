const toggle = document.getElementById("menu-toggle");

if(toggle && toggle.checked) {
        document.body.classList.add("no-scroll");
}else{
    document.body.classList.remove("no-scroll");
}

const words = [
  "Front-End Developer",
  "Web Developer",
  "Java Learner",
  "Full Stack Trainee"
];


const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () =>{
    const currentWord = words[wordIndex];
  

    if(!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if(charIndex === currentWord.length){
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        } else{
            setTimeout(type, typingDelay);

        }
    }else{
        typingText.textContent = currentWord.substring(0, charIndex -1);
        charIndex--;

        if(charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type,500);
        }else{
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded', ()=>{
    if (words?.length) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();

        navlinks.forEach((l)=>{
            if(l === link){
                link.classList.add("active");
            }else{
                link.classList.remove("active");
            }
            l.classList.remove("active");
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab)=>{ 
            if(tab.id === tabName) {
                tab.classList.add("active");
            }else{
                tab.classList.remove("active");
            }

        });
        if(tabName === "Services"){
            const ServiceList = [
                    {
                        id: 1,
                        icon: "ph-code",
                        text: "Front-End Development",
                        para: "I build responsive and user-friendly web interfaces using HTML, CSS, and JavaScript with a focus on clean design."
                    },
                    {
                        id: 2,
                        icon: "ph-devices",
                        text: "Responsive Design",
                        para: "I create websites that adapt perfectly to mobile, tablet, and desktop screens using modern CSS layouts."
                    },
                    {
                        id: 3,
                        icon: "ph-cpu",
                        text: "Java Programming",
                        para: "I work with core Java concepts like OOP, collections, and exception handling through practice-based learning."
                    },
                    {
                        id: 4,
                        icon: "ph-stack",
                        text: "Full Stack Java Learner",
                        para: "Currently learning full stack Java development including frontend, database, and backend concepts."
                    },
                    {
                        id: 5,
                        icon: "ph-database",
                        text: "Database Fundamentals",
                        para: "I have hands-on practice with database concepts such as SQL queries, tables, and relationships."
                    },
                    {
                        id: 6,
                        icon: "ph-projector-screen",
                        text: "Project Development",
                        para: "I build academic and personal projects to apply real-world development concepts and improve skills."
                    }
                    ];


                const Services = document.getElementsByClassName("service-list");

                const innerContent = ServiceList.map((l)=>{
                    return`
                     <div class="box" key${l?.id}>
                <div class="head-icons">
                     <i class="ph ${l?.icon}"></i>

                    <span>
                        <i class="ph ph-arrow-down-right"></i>
                    </span>
                </div>
                <h3>${l?.text}</h3>
                <span class="spacer"></span>

                <p>${l?.para}</p>
          </div>
                    `;
                }).join(""); 
                Array.from(Services).forEach((ele)=> {
                    ele.innerHTML = innerContent;
                });


        }

        toggle.checked = false;




    });
});



