import Link from 'next/link'


export default function ProductItem({product}) {
  return (
    <div>
      <div className="col">
        <div className="card">
          <img src={product.image} className='img_card'/>
          <div className="card_body">
            <h4>{product.name}</h4>
            <h5>{product.price}</h5>
            <p>{product.description}</p>
            <p>{product.rating}</p>
            <Link href={`/product/${product.slug}`}>
            <a>
              <button className='btn btn-primary'>
                view product
              </button>
            </a>
            </Link>

          </div>
          
        </div>
      </div>
      
    </div>
  )
}
