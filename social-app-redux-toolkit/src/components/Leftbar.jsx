import React from 'react'
import styled from 'styled-components';
import {
    ExitToAppOutlined,
    FileCopyOutlined,
    GroupOutlined,
    HearingOutlined,
    HomeOutlined,
    List,
    MovieCreationOutlined,
    PhotoSizeSelectActualOutlined,
    ScheduleOutlined,
    Settings,
    ShoppingBasketOutlined,
  } from "@mui/icons-material";

const LeftbarCon = styled.div`
    
`

const MenuLink = styled.div`
    
`

const LeftWrapper = styled.div`
    height: 100vh;
`
const Leftbar = () => {
  return (
    <LeftbarCon>
      <LeftWrapper>
        <MenuLink icon={<HomeOutlined />} text="Homepage">Hi</MenuLink>
        <MenuLink icon={<List />} text="Lists" />
        <MenuLink icon={<ShoppingBasketOutlined />} text="Products" />
        <MenuLink icon={<GroupOutlined />} text="Groups" />
        <MenuLink icon={<FileCopyOutlined />} text="Pages" />
        <MenuLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
        <MenuLink icon={<MovieCreationOutlined />} text="Videos" />
        <MenuLink icon={<ScheduleOutlined />} text="Schedule" />
        <MenuLink icon={<HearingOutlined />} text="Wishlist" />
        <MenuLink icon={<Settings />} text="Settings" />
        <MenuLink icon={<ExitToAppOutlined />} text="Logout" />
      </LeftWrapper>
    </LeftbarCon>
  )
}

export default Leftbar