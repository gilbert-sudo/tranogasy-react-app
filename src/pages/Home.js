import { useEffect, useState } from "react";
import PropertyDetails from "../components/PropertyDetails";

const Home = () => {

  const [properties, setProperties] = useState(null)

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch(`${process.env.REACT_APP_PROXY}/api/properties`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "aplication/json",
        },
      });
      const json = await response.json();
      if (response.ok) {
        setProperties(json)
      }
    }
    fetchProperties();
  }, []);

  return (
    <div className="row mb-5">
        {properties && properties.map((property) => (
            <PropertyDetails key={property._id} property={property}/>
        ))}
    </div> 
  );
};

export default Home;