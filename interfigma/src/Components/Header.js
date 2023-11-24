import React from 'react'

function Header() {
    return (
        <div className='header'>
            <div className='header-list'>
                <div className='logo'>
                    <h2>Biccas</h2>
                </div>

                <div className='menu'>
                    <ul className='list'>
                        <li className='active'>Home</li>
                        <li>Product</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                        <li>About us</li>
                    </ul>

                    <div className='side-list'>
                        <div className='login'>
                            log in
                        </div>
                        <div className='signin'>
                            sign in
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
