import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/bagSlice';
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";




function HomeItem({item}) {


  const dispatch = useDispatch();
  const bagItems = useSelector((store)=>store.bag);
  const elementFound=bagItems.indexOf(item.id)>=0;
  /*indexOf basically check karega if item.id is present in bagItems or not if it is not present then it will return the index as -1*/


  const handleAddToBag=()=>{
    dispatch(bagActions.addToBag(item.id));
  }
  const handleRemoveFromBag=()=>{
    dispatch(bagActions.removeFromBag(item.id));
  }
 
  return (
    
   

     <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? 
       <button type="button" className="btn-add-bag btn btn-danger"  onClick={handleRemoveFromBag}> <MdDelete/>Remove</button>:
      <button type="button" className="btn-add-bag btn btn-success" onClick={handleAddToBag}><IoIosAddCircle />Add to Bag</button>
     }
    </div>  
      
   
  )
}

export default HomeItem;
