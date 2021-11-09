import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import Header from "../../components/header/header";

const LandingPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://procerasoft.com:5000/api/products").then((knjige) => {
      setData(knjige.data);
      console.log(knjige.data);
    });
  }, []);

  return (
    <div className="landing-page-container">
      <Header></Header>
      <div className="books">
        {data &&
          data.map((knjiga) => {
            return <Card knjiga={knjiga}></Card>;
          })}
      </div>
    </div>
  );
};

export default LandingPage;
