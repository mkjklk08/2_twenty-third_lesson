const errorAvatar = document.getElementById('error-avatar');
const avatarBtn = document.getElementById('avatar-btn');

avatarBtn.addEventListener('click', function() {
    errorAvatar.textContent = "Uploaded";
    errorAvatar.style.color = "green";
    errorAvatar.style.opacity = '70%'
})

const fullName = document.querySelector('.input-name');
const fullEmail = document.querySelector('.input-email');
const errorEmail = document.getElementById('error-email')
const fullGithub= document.querySelector('.input-github');
const ticketBtn = document.getElementById('ticket-btn');

ticketBtn.addEventListener('click', function() {

    const userInfo = {
        nameUser: fullName.value,
        emailUser: fullEmail.value,
        githubUser: fullGithub.value
    }

    localStorage.setItem("users", JSON.stringify(userInfo))
    alert("User saved!");



    if( errorAvatar.textContent === "Uploaded" ) {
        errorAvatar.textContent = "Upload your photo( JPG or PNG, max size: 5MB)."
        errorAvatar.style.color = 'white'
    } else if ( errorAvatar.textContent !== "Uploaded" ) {
        errorAvatar.textContent = 'File too large. Please upload a photo under 500KB.';
        errorAvatar.style.color = "red";
    }

    fullName.value = '';

    if (fullEmail.value === '') {
        errorEmail.textContent = 'Please enter a valid email address';
        errorEmail.style.color = 'red'
    } else if( fullEmail.value.includes('@')) {
        errorEmail.textContent = '';
        fullEmail.value = '';
    } else {
        errorEmail.textContent = 'Please enter a valid email address';
        errorEmail.style.color = 'red'
    }
    fullGithub.value = '';

    window.open('ticket.html')
})