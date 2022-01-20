import React from "react";
import { Card, Row, Col } from "antd";
import {NavLink} from "react-router-dom";
import "./style.css";


const Sub_navbar = () => {
    return (
        <>
            <header className="sub_navbar">
                <Card size="small" style={{ borderBottom: '0' }}>
                    <div className="container">
                        <Row className="flex">
                            <Col span={12}>
                                <div className="left_seciton">
                                    <select>
                                        <option value='english'>English</option>
                                        <option value='france'>France</option>
                                        <option value='spain'>Spain</option>
                                    </select>
                                    <select>
                                        <option value='usd'>USD</option>
                                        <option value='eur'>EUR</option>
                                        <option value='gbr'>GBR</option>
                                    </select>
                                    <span style={{paddingLeft: '10px',userSelect: 'none'}}><i className="bi bi-phone" style={{paddingRight: '5px'}}></i>123-456-7890</span>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="right_section">
                                   <p><i className="bi bi-arrow-left-right"></i><NavLink to="#">Compare</NavLink></p> 
                                   <p><i className="bi bi-heart"></i><NavLink to="#">Wishlist</NavLink></p> 
                                   <p><i className="bi bi-person"></i><NavLink to="login">Login</NavLink></p> 
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </header>
        </>
    );
}

export default Sub_navbar;