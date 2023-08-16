document.getElementById('login-btn').addEventListener('click', function (){
    const emailField= document.getElementById('user-email');
    const email = emailField.value;
    const passwordField= document.getElementById('user-password');
    const password = passwordField.value
    if (email === 'abc@email.com' && password === '123456') {
       window.location.href="bank.html"
    } else {
       alert('wrong')
    }
})