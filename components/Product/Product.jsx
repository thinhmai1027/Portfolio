import './product.css'

// import ParticlesBackground from "../../components/ParticlesBackground.js"


const Product = ({img, link, title, desc}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <h1>{title}</h1>
      <p>{desc}</p>
      <a href={link} target="_blank" rel='noreferrer'>
        <img src={img} alt="" className="p-img"/>
      </a>
    </div>
  )
}

export default Product