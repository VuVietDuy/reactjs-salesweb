import React from 'react'
import MenuItem from '../components/MenuItem'
import { menuList } from '../helpers/MenuList'
import '../styles/Menu.css'

function Menu() {
    return (
        <div className="menu">
            <div className="menuTitle">OUR MENU</div>
            <div className="menuList">
                {menuList.map((item, i) => (
                    <MenuItem
                        key={i}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                    ></MenuItem>
                ))}
            </div>
        </div>
    )
}

export default Menu