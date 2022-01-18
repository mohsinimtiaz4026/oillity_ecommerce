import React from 'react';
import {Row,Col} from 'antd';
import  shop_banner_img1 from '../../assets/images/shop_banner_img1.jpg';
import  shop_banner_img2 from '../../assets/images/shop_banner_img2.jpg';
import './style.css';

const  SaleOption = () =>  {
    return (
        <section className='saleOption'>
            <div className="container">
                <Row gutter={32}>
                    <Col span={12}>
                        <div className='left_section'>
                            <img src={shop_banner_img1} alt='shop img' />
                            <div className='left_section_info'>
                                <h2>Super Sale</h2>
                                <p>New Collection</p>
                                <a href='#'>Shop Now</a>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='right_section'>
                            <img src={shop_banner_img2} alt='shop img'/>
                            <div className='right_section_info'>
                                <h2>New Season</h2>
                                <p>Sale 40% Off</p>
                                <a href='#'>Shop Now</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default SaleOption;
