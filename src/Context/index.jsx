import { createContext ,useState,useEffect } from "react";


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider =({children})=>{
    //Shopping Cards - increment quantity
    const [count , setCount] =useState (0)

    //Product Detail- Open/close
    const [isProductDetailOpen, setIsProductDetailOpen]= useState(false)
    const openProductDetail =() =>setIsProductDetailOpen(true)
    const closeProductDetail =() =>setIsProductDetailOpen(false)

    //ChekOut-side-menu- Open/close
     const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen]= useState(false)
     const openCheckOutSideMenu =() =>setIsCheckOutSideMenuOpen(true)
     const closeCheckOutSideMenu =() =>setIsCheckOutSideMenuOpen(false)
 

    //Product Detail -Show Product
    const [productToShow,setProductToShow]=useState({})
    

    //Shopping carts -add products to carts
    const [cartProducts, setCartProducts]=useState([])

    //Shopping carts -Order
    const [order, setOrder] =useState([]);

    //get products
    const [items,setItems]=useState(null)
    const [filteredItem , setFilteredItem]=useState(null)

    //Get products by title
    const [searchByTitle,setSearchByTitle]=useState(null)

    //Get products by category
     const [searchByCategory,setSearchByCategory]=useState(null)

     

    useEffect (()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(response=> response.json())
        .then(data =>setItems(data))
    },[])

    const filteredItemByTitle = (items, searchByTitle)=> {
        return items?.filter(item=> item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    const filteredItemByCategory = (items, searchByCategory)=> {
        console.log("📌 Filtrando categoría:", searchByCategory);
        return items?.filter(item=> item.category?.name?.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    const BY_TITLE = "BY_TITLE";
    const BY_CATEGORY = "BY_CATEGORY";
    const BY_TITLE_BY_CATEGORY = "BY_TITLE_BY_CATEGORY";


    const filterBy= (searchType,items, searchByTitle, searchByCategory)=>{
        console.log("🔎 Filtrando por:", searchType);
        console.log("📌 searchByTitle:", searchByTitle);
        console.log("📌 searchByCategory:", searchByCategory);

        if (searchType === "BY_TITLE"){
            return filteredItemByTitle(items,searchByTitle)
        }
        if (searchType === "BY_CATEGORY"){
            return filteredItemByCategory(items,searchByCategory)
        }
        if (searchType === "BY_TITLE_BY_CATEGORY"){
            return filteredItemByCategory(items,searchByCategory).filter(item=> item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType){
            return items
        }
    }

    useEffect (()=>{
        console.log("🛠 Actualizando filtros:");
        console.log("➡ searchByTitle:", searchByTitle);
        console.log("➡ searchByCategory:", searchByCategory);
        if (!items) return;
        if(searchByTitle && searchByCategory) setFilteredItem(filterBy (BY_TITLE_BY_CATEGORY,items, searchByTitle,searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItem(filterBy (BY_TITLE,items, searchByTitle,searchByCategory))
        if(!searchByTitle && searchByCategory) setFilteredItem(filterBy (BY_CATEGORY,items, searchByTitle,searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItem(filterBy (null,items, searchByTitle,searchByCategory))},
        
        [items, searchByTitle,searchByCategory])

       // console.log('searchByTitle', searchByTitle)
        //console.log('searchBycategory')

    
    
    return(
        <ShoppingCartContext.Provider value={{        
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutSideMenuOpen,
            openCheckOutSideMenu ,
            closeCheckOutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItem,
            //setFilteredItem,
            searchByCategory,
            setSearchByCategory,
            setCartProducts,

        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}