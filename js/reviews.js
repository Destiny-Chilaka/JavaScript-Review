const reviews = [
    {
        id: 1,
        name: "James Philip",
        job: "Lawyer",
        img: "https://randomuser.me/api/portraits/men/36.jpg",
        text: "Absolutely fantastic experience! The website is incredibly user-friendly, fast, and intuitive. I found exactly what I needed in minutes. Highly recommend to anyone looking for efficiency and great design."
    },
    {
        id: 2,
        name: "Melvin Urioste",
        job: "Content Creator",
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        text: "Loved the clean layout and ease of navigation. Customer support was prompt and helpful. The site had everything I was looking for, plus more! I'll definitely be a returning visitor."
    },
    {
        id: 3,
        name: "Dirk Vanderiet",
        job: "Photographer",
        img: "https://randomuser.me/api/portraits/men/80.jpg",
        text: "Impressive design with seamless functionality. Information was easily accessible, and the overall user experience was top-notch. It’s evident that a lot of thought went into making the site exceptional."
    },
    {
        id: 4,
        name: "Jed Latzig",
        job: "UI/UX Designer",
        img: "https://xsgames.co/randomusers/assets/avatars/male/40.jpg",
        text: "A superb website with excellent features. Loading times were quick, and the content was very informative. The overall aesthetic was pleasing to the eye. Highly satisfied and would use again!"
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");
const rightBtn = document.getElementById("right-btn");
const leftBtn = document.getElementById("left-btn");

// Set current Item
let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});


function showPerson(person) {
    let item = reviews[person];
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

rightBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

leftBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});