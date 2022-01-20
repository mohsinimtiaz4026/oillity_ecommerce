import React from "react";
import { Card, Row, Col, Menu, Dropdown } from "antd";
import logo from "../../assets/images/logo_dark.png";
import banner from "../../assets/images/shop_banner.jpg";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const { SubMenu } = Menu;

    const HomePageMenu = () => {
        return (
            <Menu style={{ width: '200px', fontFamily: 'Poppins', textTransform: 'capitalize' }}>
                <Menu.Item className="hoverEffects">
                    Fashion Home One
                </Menu.Item>
                <Menu.Item className="hoverEffects">
                    Fashion Home Two
                </Menu.Item>
                <Menu.Item className="hoverEffects">
                    Fashion Home Three
                </Menu.Item>
                <Menu.Item className="hoverEffects">
                    Fashion Home Four
                </Menu.Item>
            </Menu>
        );
    }

    const ShopMenu = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col d-flex">
                        <Menu style={{ fontFamily: 'Poppins', width: '285px', textTransform: 'capitalize' }}>
                            <h2 id="menu_topic1">Shop Menu Layout</h2>
                            <Menu.Item className="hoverEffects">
                                Fashion Home One
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Fashion Home Two
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Fashion Home Three
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Fashion Home Four
                            </Menu.Item>
                        </Menu>
                        <Menu style={{ fontFamily: 'Poppins', width: '285px', textTransform: 'capitalize' }}>
                            <h2 id="menu_topic1">Other Pages</h2>
                            <Menu.Item className="hoverEffects">
                                Cart
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Checkout
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                MyAccount
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Order Completed
                            </Menu.Item>
                        </Menu>
                        <Menu style={{ fontFamily: 'Poppins', width: '285px', textTransform: 'capitalize' }}>
                            <h2 id="menu_topic1">Product Pages</h2>
                            <Menu.Item className="hoverEffects">
                                Default
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Left Sidebar
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Right Sidebar
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Thumb Left
                            </Menu.Item>
                        </Menu>
                        <Menu style={{ fontFamily: 'Poppins', width: '285px', textTransform: 'capitalize' }}>
                            <div className="shop_now">
                                <img src={banner} alt="banner" />
                                <div className="shop_info">
                                    <p>New Collection</p>
                                    <h4>Sale 30% Off</h4>
                                    <a href="#" className="shopBtn">Shop Now</a>
                                </div>
                            </div>
                        </Menu>
                    </div>
                </div>
            </div>
        );
    }
    const ProductMenu = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col d-flex">
                        <Menu style={{ fontFamily: 'Poppins', width: '285px', textTransform: 'capitalize' }}>
                            <h2 id="menu_topic1">Shop Menu Layout</h2>
                            <Menu.Item className="hoverEffects">
                                Fashion Home One
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Fashion Home Two
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Fashion Home Three
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Fashion Home Four
                            </Menu.Item>
                        </Menu>
                        <Menu style={{ fontFamily: 'Poppins', width: '285px', textTransform: 'capitalize' }}>
                            <h2 id="menu_topic1">Other Pages</h2>
                            <Menu.Item className="hoverEffects">
                                Cart
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Checkout
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                MyAccount
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Order Completed
                            </Menu.Item>
                        </Menu>
                        <Menu style={{ fontFamily: 'Poppins', width: '285px', textTransform: 'capitalize' }}>
                            <h2 id="menu_topic1">Product Pages</h2>
                            <Menu.Item className="hoverEffects">
                                Default
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Left Sidebar
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Right Sidebar
                            </Menu.Item>
                            <Menu.Item className="hoverEffects">
                                Thumb Left
                            </Menu.Item>
                        </Menu>
                        <Menu style={{ fontFamily: 'Poppins', width: '285px', textTransform: 'capitalize' }}>
                            <div className="shop_now">
                                <img src={banner} alt="banner" />
                                <div className="shop_info">
                                    <p>New Collection</p>
                                    <h4>Sale 30% Off</h4>
                                    <a href="#" className="shopBtn">Shop Now</a>
                                </div>
                            </div>
                        </Menu>
                    </div>
                </div>
            </div>
        );
    }

    const PagesMenu = () => {
        return (
            <Menu style={{ width: '200px', fontFamily: 'Poppins', textTransform: 'capitalize' }}>
                <Menu.Item className="hoverEffects">
                    About Us
                </Menu.Item>
                <Menu.Item className="hoverEffects">
                    Contact Us
                </Menu.Item>
                <Menu.Item className="hoverEffects">
                    F.A.Q
                </Menu.Item>
                <Menu.Item className="hoverEffects">
                    Login
                </Menu.Item>
                <Menu.Item className="hoverEffects">
                    Register
                </Menu.Item>
                <Menu.Item className="hoverEffects">
                    Term & Conditions
                </Menu.Item>
            </Menu>
        );
    }
    const BlogMenu = () => {
        return (
            <Menu style={{ width: '200px', fontFamily: 'Poppins', textTransform: 'capitalize' }}>
                <SubMenu title="Grid" className="hoverEffects">
                    <Menu.Item className="hoverEffects">Three Columns</Menu.Item>
                    <Menu.Item className="hoverEffects">Four Columns</Menu.Item>
                    <Menu.Item className="hoverEffects">Left Sidebar</Menu.Item>
                    <Menu.Item className="hoverEffects">Right Sidebar</Menu.Item>
                    <Menu.Item className="hoverEffects">Right Sidebar</Menu.Item>
                    <Menu.Item className="hoverEffects">Standard Left Sidebar</Menu.Item>
                    <Menu.Item className="hoverEffects">Standard Right Sidebar</Menu.Item>
                </SubMenu>
                <SubMenu title="Lists" className="hoverEffects">
                    <Menu.Item className="hoverEffects">Left Sidebar</Menu.Item>
                    <Menu.Item className="hoverEffects">Right Sidebar</Menu.Item>
                </SubMenu>
                <SubMenu title="Single Posts" className="hoverEffects">
                    <Menu.Item className="hoverEffects">Left Sidebar</Menu.Item>
                    <Menu.Item className="hoverEffects">Right Sidebar</Menu.Item>
                    <Menu.Item className="hoverEffects">Slider Post</Menu.Item>
                    <Menu.Item className="hoverEffects">Audio Post</Menu.Item>
                    <Menu.Item className="hoverEffects">Video Post</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }

    return (
        <>
            <header className="main_navbar">
                <Card size="small" style={{ borderBottom: '0' }}>
                    <div className="container">
                        <Row>
                            <Col span={8}>
                                <NavLink to="/">
                                    <img src={logo} alt="logo" style={{ marginLeft: '5px', marginTop: '10px' }} />
                                </NavLink>
                            </Col>
                            <Col span={16}>
                                <div className="right_navbar">
                                    <ul>
                                        <Dropdown overlay={HomePageMenu}>
                                            <li>
                                                <a href="#">Home <i className="bi bi-chevron-down"></i></a>
                                            </li>
                                        </Dropdown>
                                        <Dropdown overlay={ShopMenu} placement="bottomCenter">
                                            <li>
                                                <a href="#">Shop <i className="bi bi-chevron-down"></i></a>
                                            </li>
                                        </Dropdown>
                                        <Dropdown overlay={ProductMenu} placement="bottomCenter">
                                            <li>
                                                <a href="#">Products <i className="bi bi-chevron-down"></i></a>
                                            </li>
                                        </Dropdown>
                                        <Dropdown overlay={PagesMenu}>
                                            <li>
                                                <a href="#">Pages <i className="bi bi-chevron-down"></i></a>
                                            </li>
                                        </Dropdown>
                                        <Dropdown overlay={BlogMenu} placement="bottomRight">
                                            <li>
                                                <a href="#">Blog <i className="bi bi-chevron-down"></i></a>
                                            </li>
                                        </Dropdown>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#"><i className="bi bi-search"></i></a></li>
                                        <li><a href="#"><i className="bi bi-cart"></i></a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </header>
        </>
    );
}

export default Navbar;