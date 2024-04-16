import React from 'react'
import SubMenu from './SubMenu'
import { Link } from 'react-router-dom'
const Menus = () => {
    return (
        <>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/list'>shop</Link></li>
                <li> <Link to='/products'>products</Link></li>
                <li>blogs

                </li>
                <li>pages
                    <SubMenu />
                </li>
            </ul>
        </>
    )
}

export default Menus