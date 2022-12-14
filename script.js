const userName = document.querySelector(".user-input");
const passWord = document.getElementById("pass-input1");
const userMsg = document.querySelector(".username-msg");
const passMsg = document.querySelector(".password-msg");
const signbutton = document.querySelector(".signin-button");
const status = document.querySelector(".signin-status");
const userId = document.querySelector(".user-id");
const welcome = document.querySelector(".welcome");
const logIn = document.querySelector(".login-div");




signbutton.addEventListener("click", signIn);

function signIn(event){
    let ifsendData = true;
    userMsg.innerText = "";
    passMsg.innerText = "";
    event.preventDefault();

    const userRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (userRegex.test(userName.value)) {
       ifsendData = true;
    } else if (userName.value.length === 0){
        userMsg.innerText = "PLEASE ENTER YOUR EMAIL";
        ifsendData = false;
    }

    ;
    

    const passRegex = /^[A-Za-z]\w{7,14}$/
    if (passRegex.test(passWord.value)) {
        ifsendData = true;
    } else if (passWord.value.length === 0) {
        passMsg.innerText = "PLEASE ENTER A PASSWORD";
        ifsendData = false;
    } else if (passWord.value.length <= 4) {
        passMsg.innerText = "PASSWORD IS TO SHORT";
        ifsendData = false;
    }



    if (ifsendData) {
        const body = JSON.stringify({
            username:userName,
            password:passWord,
        })
        const headers = {
            "content-type":"application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method : "Post",
            body : body,
            headers : headers,
        })
        .then (response => {
            if(response.ok) {
                status.innerText = "sign in succesfully";
                setTimeout(() => {
                logIn.style.display = "none";
                welcome.classList.remove("hidden")
                userId.innerText = userName.value;
                },2000)
            }
        })
    }
}

