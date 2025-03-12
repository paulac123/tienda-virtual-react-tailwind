import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import{ XMarkIcon } from '@heroicons/react/24/solid'
import "./styless.css"

const ProductDetail = () => {
    const context =useContext(ShoppingCartContext)
return(
    <aside 
    className={`${context.isProductDetailOpen ? "flex flex-col" : "hidden"} product-detail fixed bg-white right-0 border border-black rounded-lg`}>
    
    {/* Encabezado con botón de cerrar */}
    <div className="flex justify-between items-center p-6">
      <h2 className="font-medium text-xl">Details</h2>
      <XMarkIcon className="size-6 text-black cursor-pointer"
        onClick={() => context.closeProductDetail()} />
    </div>
  
    {/* Imagen del producto */}
    <figure className="px-6">
      <img className="w-full h-full rounded-lg" src={context.productToShow.images} 
        alt={context.productToShow.title} />
    </figure>
  
    {/* Descripción del producto */}
    <div className="p-6">
      <p className="font-medium text-2xl mb-2">${context.productToShow.price}</p>
      <p className="font-medium text-md">{context.productToShow.title}</p>
      <p className="font-light text-sm">{context.productToShow.description}</p>
    </div>
  </aside>
  
)
}

export default ProductDetail