const submitButton = document.querySelector(".submit-button")
const hamburgerIcon = document.querySelector(".hamburger-icon")
const mobileNavMenu = document.querySelector(".nav-bar-mobile-container")
const mobileNavContainer = document.querySelector(".mobile-nav")

const checkMail = () => {
    try {
        const address = document.querySelector(".email-input").value
        address = new MailAddress(address).Address;
    } catch(FormatException) {
        document.querySelector(".error-message").style.display = "block"
    }
}

let openHamburger = true

const toggleHamburger = () => {
    if (openHamburger) {
        hamburgerIcon.setAttribute("src", "./images/icon-close.svg")
        mobileNavMenu.style.display = "block"
        mobileNavContainer.style.backgroundColor = "rgba(250, 250, 250, 0.3)"
        mobileNavContainer.style.width = "100%"
        mobileNavContainer.style.height = "100%"
        mobileNavContainer.style.top = "0"
        mobileNavContainer.style.position = "fixed"
        openHamburger = false
    } else {
        hamburgerIcon.setAttribute("src", "./images/icon-hamburger.svg")
        mobileNavMenu.style.display = "none"
        mobileNavContainer.style.backgroundColor = "rgba(250, 250, 250, 0)"
        mobileNavContainer.style.width = "100%"
        mobileNavContainer.style.height = "fit-content"
        mobileNavContainer.style.top = "0"
        mobileNavContainer.style.position = "static"
        openHamburger = true
    }
}

hamburgerIcon.addEventListener("click", toggleHamburger)
submitButton.addEventListener("click", checkMail)