import React from "react";
import Product from "./Product";
import "./Home.css";

//import uuid v4
import { v4 as uuid } from "uuid";

const Home = () => {
  const id = uuid();
  return (
    <div className="home">
      <div className="home__container">
        <img src="./images/banner.jpg" alt="images" className="home__image" />

        <div className="home__row">
          <Product
            id={id}
            title="Campus Men's Mike (N) Running Shoes No Cost EMI: Avail No Cost EMI on select cards for orders"
            price={70}
            rating={5}
            image="./images/shoes.jpg"
          />
          <Product
            id={Math.random.tofixed}
            title="Vivo Y75 5G (Glowing Galaxy, 8GB RAM, 128GB ROM) with No Cost EMI/Additional Exchange Offers"
            price={700}
            rating={4}
            image="./images/mobile.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={Math.random.tofixed}
            title="Homitecture Cotton Hand Woven Throw for Sofa Couch AC Comforter Blanket Sofa Cover Dohar for Living Room Home and Office Decor (125X150 cms, White )"
            price={300}
            rating={3}
            image="./images/recliner.jpg"
          />
          <Product
            id={Math.random.tofixed}
            title="boAt Wave Call Smart Watch, Smart Talk with Advanced Dedicated Bluetooth Calling Chip, 1.69” HD Display with 550 NITS & 70% Color Gamut, 150+ Watch Faces, Multi-Sport Modes,HR,SpO2, IP68(Active Black)"
            price={200}
            rating={4}
            image="./images/smartwatch.jpg"
          />
          <Product
            id={Math.random.tofixed}
            title="STRIFF Adjustable Laptop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand(Black)"
            price={300}
            rating={3}
            image="./images/laptop.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={Math.random.tofixed}
            title="Acer Ha220Q 21.5 Inch (54.61 cm) LCD 1920 X 1080 Pixels Full Hd IPS Ultra Slim (6.6Mm Thick) Monitor I Frameless Design I AMD Free Sync I Eye Care Features I Stereo Speakers (White)"
            price={100}
            rating={2}
            image="./images/screen.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
