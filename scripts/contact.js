// Contact media render
const media = document.querySelector(".contact-media");

const contactList = [
    {
        id: 1,
        icon: "ph ph-phone-call",
        name: "Phone",
        value: "+91 9156707709",
        href: "tel:+919156707709",
    },
    {
        id: 2,
        icon: "ph ph-envelope",
        name: "E-mail",
        value: "shukuryerole661@gmail.com",
        href: "mailto:shukuryerole661@gmail.com",
    },
    {
        id: 3,
        icon: "ph ph-map-pin-area",
        name: "Country",
        value: "India",
        href: "#",
    },
];

const contactContent = contactList
    .map(
        (ele) => `
        <div class="media">
            <span><i class="${ele.icon}"></i></span>
            <div class="contact-value">
                <p>${ele.name}</p>
                <a href="${ele.href}">${ele.value}</a>
            </div>
        </div>
    `
    )
    .join("");

if (media) media.innerHTML = contactContent;


// Send contact message


const sendBtn = document.querySelector("#send-msg");
const form = document.getElementById("contact-form");

const originalText = sendBtn.innerHTML;


const originalStyle = {
    backgroundColor: sendBtn.style.backgroundColor,
    color: sendBtn.style.color,
    border: sendBtn.style.border,
    boxShadow: sendBtn.style.boxShadow,
};

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Loading state
    sendBtn.innerHTML = "Sending...";
    sendBtn.style.backgroundColor = "gray";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "none";
    sendBtn.disabled = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!name || !email || !phone || !message) {
        sendBtn.innerHTML = originalText;
        Object.assign(sendBtn.style, originalStyle);
        sendBtn.disabled = false;

        Toastify({
            text: "All Fields are Mandatory!",
            duration: 3000,
            gravity: "top",
            position: "center",
            style: { background: "rgb(205,16,16)" },
        }).showToast();
        return;
    }

    // EmailJS send
    emailjs
        .send("service_riruzan", "template_o1dyoms", {
            name,
            email,
            phone,
            message,
        })
        .then(() => {
            Toastify({
                text: "Message Sent Successfully!",
                duration: 3000,
                gravity: "top",
                position: "center",
                style: { background: "rgb(9,222,38)" },
            }).showToast();

            form.reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);

            Toastify({
                text: "Message Failed!",
                duration: 3000,
                gravity: "top",
                position: "center",
                style: { background: "rgb(206,16,16)" },
            }).showToast();
        })
        .finally(() => {
            setTimeout(() => {
                sendBtn.innerHTML = originalText;
                Object.assign(sendBtn.style, originalStyle);
                sendBtn.disabled = false;
            }, 1500);
        });
});
