let form = document.getElementById('login');
let username_input = document.getElementById('username');
let password_input = document.getElementById('password');
if (form) {
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username_input.value,
                password: password_input.value,
            })
        })
            .then((res) => res.json())
            .then((data) => {
            console.log(data);
        });
    });
}
export {};
//# sourceMappingURL=login.js.map