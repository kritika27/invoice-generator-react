import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav>

                <h1>Invoice Generator</h1>
                <ul className="menu">
                    <li>Help</li>
                    <li>Invoicing Guide</li>
                    <li>Sign In</li>
                </ul>
                <button className="btn">Sign Up</button>

                <ul className="links">
                    <li><i className="fa fa-bars" aria-hidden="true"></i></li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar