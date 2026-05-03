const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const userConfirm = confirm("Are you sure you want to send this message to Prague Coffee Lab?");

        if (userConfirm) {
            const user = document.getElementById('name').value;
            const feedbackBox = document.getElementById('feedback');

            alert(`Thank you, ${user}! Your message has been sent.`);

            feedbackBox.style.display = "block";
            feedbackBox.textContent = `Success! Thanks, ${user}, we will contact you soon.`;

            this.reset();
        }
    });
}