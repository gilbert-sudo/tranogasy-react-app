import Footer from "../components/Footer";
import CarouselDetails from "../components/CarouselDetails";
import MiniCarousel from "../components/MiniCarousel";
import CardDetails from "../components/CardDetails";

const PropertyDetails = () => {
  return (
    <div>
      <CarouselDetails />
      <div className="site-section site-section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <hr />
              <MiniCarousel />
              <CardDetails />
              {/* map comp */}
              {/* end map */}
              {/* gallerie */}
            </div>
            <div className="col-lg-4 pt-5" id="contactAgent">
              {/* agent contact form */}
              {/* agent contact form */}
              <div className="bg-white widget border rounded">
                <h3 className="h4 text-black widget-title mb-3">Paragraph</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit qui explicabo, libero nam, saepe eligendi. Molestias
                  maiores illum error rerum. Exercitationem ullam saepe, minus,
                  reiciendis ducimus quis. Illo, quisquam, veritatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
