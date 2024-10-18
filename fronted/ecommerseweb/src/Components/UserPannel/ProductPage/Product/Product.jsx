import React, {useState} from 'react';
import './Product.css'
import image1 from '../../../../Container/Productimages/image1.jpg'
import image2 from '../../../../Container/Productimages/image2.jpg'
import image3 from '../../../../Container/Productimages/image3.jpg'
import image4 from '../../../../Container/Productimages/image4.jpg'
import image5 from '../../../../Container/Productimages/image5.jpeg'
import image6 from '../../../../Container/Productimages/image6.jpg'
import image7 from '../../../../Container/Productimages/image7.jpg'
import image8 from '../../../../Container/Productimages/image8.jpg'
import image9 from '../../../../Container/Productimages/image9.jpg'
const Product = () => {
    const [product, setProduct] = useState([
    {
        title:'New blue shirt mens',
        price:1200,
        discount:15,
        thumbnail:image1
    },
    {
        title:'New blue shirt mens',
        price:1200,
        discount:15,
        thumbnail:image2
    },
    {
        title:'New blue shirt mens',
        price:1200,
        discount:15,
        thumbnail:image3
    },
    {
        title:'New blue shirt mens',
        price:1200,
        discount:15,
        thumbnail:image4
    },
    {
        title:'New blue shirt mens',
        price:1200,
        discount:15,
        thumbnail:image5
    },
    {
        title:'New blue shirt mens',
        price:1200,
        discount:15,
        thumbnail:image6
    },
    {
        title:'New blue shirt mens',
        price:1200,
        discount:15,
        thumbnail:image7
    },
    {
        title:'New blue shirt mens',
        price:1200,
        discount:15,
        thumbnail:image8
    },
    {
        title:'New blue shirt mens',
        price:1200,
        discount:15,
        thumbnail:image9
    }

])

    return (
        <div>
            <h1>All Product</h1>
            <p className="product-paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus illo omnis recusandae sequi aspernatur quis nostrum non eligendi alias!</p>
             <div className="UserPannel-products">
                {
                    product.map((item, index) => (
                       <div key={index} className="UserPannel-products-cards">
                          <img src={item.thumbnail} alt="" className="UserPannel-products-cards-image"/>
                          <div className="UserPannel-products-card-data">
                            <h3>{item.title}</h3>
                            <div>
                                <label> {item.price-((item.price* item.discount)/100)} </label>
                                <del>₹{item.price}</del>
                                <label> ( {item.discount}% off )</label>
                            </div>
                            <button className="UserPannel-products-btn">buy now</button>
                            <button className="UserPannel-products-Cardbtn">Add To Card</button>
                          </div>
                       </div>
                ))}
             </div>
        </div>
    );
}

export default Product;
