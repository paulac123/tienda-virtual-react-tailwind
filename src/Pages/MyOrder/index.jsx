import { useContext } from "react";
import { Link } from "react-router-dom";
import{ ChevronLeftIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCards";
import Layout from "../../Components/Layout";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  const index= currentPath.substring(currentPath.lastIndexOf("/")+1)
  const order = context.order[index] ?? context.order.slice(-1)[0]; 

  return (
    <Layout>
       <div className="flex items-center justify-center relative w-80 ">
            <Link to="/My-orders" className="absolute left-0" >
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer "/>
            </Link>
            <h1>My Order</h1>
        </div>
      
      <div className="px-6 flex-col w-80">
      {order?.products ? (
          order.products.map(product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              images={product.images}
              price={product.price}
            />
          ))
        ) : (
          <p>No hay órdenes aún.</p> // Mensaje si no hay órdenes
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
