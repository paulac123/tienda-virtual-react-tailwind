import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const Navbar =() =>{
    const context =useContext(ShoppingCartContext)
    const activeStyle ="underline underline-offset-4"
    
    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 py-8 px-5m font-light'>
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                    to='/'>
                    shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    onClick={()=> context.setSearchByCategory()}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined 
                        }>
                    All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    onClick={()=> context.setSearchByCategory("clothes")}
                    className={({isActive}) => 
                    isActive ? activeStyle : undefined 
                    }>
                    Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    onClick={()=> context.setSearchByCategory("electronics")}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined 
                        }>
                    Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/furnitures'
                    onClick={()=> context.setSearchByCategory("furnitures")}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined 
                        }>
                    Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    onClick={()=> context.setSearchByCategory(toys)}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined 
                        }>
                    Toys
                    </NavLink>
                </li> <li>
                    <NavLink 
                    to='/others'
                    onClick={()=> context.setSearchByCategory(others)}
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined 
                        }>
                    Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-2">
                <li className="text-black/60">
                   paula@platzi.com
                </li>
                <li>
                    <NavLink 
                    to='/My-account'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined 
                        }>
                    My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/My-order'
                     className={({isActive}) => 
                        isActive ? activeStyle : undefined 
                        }>
                    My Order
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/My-orders'
                     className={({isActive}) => 
                        isActive ? activeStyle : undefined 
                        }>
                    My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/Signin'
                    className={({isActive}) => 
                        isActive ? activeStyle : undefined 
                        }>
                    Sign in
                    </NavLink>
                </li>
                <li className="flex items-center">
                <ShoppingBagIcon className="h-6 w-6 text-black"/>
                <div>{context.cartProducts.length}</div>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar