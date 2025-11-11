import React from "react";
import { Sidebar, SidebarItems } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { NavBarConfig } from "../../utils/NavBar";
import Logo from "../../assets/logo.svg";

const SideBarComponent = () => {
  return (
    <Sidebar
      aria-label="Sidebar"
      className="bg-white [&>div]:bg-white text-gray-900 dark:bg-white dark:text-gray-900 border-r border-gray-200 shadow-sm no-scrollbar"
    >
      <SidebarItems>
        <div className="w-[256px] px-7">
          <img className="w-[155px] pt-4" src={Logo} alt="logo" />
          <p className="pt-1 pb-6 text-[#6A7282] text-[16px]">Admin Portal</p>
        </div>
      </SidebarItems>

      <SidebarItems>
        <div className="px-4 pb-6">
          <nav className="flex flex-col gap-1">
            {NavBarConfig.map((config) => {
              const Icon = config.icon;
              return (
                <NavLink
                  key={config.title}
                  to={config.url}
                  end={config.exact ?? true}
                  className={({ isActive }) =>
                    `flex items-center justify-between gap-3 px-3 py-2 rounded-lg transition-all duration-150 text-[14px] font-medium leading-5 ${
                      isActive
                        ? "bg-[#E9F7F8] border border-[#96F7E4] text-[#0f766e] font-semibold shadow-sm"
                        : "text-[#111827]"
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <Icon
                        className="w-5 h-5 text-current"
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-[#374151]">{config.title}</span>
                  </div>

                  {config.badge ? (
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                        config.badgeType === "danger"
                          ? "bg-red-100 text-red-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {config.badge}
                    </span>
                  ) : null}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </SidebarItems>
    </Sidebar>
  );
};

export default SideBarComponent;
