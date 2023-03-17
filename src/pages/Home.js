import { useEffect, useState } from "react";
import TopPropertyDetails from "../components/TopPropertyDetails";
import Paging from "../components/Paging";
import SearchForm from "../components/SearchForm";
import PropertyFilter from "../components/PropertyFilter";
import HomeSlider from "../components/HomeSlider";
import Footer from "../components/Footer";
import {setTotalPage} from  '../redux/paginationRedux';
import {useDispatch, useSelector} from 'react-redux';
const Home = () => {
  const dispatch = useDispatch();
  const pgData = useSelector((state) => state.pagination);
  const currentPage = pgData[0].currentPage;
  const [topProperties, setTopProperties] = useState(null);
  const itemsPerPage = 2;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
 
  useEffect(() => {
    
    const fetchTopProperties = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_PROXY}/api/top-properties`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "aplication/json",
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        setTopProperties(json);
        
      }
    };
    fetchTopProperties();
    
  }, []);
if(topProperties){
  dispatch(setTotalPage(topProperties.length));
}
  return (
    
    <div className="home">
      <HomeSlider />
      <div className="site-section site-section-sm pb-0" id="prodisplay">
        <div className="container">
          <SearchForm />
          <PropertyFilter />
        </div>
      </div>
      <div className="site-section site-section-sm bg-light">
        <div className="container">
          <div className="row mb-5">
            {topProperties &&
              topProperties
                .slice(startIndex, endIndex)
                .map((topProperty) => (
                  <TopPropertyDetails
                    key={topProperty.property._id}
                    topProperty={topProperty}
                  />
                ))}
          </div>
          {topProperties && (
            <Paging
         />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
