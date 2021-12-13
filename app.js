let password = document.getElementById("fakepassword");
let toggler = document.getElementById("toggler1");

//function
showHideFunction = () =>{
    if(password.type === "password"){
        password.setAttribute('type','text');
        toggler.classList.remove('fa-eye-slash');
        toggler.classList.add('fa-eye');
    }
    else
    {
      
        password.setAttribute('type','password');
        toggler.classList.remove('fa-eye');
        toggler.classList.add('fa-eye-slash');

    }
}

toggler.addEventListener('click',showHideFunction);







