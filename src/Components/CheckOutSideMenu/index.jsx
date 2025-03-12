import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import{ XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from "../OrderCards"
import { totalPrice } from "../../Components/Utils"
import "./styless.css"

const CheckOutSideMenu = () => {
    const context =useContext(ShoppingCartContext)

    const handleDelete = (id)=>{
    const filteredProducts =context.cartProducts.filter(product => product.id !=id);
    context.setCartProducts(filteredProducts);
    };

const handleCheckOut = () =>{

  const orderToAdd = {
    date:"08-03-25",
    products:context.cartProducts,
    totalProducts:context.cartProducts.length,
    totalPrice:totalPrice(context.cartProducts)
  }
  
  context.setOrder([...context.order,orderToAdd])
  context.setCartProducts([])
  context.setSearchByTitle(null)

  
}
    
return(
    <aside 
    className={`${context.isCheckOutSideMenuOpen ? "flex flex-col" : "hidden"} checkOut-Side-Menu fixed bg-white right-0 border border-black rounded-lg`}>
    
    {/* Encabezado con botón de cerrar */}
    <div className="flex justify-between items-center p-6">
      <h2 className="font-medium text-xl">Myorder</h2>
      <div><XMarkIcon className="size-6 text-black cursor-pointer"
        onClick={() => context.closeCheckOutSideMenu()} />
    </div>
    </div>
  <div className="px-6 overflow-y-scroll flex-1">
    <div className="px-6">
      <p className="flex justify-between items-center">
        <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        
      </p>

      <Link to="My-orders/last">
      <button className="bg-black py-3 text-white w-full rounded-lg" 
      onClick={()=> handleCheckOut()}>checkOut</button>
      </Link>
      

    </div>
    <div className="px-6 overflow-y-scroll flex-1">
  {
    context.cartProducts.map(product=>(
      <OrderCard 
      key={product.id}
      id={product.id}
      title={product.title}
      images={product.images}
      price={product.price}
      handleDelete={handleDelete}
      />

    ))
}
  </div>
  </div>
   
  </aside>
  
)}


export default CheckOutSideMenu 