import React from 'react'
import { Button, Menu, Typography, Avatar } from "antd";
// import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutLined, MenuOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom';

import icon from "/img/cryptocurrency.png"

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to ="/">Cryptoverse</Link>
            </Typography.Title>
        </div>
    </div>
  )
}

export default Navbar