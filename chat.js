let secondUserId = localStorage.getItem("secondUserId");
let currentChatId = localStorage.getItem("currentChatId");
const messagesContainer = document.querySelector("messages")
async function getChat(){


    let users = await makeQuery('users/'+ secondUserId);
    let h3 = document.querySelector("h3");
    h3.innerHTML+= users.userName
    
}
getChat()