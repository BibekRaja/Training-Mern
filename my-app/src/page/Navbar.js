import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/shoppinglist"> Shopping List</Link>
                </li>
                <li>
                    <Link to="/todo"> Todo List</Link>
                </li>
            </ul>
        </div>
    )
}

