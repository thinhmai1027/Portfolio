import './productList.css'
import Product from '../Product/Product.jsx'
import {products} from "../../data"


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        {/* <p className="pl-desc">This is the desc</p> */}
      </div>
      {/* <img src={Me} atl="" className='intro-img2' /> */}
      <div className="pl-list">
        {products.map(item=>(
          <Product key={item.id} img={item.img} link={item.link} title={item.title} desc={item.desc}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList