const form =document.getElementById('signform');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('confirmPassword');
const emailError=document.getElementById('emailError');
const passWordError=document.getElementById('passwordError');

function validateEmail(){
    const emailRegex = /^[^\s@]+@[^\s@]=\.[^\s@]+$/;
    if(!emailRegex.test(email.value)){
        emailError.textContent="Please Enter a vaild email address";
    }else{
        emailError.textContent='';
    }
}

function validatePassword(){
    if(password.value !== confirmPassword.value){
        password.textContent="Password do not match";
    }else{
        passwordError.textContent='';
    }
}

email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validatePassword);

form.addEventListener('submit', function(e){
    e.preventDefault();
    validateEmail();
    validatePassword();
    if(!emailError.textContent && !passWordError.textContent){
        alert('Form submitted successfully');
        from.reset();
    }
})