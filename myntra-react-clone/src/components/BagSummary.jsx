import React, { useState } from 'react'
import { useSelector } from 'react-redux';



function BagSummary() {

  const [clicked,setClicked]=useState(false);


    const bagItemIds=useSelector((state)=>state.bag);
    const items=useSelector((state)=>state.items);
    const finalItems=items.filter((item)=>{
      const itemIndex=bagItemIds.indexOf(item.id);
      return itemIndex >= 0;
    })
    const CONVENIENCE_FEES=99;
    let totalItems=bagItemIds.length;
    let totalMRP=0;
    let totalDiscount=0;

    finalItems.forEach((bagyItem) => {
      console.log("original_price:", bagyItem.original_price);
      console.log("current_price:", bagyItem.current_price);
      totalMRP += bagyItem.original_price;
      totalDiscount += Math.abs(bagyItem.original_price - bagyItem.current_price);
  });

    let finalPayment=totalMRP - totalDiscount + CONVENIENCE_FEES;

    const handleonclick=()=>{
      setClicked(true);
      
    }
    
  return (
    <div className="bag-summary">
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItems} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  {clicked ?<button className="placed btn-place-order">
  
    <div className="css-xjhrni ">Placed!!!</div>
    
  </button>
  :<button className="btn-place-order">
    <div className="css-xjhrni" onClick={handleonclick}>PLACE ORDER</div>
  </button>}
  </div>
  )
}

export default BagSummary
