const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
   
   if( validateInputs()){
    e.preventDefault();
   }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let sucess = true

    if(usernameVal===''){
        sucess=false;
        setError(username,'username is required')
    }
    else{
        setSucess(username)
    }

    if(emailVal===''){
        sucess=false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        sucess=false;
    setError(email,'please enter a valid email')
    }
    else{
        setSucess(email)
    }

    if(passwordVal===''){
        sucess=false;
        setError(password,'password is required')
    }
    else if(passwordVal.length<8){
        sucess=false;
        setError(password,'password must be atleast 8 character')
    }
    else{
        setSucess(password)
    }
    if(cpassword===''){
        setError(cpassword,'cpassword is required')
    }
    else if(cpasswordVal!==passwordVal){
        setError(cpassword,'password does not match')
    }
    else{
        setSucess(cpassword)
    }  
    return sucess;
    }

//elemeent - password,msg-pwd is reqd
function setError(element,message){
     const inputGroup = element.parentElement;
     const errorElement = inputGroup.querySelector('.error')

     errorElement.innerText = message;
     inputGroup.classList.add('error')
     inputGroup.classList.remove('sucess')

}

function setSucess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('sucess')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    
}