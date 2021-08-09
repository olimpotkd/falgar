import React, { useEffect, useState } from "react";
import LogoImgStrip from "../components/logoImgStrip/logoImgStrip.jsx";
import "./products.scss";

import { db } from "../firebase";

const Products = ({ customClass }) => {
  const [brands, setBrands] = useState([]);
  const [brochureLink, setBrochureLink] = useState([]);

  useEffect(() => {
    const brandsRef = db.collection("brands");
    const assetsRef = db.collection("assets").doc("brochure");

    brandsRef.get().then((result) => {
      if (!result.empty) {
        setBrands(parseBrands(result));
      }
    });

    assetsRef.get().then((doc) => {
      if (doc.exists) {
        let data = doc.data();
        setBrochureLink(data.link);
      }
    });
  }, []);

  const parseBrands = (result) => {
    let parsedBrandsArray = [];

    result.forEach((doc) => {
      let data = doc.data();

      let parsedDoc = {
        id: doc.id,
        url: data.url,
        imageSrc: data.brandImage,
      };

      parsedBrandsArray.push(parsedDoc);
    });

    return parsedBrandsArray;
  };

  return (
    <section className={`products page-container ${customClass}`}>
      <div className="wrapper">
        <article>
          <div className="information">
            <h2>
              Representamos las mejores marcas para aplicaciones y procesos de
              soldadura, como también equipos de protección y consumibles
              innovadores, de reconocimiento mundial
            </h2>
            <div>
              <h2 className={"list-title"}>Contamos con soluciones para:</h2>
              <div>
                <ul>
                  <li>Soldadura de revestimiento</li>
                  <li>Corte y Pulido</li>
                  <li>Tornillería</li>
                  <li>Herramientas</li>
                  <li>Seguridad Industrial</li>
                  <li>Salud Ocupacional</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <LogoImgStrip headerText={"Representamos las marcas"} data={brands} />

        <div className="brochure-container">
          <span>
            Descarga el brochure{" "}
            <a target="_blank" rel="noopener noreferrer" href={brochureLink}>
              aquí
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Products;
