import React from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const urunler = require("../data/urunler.json");
  return (
    <div className="custom-container p-1 my-2">
      <div className="d-grid d-grid-3">
        {urunler.map((urun) => (
          <ProductCard details={urun} key={urun.id}/>
        ))}
      </div>
    </div>
  );
}
