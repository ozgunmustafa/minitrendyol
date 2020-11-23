import React, { useEffect, useRef, useState } from "react";
import CartItem from "../components/CartItem";


export default function Cart() {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  },[])
 
  return (
    <div className="custom-container">
      <div className="row">
        <div className="col-md-9">
          <div className="basket" style={{paddingBottom:height}}>
            <h1 className="section-title my-3">Sepetim</h1>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="col-md-3 px-0">
          <div className="order-summary" ref={ref}>
            <button className="primary-button hide-sm my-2">Sepeti Onayla</button>
            <div className="order-wrap card-border p-3">
              <h1 className="section-title">Sipariş Özeti</h1>
              <div className="price-details d-flex justify-content-between">
                <span className="text-muted">Ürün Toplamı</span>
                <span className="">78,99 TL</span>
              </div>
              <div className="price-details d-flex justify-content-between">
                <span className="text-muted">Kargo Toplamı</span>
                <span className="">10,99 TL</span>
              </div>
              <div className="price-details d-flex justify-content-between">
                <span className="text-muted">Sepette %35 indirim</span>
                <span className="">11,99 TL</span>
              </div>
              <hr/>
              <div className="price-details d-flex justify-content-between">
                <span className="text-muted">Toplam</span>
                <span className="text-primary">11,99 TL</span>
              </div>
              
              <button className="primary-button hide-lg"> Sepeti Onayla</button>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
