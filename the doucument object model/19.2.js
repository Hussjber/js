const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];
// append ading child in the aprent 
// Q1 loop over the array with forEach method
const ol = document.createElement("ol")
users.forEach((user) => {
    const li = document.createElement("li")
    li.innerText = user.firstName + "" + user.lastName
    li.setAttribute("dataId", math.floor(math.random() * 1000))
    ol.append(li)

})
const body = document.getElementsByTagName("body")[0]
body.appendChild(ol)

// Q2
ol.classList.add("removeNum")

