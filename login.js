const login=()=>{
    if(usernameinput.value==""|| pswdinput==""){
        alert("please fill the form completely!!!")
    }else{
        user=usernameinput.value
        localStorage.setItem("user",user)
        //redirect to dashboard 
        window.location="landing.html"
        alert("login sucesss")
    }
}