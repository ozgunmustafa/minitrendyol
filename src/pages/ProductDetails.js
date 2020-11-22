import React from "react";
import {AiOutlineHeart} from "react-icons/ai"

export default function ProductDetails() {
  return (
    <div className="custom-container">
      <div className="row mt-2">
        <div className="col-md-1 thumbs">
          <div className="product-thumbs">
            <img
              src="https://www.bayserif.com/content/images/thumbs/5f0/5f0498b81b299820a4080a67_knack-fermuar-detayli-erkek-sneaker-ayakkabi-beyaz_350.jpeg"
              className="product-thumb"
            />
            <img
              src="https://www.bayserif.com/content/images/thumbs/5f0/5f0498b81b299820a4080a67_knack-fermuar-detayli-erkek-sneaker-ayakkabi-beyaz_350.jpeg"
              className="product-thumb"
            />
          </div>
        </div>
        <div className="col-md-5 px-0 main-image">
          <div className="position-relative">
            <img
              src="https://www.bayserif.com/content/images/thumbs/5f0/5f0498b81b299820a4080a67_knack-fermuar-detayli-erkek-sneaker-ayakkabi-beyaz_350.jpeg"
              className="preview-image"
            />
            <AiOutlineHeart className="fav-btn"/>
          </div>
        </div>
        <div className="col-md-6 order-3">
          <div className="product-details">
            <div className="card-border p-3 mb-1">
              <h1 className="product-title">
                Knack Günlük Tarz Erkek Sneaker Ayakkabı
              </h1>
              <small className="d-block">
                Ürün Kodu : <strong>KP88895756</strong>
              </small>
              <small className="d-block">
                Stok Adedi : <strong>8</strong>
              </small>
              <span className="d-block price">69.99 TL</span>
            </div>
            <div className="options card-border p-3 mb-1">
              <div className="custom-panel">
                <div className="custom-panel-title">Renk</div>
                <div className="custom-panel-body">
                  <label className="color-label">
                    <input type="radio" name="color" />
                    <img
                      src="https://www.bayserif.com/content/images/thumbs/5f0/5f0498b81b299820a4080a67_knack-fermuar-detayli-erkek-sneaker-ayakkabi-beyaz_350.jpeg"
                      className=""
                    />
                  </label>
                  <label className="color-label">
                    <input type="radio" name="color" />
                    <img
                      src="https://www.bayserif.com/content/images/thumbs/5f0/5f0498b81b299820a4080a67_knack-fermuar-detayli-erkek-sneaker-ayakkabi-beyaz_350.jpeg"
                      className=""
                    />
                  </label>
                  <label className="color-label">
                    <input type="radio" name="color" />
                    <img
                      src="https://www.bayserif.com/content/images/thumbs/5f0/5f0498b81b299820a4080a67_knack-fermuar-detayli-erkek-sneaker-ayakkabi-beyaz_350.jpeg"
                      className=""
                    />
                  </label>
                </div>
              </div>
              <hr />
              <div className="custom-panel">
                <div className="custom-panel-title">Beden</div>
                <div className="custom-panel-body">
                  <label className="size-label">
                    <input type="radio" name="size" />
                    <span>S</span>
                  </label>
                  <label className="size-label">
                    <input type="radio" name="size" />
                    <span>M</span>
                  </label>
                  <label className="size-label">
                    <input type="radio" name="size" />
                    <span>L</span>
                  </label>
                </div>
              </div>
              <hr/>
              <div>
                  <button className="primary-button">Sepete Ekle</button>
              </div>
            </div>
            <div className="card-border p-3 mb-1">
              <div className="custom-panel">
                <div className="custom-panel-title">Ürün Bilgileri</div>
                <div className="custom-panel-body">
                  <p className="product-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius, est distinctio? Reiciendis aliquam necessitatibus aut
                    cupiditate nisi! Corporis ratione sapiente iste consequatur
                    officiis alias necessitatibus ullam molestiae. Illum, amet
                    ex.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
