let form = document.getElementById('login') as HTMLFormElement;
let username_input = document.getElementById('username') as HTMLInputElement;
let password_input = document.getElementById('password') as HTMLInputElement;

if(form) {
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
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
            })
    })
}