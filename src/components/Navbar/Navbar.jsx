import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/practiceLogo.png';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Item } = Menu;

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(()=>{
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return ()=>window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(()=> {
        if (screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    return ( 
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Title>
                <Button className="menu-control-container" onClick={()=> setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu style={{backgroundColor: 'inherit'}}>
                    <Item icon={<HomeOutlined />} className="nav-containerMenuItem">
                        <Link to="/" style={{color: 'white'}}>Home</Link>
                    </Item>
                    <Item icon={<FundOutlined />} className="nav-containerMenuItem">
                        <Link to="/cryptocurrencies" style={{color: 'white'}}>Cryptocurrencies</Link>
                    </Item>
                    <Item icon={<MoneyCollectOutlined />} className="nav-containerMenuItem">
                        <Link to="/exchanges" style={{color: 'white'}}>Exchanges</Link>
                    </Item>
                    <Item icon={<BulbOutlined />} className="nav-containerMenuItem">
                        <Link to="/news" style={{color: 'white'}}>News</Link>
                    </Item>
                </Menu>
            )}
        </div>
     );
}
 
export default Navbar;