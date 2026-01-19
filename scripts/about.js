const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content")

document.addEventListener('DOMContentLoaded',()=>{
    if(aboutTabs) {
        aboutTabs[0].click();
    }
})

aboutTabs.forEach((tab)=>{
    tab.addEventListener('click',(e) =>{
            e.preventDefault();

            aboutTabs.forEach((a)=>{
                a.classList.remove('active');
            });

            tab.classList.add("active");

            aboutContent.forEach((c)=>{
                c.classList.remove('active');
            });

            const activeTab = tab.dataset.section;

            document.getElementById(activeTab).classList.add("active");

            if(activeTab === "experience"){
                const experience = document.querySelector(".experience-list");

                const experienceList = [
                    {
                        id: 1,
                        date: "2025 – Present",
                        position: "Front-End Development Practice",
                        company: "Self Learning / Practice",
                        details: "Practicing front-end development using HTML, CSS, and JavaScript by building responsive layouts and interactive UI components."
                    },
                    {
                        id: 2,
                        date: "2025 – Present",
                        position: "Full Stack Java Training",
                        company: "Training Program",
                        details: "Learning Full Stack Java Development including Core Java, OOP concepts, JDBC, SQL, and backend fundamentals."
                    },
                    {
                        id: 3,
                        date: "Ongoing",
                        position: "Personal Projects",
                        company: "Academic & Personal Work",
                        details: "Building personal and academic projects to improve problem-solving skills and understand real-world application structure."
                    }
                        ];

               const experienceContent = experienceList.map((ele)=>{
                return`
                 <div class="experience-box" key=${ele?.id}>
                    <h4>${ele?.date}</h4>
                    <h3>${ele?.position}</h3>
                    <div class="company-name">
                        <span></span>
                        <p>${ele?.company}</p>
                    </div>
                    <p>${ele?.details}</p>
                </div>
                `
               }).join("");
               if(experience) {
                experience.innerHTML = experienceContent;
               }
            }else if (activeTab === "eduction"){
                const eduction = document.querySelector(".education-list");
                const educationList = [
                    {
                        id: 1,
                        date: "2022 – 2025",
                        degree: "Bachelor of Computer Science",
                        institution: "Swami Ramanand Teerth Marathwada University",
                        details: "Pursuing a Bachelor’s degree with a strong focus on programming fundamentals, data structures, databases, and software development concepts."
                    },
                    {
                        id: 2,
                        date: "2022",
                        degree: "Higher Secondary Education (12th)",
                        institution: "HSC Board",
                        details: "Completed higher secondary education with a focus on science and analytical subjects, building a foundation for computer science studies."
                    },
                    {
                        id: 3,
                        date: "2020",
                        degree: "Secondary School Education (10th)",
                        institution: "SSC Board",
                        details: "Completed secondary school education, developing core academic skills and an early interest in technology and problem-solving."
                    }
                ];

                const educationContent = educationList.map((ele)=>{
                    return`
                    <div class="experience-box" key=${ele?.id}>
                    <h4>${ele?.date}</h4>
                    <h3>${ele?.degree}</h3>
                    <div class="company-name">
                        <span></span>
                        <p>${ele?.institution}</p>
                    </div>
                    <p>${ele?.details}</p>
                </div>
                    `
                }).join("");
                if(eduction) {
                    eduction.innerHTML = educationContent;
                }

            }else if(activeTab === "skills"){
                const skills = document.querySelector('.skill-list');

                const skillList = [
                        { id: 1, name: "HTML5", icon: "html1.png" },
                        { id: 2, name: "CSS3", icon: "css2.png" },
                        { id: 3, name: "JavaScript", icon: "js3.png" },
                        { id: 4, name: "React (Basics)", icon: "react5.png" },
                        { id: 5, name: "Core Java", icon: "https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon.png" },
                        { id: 6, name: "Spring Boot (Learning)", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2L_LUTlkNheoUGvjDaAILfnb9zn_2Rg9uFQ&s" },
                        { id: 7, name: "SQL & Databases", icon: "mongodb4.png" },
                        { id: 8, name: "Git & GitHub", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1FgKCiN-jU9nEiKMlieP1GVXlidi0UdClw&s" },
                    ];
                const skillContent = skillList.map((ele)=>{
                    return`
                <div class="skill-box" key=${ele?.id}>
                    <img src=${ele?.icon} alt=${ele?.name} title=${ele?.name} loading="lazy"/>
                </div>
                    `
                }).join("");

                if(skills) {
                    skills.innerHTML = skillContent;
                }

            }else if(activeTab === "about-me"){
                const myInfo = document.querySelector(".my-info");
                const infoList = [
                    {
                        id: 1,
                        key: "Name:",
                        value: "Shukur"
                    },
                    {
                        id: 2,
                        key: "Country:",
                        value: "India"
                    },
                    {
                        id: 3,
                        key: "Experience:",
                        value: "Fresher"
                    },
                    {
                        id: 4,
                        key: "IT Training Institute:",
                        value: "IT Vedant"
                    },
                    {
                        id: 5,
                        key: "Address:",
                        value: "Latur, Maharashtra"
                    }
                ];
                const infoContent = infoList.map((ele)=>{
                    return`
                    <div class="info-box" key=${ele?.id}>
                    <span>${ele?.key}</span>
                     <span>${ele?.value}</span>
                
                    </div>
                    
                    `
                }).join("");
                myInfo.innerHTML = infoContent;

            }


    });
});