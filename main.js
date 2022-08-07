const reviews = [
    {
        id: 1,
        name: "Person 1",
        job: "web developer",
        img: "./images/prsn1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eum provident, eius quam quae ad sed ullam maiores voluptatem et sint amet veritatis illo officia est expedita animi corporis excepturi."
    },
    {
        id: 2,
        name: "Person 2",
        job: "intern",
        img: "./images/prsn2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic quod enim repellat. Animi atque delectus excepturi officia exercitationem ab accusantium, illo cumque, debitis optio deserunt numquam blanditiis sunt ipsum."
    },
    {
        id: 3,
        name: "Person 3",
        job: "hr manager",
        img: "./images/prsn3.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at perspiciatis, distinctio quam eum consequuntur iusto culpa velit ad cupiditate ipsa, omnis voluptate quisquam, explicabo dolor molestiae sapiente minima laboriosam."
    },
    {
        id: 4,
        name: "Person 4",
        job: "back-end developer",
        img: "./images/prsn4.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sequi possimus et aut vel magnam dignissimos corrupti culpa! Adipisci architecto voluptas facilis, earum quidem quas odio. Sed minima rerum rem?"
    },
    {
        id: 5,
        name: "Person 5",
        job: "trainee",
        img: "./images/prsn5.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis sapiente reprehenderit eaque rerum quasi quia molestiae iste officiis nostrum, ex delectus excepturi? Quisquam et dicta debitis. Molestias, eum quod."
    },

]

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector("#prev-btn")
const nxtBtn = document.querySelector("#nxt-btn")
const randomBtn = document.querySelector("#random-btn")


let currentCount = 0

window.addEventListener("load", ()=>{
    showPerson(currentCount);
});

const showPerson = (item) => {
    img.src = reviews[item].img;
    author.textContent = reviews[item].name;
    job.textContent = reviews[item].job;
    info.textContent = reviews[item].text;
};

nxtBtn.addEventListener("click", () => {
    currentCount++;
    if (currentCount > reviews.length - 1) {
        currentCount = 0;
    }
    showPerson(currentCount);
});

prevBtn.addEventListener("click", () => {
    currentCount--;
    if (currentCount < 0) {
        currentCount = reviews.length -1;
    }
    showPerson(currentCount);
});

randomBtn.addEventListener("click", ()=> {
    currentCount = Math.floor(Math.random() * reviews.length);console.log(currentCount);
    showPerson(currentCount);
})
