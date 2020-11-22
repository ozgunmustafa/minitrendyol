import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard=({details})=> {
    return (
        <Link to="/urun-detay" className="product_card shadow-1">
            <img src={details.Resimler[0].Resim} className="product_card_image" alt={details.UrunAciklamasi}/> 
            <div className="product_card_bottom">
                <div className="product_name">{details.UrunAdi}</div>
                <div className="product_price"><span className="discount">{(details.Fiyat + details.Fiyat * 0.10).toFixed(2)} TL</span>{details.Fiyat} TL</div>
            </div>
            
        </Link>
    )
}
export default ProductCard