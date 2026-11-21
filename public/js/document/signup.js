let form = document.getElementById("login");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirmpassword");
if (form) {
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        let usernameValue = username.value;
        let emailValue = email.value;
        let passwordValue = password.value;
        let confirmPasswordValue = confirm_password.value;
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: usernameValue,
                email: emailValue,
                password: passwordValue,
                confirmPassword: confirmPasswordValue,
            })
        })
            .then((res) => res.json())
            .then((data) => {
            console.log(data);
        });
    });
}
export {};
//# sourceMappingURL=signup.js.map