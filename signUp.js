// const URL = '10.60.10.16:8080/users'
async function signUp(){
    const login = document.querySelector("#login").value;
    const password = document.querySelector("#password").value;
    const userName = document.querySelector("#userName").value;

    let payload= { login, password, userName}
    let data= await makeQuery('users','post', payload);
    if (data.ok){
        if(data.ok){
            alert("success!");

        }
        else{
            alert("error")
        }
    }
}

