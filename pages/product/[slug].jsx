import { useContext } from "react";
import React, { useRouter } from "next/router"
import data from "../../utils/data";
import Layout from '../../components/Layout'
import { Store }   from "../../utils/Store"



export default function ProductScreen () {
  //in icializar el estado
  const { state, dispatch } = useContext(Store);


  const router = useRouter()

  const {query} = useRouter()
  const {slug} = query 

  // para buscar en nuestra api local
  const product = data.products.find((i) => i.slug === slug) 

  if (!product) { 
    return <div>producto no encontrado</div>;
  } 

  //funcion para gregar al carrito (sirve para capturar la informacion {item} que vamos a enviar a nuestro estado global)
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(x => x.slug === product.slug) 

    const quantity = existItem ? existItem.quantity + 1 : 1

     if (product.countInStock < quantity) {
       alert("lo siento no tenemos mas productos de este tipo");
       return; 
       
     }  
 

    
      dispatch({type : "CARD_ADD_ITEM", payload: {...product, quantity }})
      // router.push('/cart')
      
     
  }

  return (
    <div className="main_product">
      <Layout title={product.slug} />
      <h2 className="text-center">{product.name}</h2>
      <div className="container_single_product">
        <button
          className="btn btn-primary mt-4"
          onClick={() => router.push("/")}
        >
          Back to shopping
        </button>

        <div className="card mt-5 maximo-card">
          <div className="row g-1">
            <div className="col md-">
              <img
                src={product.image}
                alt=""
                className="img-fluid rounded-start"
              />
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h5 className="card-title">Price: ${product.price}</h5>
                <h5 className="card-title">{product.category}</h5>
                <h5 className="card-title">valoration: {product.rating}</h5>
                <p className="card-title">{product.description}</p>
                <p>{product.countInStock > 0 ? "In Stock" : "No hay"}</p>
                <button className="btn btn-primary" onClick={addToCartHandler}>
                  Add to Cart
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
