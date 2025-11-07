import { Drawer } from "flowbite-react";
import DrawerTitleComponent from "../components/Drawer/DrawerTitleComponent";
import TabComponent from "../components/BasicComponent/TabComponent";
import { TabList } from "./HotelTabs/TabList";

const HotelManagementDrawer = ({ isOpen, setIsOpen }) => {
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="w-7/12 bg-white!"
      >
        <DrawerTitleComponent
          title={"Hotel Profile - Hotel Taj Palace"}
          subTitle={"Complete hotel information and activity"}
        />
        <TabComponent tabSection={TabList} />
      </Drawer>
    </>
  );
};

export default HotelManagementDrawer