import React from 'react'
import { Link} from 'react-router-dom'


export default function NavBar() {

    return (
        <nav>
            <span className='headingNav'  >Grocify</span>
            <ul className='navLi'>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AboutUs">About us</Link></li>
                <li><Link to="/shop">Store</Link></li>
                <li><Link to="/">Help</Link></li>
            </ul>
            <ul className='RightNavLi'>
                <li >
                    <Link to="/Cart" className='Cart'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket2-fill" viewBox="0 0 16 16">
                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
                        </svg>
                        <div className='TotalCartItem'>
                            8
                        </div>
                    </Link>
                </li>
                <li><Link to="/SignUp" className='signUp'>sign up</Link></li>
            </ul>
        </nav>
    )
}
