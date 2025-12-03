import { Drawer } from "flowbite-react";
import DrawerTitleComponent from "../components/Drawer/DrawerTitleComponent";
import TabComponent from "../components/BasicComponent/TabComponent";
import { TabList } from "./HotelTabs/TabList";
import { useQuery } from "@tanstack/react-query";
import { fetchPropertyById } from "../services/properties";
import Loader from "../components/BasicComponent/Loader";
import { createContext, useContext } from "react";

// Create context for property data
const PropertyContext = createContext(null);

export const useProperty = () => {
  const context = useContext(PropertyContext);
  return context;
};

const HotelManagementDrawer = ({ isOpen, setIsOpen, propertyId }) => {
  const handleClose = () => setIsOpen(false);

  // Fetch property details when drawer is open and propertyId is available
  const { data: propertyData, isLoading, error } = useQuery({
    queryKey: ["property", propertyId],
    queryFn: () => fetchPropertyById(propertyId),
    enabled: !!propertyId && isOpen, // Only fetch when drawer is open and propertyId exists
  });

  const property = propertyData?.success ? propertyData.data?.property : null;
  const propertyRooms = propertyData?.success ? propertyData.data?.propertyRoom : [];

  // Get property name for title
  const propertyName = property?.basicPropertyDetails?.name || "Loading...";

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="w-7/12 bg-white!"
      >
        <DrawerTitleComponent
          title={`Hotel Profile - ${propertyName}`}
          subTitle={"Complete hotel information and activity"}
        />
        {isLoading && propertyId ? (
          <div className="flex items-center justify-center p-8">
            <Loader />
          </div>
        ) : error ? (
          <div className="p-5 text-red-600">
            Error loading property: {error.message}
          </div>
        ) : property ? (
          <PropertyContext.Provider value={{ property, propertyRooms }}>
            <TabComponent tabSection={TabList} />
          </PropertyContext.Provider>
        ) : (
          <div className="p-5 text-gray-500">
            Please select a property to view details
          </div>
        )}
      </Drawer>
    </>
  );
};

export default HotelManagementDrawer