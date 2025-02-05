// Step - 1 set event handler
document.getElementById('login-btn').addEventListener('click', function(event) {
    // Step - 2 prevent default behavior (prevent reloading browser)
    event.preventDefault();
    
    // Step - 3 get the phone number and password
    const getPhoneNumber = document.getElementById('phone-number').value;
    const getPinNumber = document.getElementById('login-password').value;

    // This is not a ideal way. just for practice purpose


    // Step - 4 allow user to use the website
    if (getPhoneNumber ==='55' && getPinNumber === '1234') 
        {
        console.log('You are logged in');
    }
    else{
        alert('wrong phone or pin number');
    }
    
})