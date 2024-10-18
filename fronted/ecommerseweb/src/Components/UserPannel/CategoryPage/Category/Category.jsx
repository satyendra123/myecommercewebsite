import React, {useState} from 'react';
import './Category.css'
const Category = () => {
    const [category, setCategory] = useState(
        [
            { 
                title: 'Electronics' 
            },
            { 
                title: 'Fashion' 
            },
            { 
                title: 'Smartphones' 
            },
            { 
                title: 'Furnitures' 
            },
            { 
                title: 'Mens' 
            },
            { 
                title: 'Womens' 
            },
        ]
    )
    return (
        <div>
            <div className="Category-container">
                <div className="Category-items">
                  {
                    category.map((item,index)=>(
                        <div key={index} className="items">
                            <i className="ri-menu-search-line category-items-icons"></i>
                            <h1>{item.title}</h1>
                        </div>
                    ))
                  }
                </div>
            </div>
        </div>
    );
}

export default Category;
