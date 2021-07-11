const submitButton = document.querySelector(".submit-button")

const checkMail = (event) => {
    try {
        const address = document.querySelector(".email-input").value
        address = new MailAddress(address).Address;
    } catch(FormatException) {
        document.querySelector(".error-message").style.display = "block"
    }
}

submitButton.addEventListener("click", checkMail)