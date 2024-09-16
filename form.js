const form = document.querySelector("#form")
const usernameinput = document.querySelector("#username") 
const passwordinput = document.querySelector("#password") 
const passwordconformationinput = document.querySelector("#password-confirmation") 
const termsInput = document.querySelector("#terms") 
const errorContainer = document.querySelector(".errors")
const errorsList = document.querySelector(".error-list")


form.addEventListener("submit", e => {

const errormessage = []
clearErrors()

if (usernameinput.value.length < 5){
    errormessage.push("USername should be more than 6 letters")
}
if ( passwordinput.value.length <8){
    errormessage.push("Pass should be morethan 8 letters")
}
if ( passwordinput.value !== passwordconformationinput.value){
    errormessage.push("Both are not same")
}
if (!termsInput.checked){
    errormessage.push("accept the term")
}

if(errormessage.length > 0){
    showErrors(errormessage)
    e.preventDefault()
}

})

function clearErrors() {

    while(errorsList.children[0] != null){
        errorsList.removeChild(errorsList.children[0])
    }
errorContainer.classList.remove("show")

}

function showErrors(errormessage){

    errormessage.forEach(errormessages => {
        const li = document.createElement("li")
        li.innerText = errormessages
        errorsList.appendChild(li)
    })
errorContainer.classList.add("show")
}