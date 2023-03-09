import { useEffect, useState } from "react";

// components
import PropertyDetails from "../components/PropertyDetails";

const Home = () => {
  const [properties, setProperties] = useState()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${process.env.REACT_APP_PROXY}/api/properties`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const json = await response.json();

      if (response.ok) {
        setProperties(json)
      }
    };

      fetchWorkouts();
  }, []);

  return (
    <div className="home">
         {properties && properties.map((property) => (
            <PropertyDetails key={property._id} property={property} />
          ))}
    </div>
  );
};

export default Home;
