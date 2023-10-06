var Friend = document.querySelector("#change")
var Mess = document.querySelector("#black")
var check = 0
Friend.addEventListener("click",function(){
    if(check == 0){
        Friend.innerHTML = "Following"
        Friend.style.color = "black"
        check = 1
    }else{
        Friend.innerHTML = "Follow"
        Friend.style.color = "white"
        check = 0
    }
});

Mess.addEventListener("click",function(){
    if(check == 0){
        Mess.innerHTML = "Mat karo"
        check = 1
    }else{
        Mess.innerHTML = "Message"
        check = 0
    }
})