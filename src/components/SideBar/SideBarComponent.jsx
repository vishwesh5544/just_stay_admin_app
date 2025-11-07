import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { NavBarConfig } from "../../utils/NavBar";
import Logo from "../../assets/logo.svg";

const SideBarComponent = () => {
  return(
    <>
      <Sidebar aria-label="Sidebar"
        className="bg-white!
      [&>div]:bg-white!
      text-gray-900
      dark:bg-white!
      dark:text-gray-900
      [&_a]:text-gray-900!
      [&_a:hover]:bg-[#E9F7F8]!
      [&_a:hover]:border 
    [&_a:hover]:border-[#96F7E4]
      border-r border-gray-200 shadow-sm
      no-scrollbar
      ">
        <SidebarItems>
          <div className="w-[256px] px-7">
            <img className="w-[155px] pt-4" src={Logo} alt="logo"/>
            <p className="pt-1 pb-6 text-[#6A7282] text-[16px]">Admin Portal</p>
          </div>
        </SidebarItems>
        <SidebarItems>
        <SidebarItemGroup>
          {
            NavBarConfig.map((config) => (
              <SidebarItem key={config.title}
                className="text-[14px] font-medium leading-5 py-2.5 [&_span]:text-[#4A5565]"
                 icon={config.icon}
                 as={NavLink}
                 to={config.url}
                 >
                {config.title}
              </SidebarItem>              
            ))
          }
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </>
  )
}

export default SideBarComponent;