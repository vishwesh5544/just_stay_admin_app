import GuestInformation from "./GuestsInformation"

const GuestManagementDrawer = ({isOpen, setIsOpen}) => {
  return(
    <>
      <GuestInformation isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default GuestManagementDrawer