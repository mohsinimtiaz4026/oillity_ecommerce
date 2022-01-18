import React from 'react';
import { Card,Rate } from 'antd';

const ProductCard = (props) => {
    return (
        <>
                <div className='col-3'>
                    <Card
                        id='card_effect'
                        cover={<img alt="Pic1" src={props.img} style={{ position: 'relative', height: '290px', width: '100%' }} />}
                    >
                        <div className='overlay'>
                            <div className='card_label'>
                                <a className='bg-warning'>{props.LabelNew}</a>
                                <a className='bg-danger'>{props.LabelHot}</a>
                                <a className='bg-success'>{props.LabelSale}</a>
                            </div>
                            <div className='card_menu'>
                                <ul>
                                    <li><a href='#'>
                                        <i class="bi bi-wrench"></i>
                                    </a></li>
                                    <li><a href='#'>
                                        <i class="bi bi-arrow-left-right"></i>
                                    </a></li>
                                    <li><a href='#'>
                                        <i class="bi bi-zoom-in"></i>
                                    </a></li>
                                    <li><a href='#'>
                                        <i class="bi bi-heart"></i>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='card_info'>
                            <h2>{props.cardTitle}</h2>
                            <p>{props.price}<strike>{props.strike}</strike><span>{props.discount}</span></p>
                            <h6><Rate disabled defaultValue={props.value} allowClear={false} style={{fontSize: '14px'}}/><span id="rating">{props.rating}</span></h6>
                        </div>
                    </Card>
                </div>
        </>
    );
}

export default ProductCard;
