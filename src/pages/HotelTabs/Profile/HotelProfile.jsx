import Container from "../../../components/BasicComponent/Container";
import ContactInformation from "./ContactInformation";
import PropertyDetails from "./PropertyDetails";
import LocationAddress from "./LocationAddress";
import PropertyPolicy from "./PropertyPolicy";
import AmenitiesManagement from "./AmenitiesManagement";

const HotelProfile = () => {
  return(
    <>
      <div>
        <Container title={"Basic Property Details"}>
          <PropertyDetails hotel={{}} />
        </Container>
      </div>
      <div>
        <Container title={"Contact Information"}>
          <ContactInformation contact={{}} />
        </Container>
      </div>
      <div>
        <Container title={"Location & Address"}>
          <LocationAddress location={{}} />
        </Container>
      </div>
      <div>
        <Container title={"Property Description & Policies"}>
          <PropertyPolicy policy={{}} />
        </Container>
      </div>
      <div>
        <Container title={"Amenities Management"}>
          <AmenitiesManagement amenities={{}} certification={{}} />
        </Container>
      </div>
    </>
  )
}

export default HotelProfile;
    