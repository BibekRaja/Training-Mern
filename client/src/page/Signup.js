import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../component/ErrorMessage';


const Signup = () => {

    const navigate = useNavigate();

    const [error, setError] = useState({
        name: "",
        email: "",
        role: ""
    });

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });



    function handleSubmit(e) {
        e.preventDefault();



        let { name, email, password, role } = data

        let validation = true;

        let err = {}
        if (!name) {
            err.name = "Required"
        }
        if (!email) {
            err.email = "Required"
        }
        if (!role) {
            err.role = "Required"
        }

        if (Object.entries(err).length == 0) {
            axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/users/signup`, {
                name,
                email,
                password,
                role

            })
                .then(res => {
                    navigate("/login")

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
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" value={data.name} onChange={handleChange} />
                    {
                        error.name
                        &&
                        <ErrorMessage msg={error.name} />
                    }

                </div>
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
                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select className="form-select" name='role' aria-label="Default select example" value={data.role} onChange={handleChange}>
                        <option >Open this select menu</option>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>

                    </select>
                    {
                        error.role
                        &&
                        <ErrorMessage msg={error.role} />
                    }
                </div>

                <button type="submit" className="btn btn-primary">Signup</button>
            </form>

        </div>
    );
}

export default Signup;

