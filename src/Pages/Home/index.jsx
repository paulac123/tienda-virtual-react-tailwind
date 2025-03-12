import { useContext } from "react";
import Layout from "../../components/Layout";
import Cards from "../../Components/Cards";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
    const context = useContext(ShoppingCartContext);

    const renderView = () => {
        
            if (context.filteredItem?.length > 0){
            return ( 
                context.filteredItem?.map(item => (
                <Cards key={item.id} data={item} />
            )))
        }else{
            return(
                <div>We dont have anything :( </div>
            )
        
        
        }
    };

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-6">
                <h1 className="font-medium text-xl">Exclusive products</h1>
            </div>
            <input 
                type="text" 
                placeholder="Search a product"
                className="rounded-lg border border-black w-80 p-4 mb-4"
                onChange={(event) => context.setSearchByTitle(event.target.value)}
            />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {renderView()} 
            </div>
            <ProductDetail />
        </Layout>
    );
}

export default Home;
