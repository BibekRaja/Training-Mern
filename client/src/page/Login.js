import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../component/ErrorMessage';


const Login = (props) => {

    const navigate = useNavigate();

    const [error, setError] = useState({
        name: "",
        email: "",
        role: ""
    });

    const [data, setData] = useState({

        email: "",
        password: ""

    });



    function handleSubmit(e) {
        e.preventDefault();



        let { name, email, password, role } = data

        let validation = true;

        let err = {}

        if (!email) {
            err.email = "Required"
        }


        if (Object.entries(err).length == 0) {
            axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/users/login`, {

                email,
                password


            })
                .then(res => {
                    navigate("/")
                    localStorage.setItem("access_token", res.data.access_token)
                    props.setUser(true)

                }).catch(err => {
                    setError({

                    })
                })

        }

        setError(err)





    }

    function handleChange(e) {
        setData({
            ...data,

            [e.target.name]: e.target.value
        })

    }

    return (
        <div className='container mt-5'>


            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" value={data.email} onChange={handleChange} />
                    {
                        error.email
                        &&
                        <ErrorMessage msg={error.email} />
                    }

                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="text" name='password' className="form-control" value={data.password} onChange={handleChange} />
                </div>


                <button type="submit" className="btn btn-primary">Login</button>
            </form>

        </div>
    );
}

export default Login;

