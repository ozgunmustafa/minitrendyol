import React from 'react'
import { FiTrash } from "react-icons/fi";

export default function CartItem() {
    return (
        <div className="basket-item p-1 radius-soft bg-white shadow-2 card-border mb-2" style={{alignSelf:"unset"}}>
        <div>
          <img
            className="image"
            src="https://www.bayserif.com/content/images/thumbs/5f0/5f0498b81b299820a4080a67_knack-fermuar-detayli-erkek-sneaker-ayakkabi-beyaz_350.jpeg"
          />
          <div className="details">
            <span className="product_name">
              <strong>Product Name</strong>
            </span>
            <span className="size">
              Beden: <strong>M</strong>
            </span>

            <small>
              Ürün Kodu: <strong>KP8684578</strong>
            </small>
          </div>
        </div>
        <div className="count">
          <form className="count-form d-flex">
            <div
              className="value-button"
              id="decrease"
            >
              -
            </div>
            <input type="number" id="number"/>
            <div
              className="value-button"
              id="increase"
            >
              +
            </div>
          </form>
        </div>
        <div className="product_price text-center">
          <span className="discount">75 TL</span>
          <br />
          65 TL
        </div>
        <div className="text-center">
        <FiTrash />

        </div>
      </div>
    )
}
