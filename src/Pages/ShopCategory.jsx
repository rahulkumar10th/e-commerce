import React, { useContext } from 'react'; // Only keep this if you're using other React hooks
import './css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
  
import dropdown_icon from '../Components/Assets/dropdown_icon.png'

import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  // If you're not using all_product, remove it from destructuring
   const {all_product} = useContext(ShopContext);
    

  return (
    <div className='shop-category'>
      <img  className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">

     <p>
      <span>Showing 1-12</span> out of 36
     </p>
     <div className="shopcategory-sort">
      sort by <img src={dropdown_icon} alt="" />
     </div>

      </div>

     <div className="shopcategory-product">
      {all_product.map((item,i)=>{
       if(props.category ===item.category){
        return <Item  key={i} id={item.id} name ={item.name} image={item.image } new_price={item.new_price} old_price ={item.old_price}/>
       }else{
        return null;
       }

      })}
     </div>
     <div className="shopcategory-loadmore">
      Explore More
     </div>
     
    </div>
  );
};

export default ShopCategory;
