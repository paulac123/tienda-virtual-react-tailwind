import{ ChevronRightIcon } from '@heroicons/react/24/solid'

export const OrdersCard =(props) => {
    const { totalPrice, totalProducts } =props
   

    return ( 
        <div className="flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4">
            <div className="flex items-center gap-2">
            <p className='flex justify-between w-full'>
                <div className='flex flex-col'>
                <span className='font-light'>01.02.2023</span>
                <span className='font-light'>{totalProducts} articles</span>
                <span className='font-medium text-2xl'>${totalPrice}</span>
                <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>
                </div>
            </p>
            </div>
        </div>
    )
}

export default OrdersCard;