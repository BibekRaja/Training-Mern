import { useState } from "react";
import { Link } from "react-router-dom"




export default function Navbar({ search_term, setSearchTerm, setUser, user }) {



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* <Link  className="navbar-brand" to="#">Navbar</Link > */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link >
                            </li>

                            {
                                !user
                                &&
                                <>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link >
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signup">SignUp</Link >
                                    </li>
                                </>
                            }


                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" value={search_term} onChange={(e) => { setSearchTerm(e.target.value) }} type="search" placeholder="Search" aria-label="Search" />

                        </form>

                        {
                            user
                            &&
                            <button onClick={() => {
                                localStorage.removeItem("access_token")
                                setUser(null)
                            }} className="btn btn-primary">Logout</button>
                        }
                    </div>
                </div>
            </nav>

        </>
    )
}
