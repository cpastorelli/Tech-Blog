const form =document.querySelector('#createNewUser');

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    let name = form[0].value.trim();
    let email = form[1].value.trim();
    let password = form[2].value.trim();

    
    if (!email || !password || !name){
        return;
    }

    let userObj = {
        name ,
        email ,
        password 
    }
    console.log(userObj);

    fetch('/api/users/newuser', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(userObj)
    }).then((res)=>res.json())
    .then((data) => document.location.replace('/'));

    form[0].value = "";
    form[1].value = "";
    form[3].value = "";
});