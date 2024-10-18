import React from 'react';
import './TopProducts.css';
import AosWrapper from '../../../pages/AosWrapper';
import TopProductsCard from '../../../pages/TopProductsCards'
import image1 from '../../../Components/assets/shirt/shirt.png';
import image2 from '../../../Components/assets/shirt/shirt2.png';
import image3 from '../../../Components/assets/shirt/shirt3.png';
const TopProducts = () => {

    const TopProductsData = [
        {
            'id':1,
            'image':image1,
            'title':"Casual Wear",
            'description':"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ratione Lorem"
        },

        {
            'id':2,
            'image':image2,
            'title':"Printed Shirt",
            'description':"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ratione Lorem"
        },

        {
            'id':3,
            'image':image3,
            'title':"Women Shirt",
            'description':"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ratione Lorem"
        },

    ]
    return (
        <div>
         <div className="TopProducts-container">
         <AosWrapper animationType="fade-up">
     <p className="TopProducts-heading">Top selling products for you</p>
     <h1 className="TopProducts-subheading">Products</h1>
     <p className="TopProducts-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ratione.</p>
     </AosWrapper>
    {/* Cards Section */}
<div className="TopProducts-card-container">
  {TopProductsData.map((data) => (
       <AosWrapper key={data.id} animationType="zoom-in">
    <div key={data.id} className="TopProducts-card">
      {/* Card Image */}
      <div className="TopProducts-card-image">
        <img src={data.image} alt={data.title} />
      </div>

      {/* Card Description */}
      <div className="TopProducts-card-description">
        <h3 className="TopProducts-card-heading">{data.title}</h3>
        <p className="TopProducts-card-text">{data.description}</p>
      </div>
    </div>
    </AosWrapper>
  ))}
</div>
        </div>
        </div>
    );
}

export default TopProducts;
