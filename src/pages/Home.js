import TopPropertyDetails from "../components/TopPropertyDetails";
import Paging from "../components/Paging";
import SearchForm from "../components/SearchForm";
import PropertyFilter from "../components/PropertyFilter";
import HomeSlider from "../components/HomeSlider";
import { setTotalPage } from "../redux/redux";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  //redux 
  const dispatch = useDispatch();
  const paginationIndex = useSelector((state) => state.pagination);
  const topProperties = useSelector((state) => state.topProperties);

  if (topProperties) {
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
        <div className="container" style={{paddingBottom:"80px"}}>
          <div className="row">
            {topProperties &&
              topProperties
                .slice(paginationIndex[1].startIndex, paginationIndex[1].endIndex)
                .map((topProperty) => (
                  <TopPropertyDetails
                    key={topProperty.property._id}
                    topProperty={topProperty}
                  />
                ))}
          </div>
          {topProperties && <Paging />}
        </div>
      </div>
    </div>
  );
};

export default Home;
