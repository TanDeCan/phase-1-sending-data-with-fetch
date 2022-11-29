function submitData(name, email){

const addData = {
    method: "POST",
    headers: {
       "Content-Type" : "application/json",
        "Accept" : "application/json",
    },
    body: JSON.stringify({
        name: name,
        email: email,
    })
};

return fetch("http://localhost:3000/users", addData)
    .then((resp) => resp.json())
    .then ((data) => {
        document.body.innerHTML = data.id
        console.log('data',data)
    })
    .catch(function (error) {alert("AAAHHHHH! HELP!!")
    document.body.innerHTML = error.message
    console.log(error.message);
})};
