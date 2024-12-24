let menu = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll',() => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    document.querySelectorAll('.error').forEach(error => error.remove());


    const firstName = document.querySelector('input[placeholder="first name"]');
    const lastName = document.querySelector('input[placeholder="last name"]');
    const email = document.querySelector('input[placeholder="enter your email"]');
    const donationAmount = document.querySelector('select');

    
    let isValid = true;

    if (!firstName.value.trim()) {
        showError(firstName, 'First name is required.');
        isValid = false;
    }

    if (!lastName.value.trim()) {
        showError(lastName, 'Last name is required.');
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
        showError(email, 'A valid email is required.');
        isValid = false;
    }

    if (!donationAmount.value) {
        showError(donationAmount, 'Please select a donation amount.');
        isValid = false;
    }


    if (isValid) {
        this.submit();
    }
});


function showError(element, message) {
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.style.fontSize = '12px';
    error.textContent = message;
    element.parentElement.appendChild(error);
}

const currentText = document.getElementById('current-text');
const dots = document.querySelectorAll('.dot-btn');
const paragraphs = [
    '"Join the mission to protect and nurture our planet\s green life. Every effort counts in safeguarding the environment, and together, we can make a lasting impact. It\s our responsibility to ensure that future generations inherit a thriving planet, starting with small steps today for a greener tomorrow."',
    '"Every plant saved is a step toward a healthier, greener future. Nature thrives when we nurture it, and each action brings us closer to a sustainable world. Together, we can restore the balance of nature and promote a healthier ecosystem for all living beings."',
    '"Together, we can make a difference—one plant at a time. The future is in our hands, and it begins with the choices we make today. By supporting sustainable practices, we ensure nature flourishes and future generations enjoy a vibrant planet."',
];
let currentIndex = 0;

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index; // Update to the clicked dot's index
        currentText.textContent = paragraphs[currentIndex]; // Update the displayed paragraph
    });
});
