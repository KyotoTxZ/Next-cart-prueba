
import Fliter_Products from '../components/Filter_Products'
import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import styles from '../styles/Home.module.css'
import data from '../utils/data'
import Link from 'next/link'

export default function Home() {

  const {products} = data;

  return (
    <main className="main">
      <Layout title={"Home"}>
        <div className="filer_product">
          <h1 className="title_product">Lista de productos jajaj</h1>
          <Fliter_Products products={products} />
          <li className="nav-item">
            <Link href="/cart">
              <a className="nav-link active" aria-current="page" href="#">
                Cart{" "}
              </a>
            </Link>
          </li>
        </div>

        <div className="container_card">
          <div className="grid_cards">
            {products.map((product) => (
              <ProductItem key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </Layout>
    </main>
  );
}
