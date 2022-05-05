import React from 'react'
import { SideBarContainer, Icon, CloseIcon,
    SidebarWrapper, SidebarLink, SidebarMenu,
    SideBtnWrap, SidebarRoute, 
    SidebarRouteIn} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to = "about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to = "search" onClick={toggle}>
                    Find Doctors
                </SidebarLink>
                <SidebarLink to = "vconsult" onClick={toggle}>
                    Video Consult
                </SidebarLink>
                <SidebarLink to = "medicines" onClick={toggle}>
                    Medicines
                </SidebarLink>
                <SidebarLink to = "labtests" onClick={toggle}>
                    Lab Tests
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to = "/signup">
                    Sign Up
                </SidebarRoute>
                <SidebarRouteIn to = "/signin">
                    Sign In
                </SidebarRouteIn>
            </SideBtnWrap>
        </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;