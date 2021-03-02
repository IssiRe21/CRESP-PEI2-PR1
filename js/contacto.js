var formButton = document.getElementById("button-form");
var form = document.getElementById("contact-form");
var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var inputMessage = document.getElementById("message");
var labelName = document.getElementById("label_Name");
var labelEmail = document.getElementById("label_Email");
var labelMessage = document.getElementById("label_Message");

var changeColor = function(){

    inputName.className = inputName.className.replace("danger-color", "");
    inputEmail.className = inputEmail.className.replace("danger-color", "");
    inputMessage.className = inputMessage.className.replace("danger-color", "");
    labelName.className = labelName.className.replace("red-label", "");
    labelEmail.className = labelEmail.className.replace("red-label", "");
    labelMessage.className = labelMessage.className.replace("red-label", "");
}


var showErrorMessage = function (message, redOrGreen) {
    var messageContainer = document.getElementById("message_danger");
    var messageText = document.getElementById("message_danger_text");
    changeColor();

    if (messageContainer.className.indexOf("visible ") === -1) {
        messageContainer.className += " visible ";
    }

    if (messageContainer.className.indexOf("danger")){
        messageContainer.className = messageContainer.className.replace("danger", "");
    }

    if (messageContainer.className.indexOf("info")){
        messageContainer.className = messageContainer.className.replace("info", "");
    }
    
    messageText.textContent = message;
    if(redOrGreen === "red"){
        
            messageContainer.className += "danger"
    }
    else
    {
        messageContainer.className += "info"
    }
}


var disableFormButton = function() {
    if (formButton.className.indexOf("disabled") === -1) {
        formButton.className += " disabled";
    }
    formButton.disabled = true;
}

var enableFormButton = function() {
    formButton.className = formButton.className.replace("disabled", "");
    formButton.disabled = false;
}


var validateAndSend = function (e) {
    e.preventDefault();
    var name = inputName.value;
    var email = inputEmail.value;
    var userMessage = inputMessage.value;

    

    if (name === "" || email === "" || userMessage === "") {
        showErrorMessage("Por favor introduce los datos requeridos.", "red");

        if(name === ""){
            inputName.className += "danger-color";
            labelName.className += "red-label";
        }

        if(email === ""){
            inputEmail.className += "danger-color";
            labelEmail.className += "red-label";
        }

        if(userMessage === ""){
            inputMessage.className += "danger-color";
            labelMessage.className += "red-label";
        }

        return;
    }

    disableFormButton();

    setTimeout(function() {
        
            showErrorMessage("El mensaje ha sido enviado correctamente", "green");
    }, 1500);
    
}

form.addEventListener("submit", validateAndSend);
