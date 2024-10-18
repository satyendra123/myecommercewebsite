import React, {useState} from 'react';
import './Product.css';
import AdminPage from '../AdminPage/AdminPage';
import image1 from '../../../Container/Productimages/image1.jpg'
import image2 from '../../../Container/Productimages/image2.jpg'
import image3 from '../../../Container/Productimages/image3.jpg'
import image4 from '../../../Container/Productimages/image4.jpg'
import image5 from '../../../Container/Productimages/image5.jpeg'
import image6 from '../../../Container/Productimages/image6.jpg'
import image7 from '../../../Container/Productimages/image7.jpg'
import image8 from '../../../Container/Productimages/image8.jpg'
import image9 from '../../../Container/Productimages/image9.jpg'

const Product = () => {

    const [product, Setproduct] = useState([
        { 
           title: 'mens shirt slim blue', 
          price: 4500, 
          discount: 20, 
          description:'this is the best shirt available in online market',
          image:image1
        },
        { 
            title: 'mens shirt slim blue', 
           price: 4500, 
           discount: 20, 
           description:'this is the best shirt available in online market',
           image:image2
         },
         { 
            title: 'mens shirt slim blue', 
           price: 4500, 
           discount: 20, 
           description:'this is the best shirt available in online market',
           image:image3
         },
         { 
            title: 'mens shirt slim blue', 
           price: 4500, 
           discount: 20, 
           description:'this is the best shirt available in online market',
           image:image4
         },
         { 
            title: 'mens shirt slim blue', 
           price: 4500, 
           discount: 20, 
           description:'this is the best shirt available in online market',
           image:image5
         },
         { 
            title: 'mens shirt slim blue', 
           price: 4500, 
           discount: 20, 
           description:'this is the best shirt available in online market',
           image:image6
         },
         { 
            title: 'mens shirt slim blue', 
           price: 4500, 
           discount: 20, 
           description:'this is the best shirt available in online market',
           image:image7
         },
         { 
            title: 'mens shirt slim blue', 
           price: 4500, 
           discount: 20, 
           description:'this is the best shirt available in online market',
           image:image8
         },
         { 
            title: 'mens shirt slim blue', 
           price: 4500, 
           discount: 20, 
           description:'this is the best shirt available in online market',
           image:image9
         },
    
    ])
    return (
        <div>
            <AdminPage>
                <div className="Product-container">
                    <p className="product-heading">Product</p>
                <div className="product-card-container">
                 {
                    product.map((item,index)=>(
                        <div key={index} className="Product-card">
          <img src={item.image} alt={item.name} className="Product-card-image"/>
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div className="product-card-price">
                <p>{(item.price * item.discount)/100 }</p>
                <del>{item.price}</del>
                <label>{item.discount}% off</label>
            </div>
            
            </div>
        </div>
                    ))
                 }
                 
                </div>
                </div>
            </AdminPage>
        </div>
    );
}

export default Product;
