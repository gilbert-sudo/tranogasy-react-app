import { useEffect, useState } from "react";
import PropertyDetails from "../components/PropertyDetails";
import Paging from "../components/Paging";
import SearchForm from "../components/SearchForm";
import PropertyFilter from "../components/PropertyFilter";
import HomeSlider from "../components/HomeSlider";
import Footer from "../components/Footer";

const Home = () => {
  const [properties, setProperties] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;


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
    <div className="home">
      <HomeSlider />
      <div className="site-section site-section-sm pb-0">
        <div className="container">
          <SearchForm />
          <PropertyFilter />
        </div>
      </div>
      <div className="site-section site-section-sm bg-light" id="prodisplay">
        <div className="container">
          <div className="row mb-5">
           {properties &&properties.slice(startIndex, endIndex).map((property) => (
                <PropertyDetails key={property._id} property={property} />
              ))}
          </div>
         {properties && <Paging
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPage={Math.ceil(properties.length / itemsPerPage)}
      />}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
