import PropertyDetails from "../components/PropertyDetails";

const Home = async () => {
  const response = await fetch(`${process.env.REACT_APP_PROXY}/api/properties`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "aplication/json",
      },
  });
  const json = await response.json();
  var properties;
  if (response.ok) {
    properties = json;
    console.log(json);
  }

  return (
    <div className="row mb-5">
        {properties && properties.map((property) => {
            <PropertyDetails key={property._id} property={property}/>
        })}
    </div> 
  );
};

export default Home;
