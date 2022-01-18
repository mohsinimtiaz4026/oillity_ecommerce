import React from "react";
import { Card, Row, Col, Menu, Dropdown, Divider } from "antd";
import logo from "../../assets/images/logo_dark.png";
import "./style.css";

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
                <Row>
                    <Col>
                        <Menu>
                           
                        </Menu>
                    </Col>
                </Row>
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
                                <img src={logo} alt="logo" style={{ marginLeft: '5px', marginTop: '10px' }} />
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
                                        <li><a href="#">Products <i className="bi bi-chevron-down"></i></a></li>
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