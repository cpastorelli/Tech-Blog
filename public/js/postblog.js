const form =document.querySelector('#postblog');

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    let title = form[0].value.trim();
    let content = form[1].value.trim();
    
    if (!content ||  !title){
        return;
    }

    let userObj = {
        title ,
        content 
    }
    console.log(userObj);

    fetch('/api/blog/createblog', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({title, content})
    }).then((res)=>res.json())
    .then((data) => document.location.replace('/'));

    form[0].value = "";
    form[1].value = "";
});