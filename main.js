function submitForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const formData = new FormData(username, password);

    const messageContainer = document.getElementById("messageContainer");

    if (formData.isValid()) {
        messageContainer.innerHTML = "Datos enviados correctamente.";
    } else {
        messageContainer.innerHTML = "Por favor, completa todos los campos.";
    }
}

class FormData {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    isValid() {
        return this.username.trim() !== "" && this.password.trim() !== "";
    }
}
