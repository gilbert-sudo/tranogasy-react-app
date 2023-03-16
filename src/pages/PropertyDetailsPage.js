import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import CarouselDetails from "../components/CarouselDetails";
import MiniCarousel from "../components/MiniCarousel";
import CardDetails from "../components/CardDetails";
import PropertyGallery from "../components/PropertyGallery";
import ContactAgentForm from "../components/ContactAgentForm";

const PropertyDetails = () => {
  const { id } = useParams();
  const [propertiesDetails, setPropertiesDetails] = useState(null);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_PROXY}/api/properties/${id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "aplication/json",
          },
        }
      );
      const json = await response.json();
      if (response.ok) {
        setPropertiesDetails(json);
      }
    };
    fetchPropertyDetails();
    // scroll to top of the page
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      {propertiesDetails && <CarouselDetails property={propertiesDetails} />}
      <div className="site-section site-section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <hr />
              <MiniCarousel />
              <CardDetails />
              <div className="bg-white widget border rounded">
                <h3 className="h4 text-black widget-title mb-3">
                  Déscription:
                </h3>
                <p>{propertiesDetails && propertiesDetails.description}</p>
              </div>
              <PropertyGallery />
            </div>
            <div className="col-lg-4 pt-5" id="contactAgent">
              {/* agent contact form */}
              <ContactAgentForm />
              {/* agent contact form */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
