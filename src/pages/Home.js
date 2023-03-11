import { useEffect, useState } from "react";
import PropertyDetails from "../components/PropertyDetails";
import Paging from "../components/Paging";
import SearchForm from "../components/SearchForm";
import PropertyFilter from "../components/PropertyFilter";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Home = () => {
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_PROXY}/api/properties`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "aplication/json",
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        setProperties(json);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div>
      <Carousel />
      <div className="site-section site-section-sm pb-0">
        <div className="container">
          <SearchForm />
          <PropertyFilter />
        </div>
      </div>
      <div className="site-section site-section-sm bg-light">
        <div className="container">
          <div className="row mb-5">
            {properties &&
              properties.map((property) => (
                <PropertyDetails key={property._id} property={property} />
              ))}
          </div>
          <Paging />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
