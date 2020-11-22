import React from "react";
// import kategoriler from "./kategoriler.json"

export default function Categories() {
  const kategoriler = require("../data/kategoriler.json");

  return (
    <div className="bg-light-gray py-2">
      <div className="custom-container">
        <div className="scrollmenu">
          {kategoriler.map((category) => (
            <a href="#home" key={category.id}>
              {category.KategoriAdi}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
