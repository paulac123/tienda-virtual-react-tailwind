import{ XMarkIcon } from '@heroicons/react/24/solid'

export const OrderCard =(props) => {
    const { id,title, images ,price, handleDelete } =props
    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon 
        onClick={() => handleDelete(id)} 
       className="size-6 text-black cursor-pointer" 
       />
    }

    return ( 
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                <img className="w-full h-full rounded-lg object-cover" src="https://picsum.photos/640/480" alt={title} />
                </figure>
                <p className="text-lg font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                {renderXMarkIcon}

            </div>
        </div>
    )
}

export default OrderCard;