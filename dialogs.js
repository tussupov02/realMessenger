let newUser = JSON.parse (localStorage.getItem("currentUser"))
let div= document.createElement("div");
div.innerHTML += `<p>HELLO ${newUser.userName}</p>`
document.body.appendChild(div)

async function allUsers(){
    let users = await makeQuery('users');
    for (let user of users){
        let newDiv=document.createElement("div");
        newDiv.innerHTML+= `<p onclick="openChat('${user._id}')">${user.userName}</p>`;
        document.body.appendChild(newDiv)
    }
}
allUsers()

async function openChat(userId){
    let chat = await makeQuery ("chats", 'post', {
        firsUserId: newUser._id,
        secondUserId: userId,
    });
    localStorage.setItem("secondUserId", userId)
    localStorage.setItem("currentChatId", chat._id);
    location.href = "chat.html"
}