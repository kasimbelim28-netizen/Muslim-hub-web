const CLIENT_ID="1474836154225524787";

const REDIRECT_URI=window.location.origin+"/dashboard.html";

const LOG_WEBHOOK="https://discord.com/api/webhooks/1475502367402233996/9tyecTFCmYzrh4MI9QFIFUzSmu_fpFio2lIPbWv-FfFR9HmtcCgRISI05omfkA1apAe-";

function loginWithDiscord(){

const url=
"https://discord.com/api/oauth2/authorize"+
"?client_id="+CLIENT_ID+
"&redirect_uri="+encodeURIComponent(REDIRECT_URI)+
"&response_type=token"+
"&scope=identify";

window.location.href=url;

}

/* AUTO LOGIN AFTER REDIRECT */

(function(){

if(window.location.hash.includes("access_token")){ 

const token=new URLSearchParams(window.location.hash.substring(1)).get("access_token");

fetch("https://discord.com/api/users/@me",{
headers:{Authorization:"Bearer "+token}
})
.then(r=>r.json())
.then(async user=>{

localStorage.setItem("discordUser",JSON.stringify(user));

await fetch(LOG_WEBHOOK,{ 
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
content:`✅ Login: ${user.username} (${user.id})`
})
});

/* if not verified go verify page */

if(localStorage.getItem("verifiedUser")!=="true"){ 
window.location.href="verify.html";
return;
}

window.location.href="dashboard.html";

});

}

})();