import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import db from "../firestoreConfig";
import { collection, getDocs } from "firebase/firestore";

function Crousel(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getDocs(collection(db, "banners"))
      .then((snapshot) => {
        snapshot.forEach((item) => {
          setItems(item.data().largeBanners);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Carousel>
      {items.map((item, i) => (
        <div key={i}>
          <img src={item} className='carousal-img' />
        </div>
      ))}
    </Carousel>
  );
}

export default Crousel;
