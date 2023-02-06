let error = [
    {
        "value": "em@em.com",
        "msg": "E-mail already in use",
        "param": "email",
        "location": "body"
    },
    {
        "value": "em@em.com",
        "msg": "not sucpported",
        "param": "role",
        "location": "body"
    }
]

// {
//     "email": "alerady..",
//         "role" : "invalid"
// }
{ error.map(err => { err["param"] = err["msg"] }) }
console.log(error);