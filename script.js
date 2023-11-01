
function toggleSettingsMenu() {
    var menu = document.getElementById("settingsMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function viewUserProfile() {
    // Add functionality to view or edit the user's profile here.
    alert("View/Edit Profile clicked");
}

function sendMessage() {
    // Add functionality to send the message here.
    var message = document.querySelector('.text-input').value;
    console.log('Message sent: ' + message);
}

