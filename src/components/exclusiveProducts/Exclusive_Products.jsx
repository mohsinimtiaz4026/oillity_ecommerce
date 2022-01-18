import React from 'react';
import { Row, Col, Card, Rate } from 'antd';
import Pic1 from '../../assets/images/1.jpg';
import Pic2 from '../../assets/images/2.jpg';
import Pic3 from '../../assets/images/3.jpg';
import Pic5 from '../../assets/images/5.jpg';
import Pic7 from '../../assets/images/7.jpg';
import Pic8 from '../../assets/images/8.jpg';
import Pic9 from '../../assets/images/9.jpg';
import Pic10 from '../../assets/images/10.jpg';
import Pic11 from '../../assets/images/11.jpg';
import './style.css';
import ProductCard from './subComponent/ProductCard';

const Exclusive_Products = () => {
    return (
        <>
            <section className='exclusive_products'>
                <div className='container'>
                    <Row>
                        <Col span={24}>
                            <h2 className='heading text-center pb-4'>Exclusive Products</h2>
                        </Col>
                    </Row>
                    <div className='row text-center'>
                        <div className='col'>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="arrival-tab" data-bs-toggle="tab" data-bs-target="#arrival" type="button" role="tab" aria-controls="arrival" aria-selected="true">New Arrival</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="sellers-tab" data-bs-toggle="tab" data-bs-target="#sellers" type="button" role="tab" aria-controls="sellers" aria-selected="false">Best Sellers</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="featured-tab" data-bs-toggle="tab" data-bs-target="#featured" type="button" role="tab" aria-controls="featured" aria-selected="false">Featured</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="option-tab" data-bs-toggle="tab" data-bs-target="#option" type="button" role="tab" aria-controls="option" aria-selected="false">Special Option</button>
                                </li>
                            </ul>
                            <div className="tab-content pt-4" id="myTabContent">
                                <div className="tab-pane fade show active" id="arrival" role="tabpanel" aria-labelledby="arrival-tab">
                                    <div className='row'>
                                        <ProductCard
                                            img={Pic1}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion one"
                                            price="$15.30"
                                            strike="$17.00"
                                            discount="10% Off"
                                            value={4}
                                            rating="(5)"
                                        />
                                        <ProductCard
                                            img={Pic2}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion two"
                                            price="$16.02"
                                            strike="$18.00"
                                            discount="11% Off"
                                            value={3}
                                            rating="(6)"
                                        />
                                        <ProductCard
                                            img={Pic3}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion three"
                                            price="$16.72"
                                            strike="$19.00"
                                            discount="12% Off"
                                            value={5}
                                            rating="(7)"
                                        />
                                        <ProductCard
                                            img={Pic5}
                                            LabelNew="New"
                                            LabelHot=""
                                            LabelSale=""
                                            cardTitle="Lorem ipsum fashion four"
                                            price="$21.00"
                                            strike=""
                                            discount=""
                                            value={3}
                                            rating="(9)"
                                        />
                                    </div>
                                    <div className='row mt-5'>
                                        <ProductCard
                                            img={Pic7}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale=""
                                            cardTitle="Lorem ipsum fashion five"
                                            price="$23.00"
                                            strike=""
                                            discount=""
                                            value={4}
                                            rating="(11)"
                                        />
                                        <ProductCard
                                            img={Pic8}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion six"
                                            price="$19.92"
                                            strike="$24.00"
                                            discount="17% Off"
                                            value={5}
                                            rating="(12)"
                                        />
                                        <ProductCard
                                            img={Pic9}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion seven"
                                            price="$20.05"
                                            strike="$25.00"
                                            discount="18% Off"
                                            value={4}
                                            rating="(13)"
                                        />
                                        <ProductCard
                                            img={Pic10}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion four"
                                            price="$21.06"
                                            strike="$26.00"
                                            discount="19% Off"
                                            value={5}
                                            rating="(14)"
                                        />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="sellers" role="tabpanel" aria-labelledby="sellers-tab">
                                    <div className='row'>
                                        <ProductCard
                                            img={Pic7}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale=""
                                            cardTitle="Lorem ipsum fashion five"
                                            price="$23.00"
                                            strike=""
                                            discount=""
                                            value={4}
                                            rating="(11)"
                                        />
                                        <ProductCard
                                            img={Pic8}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion six"
                                            price="$19.92"
                                            strike="$24.00"
                                            discount="17% Off"
                                            value={5}
                                            rating="(12)"
                                        />
                                        <ProductCard
                                            img={Pic9}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion seven"
                                            price="$20.05"
                                            strike="$25.00"
                                            discount="18% Off"
                                            value={4}
                                            rating="(13)"
                                        />
                                        <ProductCard
                                            img={Pic10}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion four"
                                            price="$21.06"
                                            strike="$26.00"
                                            discount="19% Off"
                                            value={5}
                                            rating="(14)"
                                        />
                                    </div>
                                    <div className='row mt-5'>
                                        <ProductCard
                                            img={Pic1}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion one"
                                            price="$15.30"
                                            strike="$17.00"
                                            discount="10% Off"
                                            value={4}
                                            rating="(5)"
                                        />
                                        <ProductCard
                                            img={Pic2}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion two"
                                            price="$16.02"
                                            strike="$18.00"
                                            discount="11% Off"
                                            value={3}
                                            rating="(6)"
                                        />
                                        <ProductCard
                                            img={Pic3}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion three"
                                            price="$16.72"
                                            strike="$19.00"
                                            discount="12% Off"
                                            value={5}
                                            rating="(7)"
                                        />
                                        <ProductCard
                                            img={Pic5}
                                            LabelNew="New"
                                            LabelHot=""
                                            LabelSale=""
                                            cardTitle="Lorem ipsum fashion four"
                                            price="$21.00"
                                            strike=""
                                            discount=""
                                            value={3}
                                            rating="(9)"
                                        />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                                    <div className='row'>
                                        <ProductCard
                                            img={Pic1}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion one"
                                            price="$15.30"
                                            strike="$17.00"
                                            discount="10% Off"
                                            value={4}
                                            rating="(5)"
                                        />
                                        <ProductCard
                                            img={Pic2}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion two"
                                            price="$16.02"
                                            strike="$18.00"
                                            discount="11% Off"
                                            value={3}
                                            rating="(6)"
                                        />
                                        <ProductCard
                                            img={Pic3}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion three"
                                            price="$16.72"
                                            strike="$19.00"
                                            discount="12% Off"
                                            value={5}
                                            rating="(7)"
                                        />
                                        <ProductCard
                                            img={Pic5}
                                            LabelNew="New"
                                            LabelHot=""
                                            LabelSale=""
                                            cardTitle="Lorem ipsum fashion four"
                                            price="$21.00"
                                            strike=""
                                            discount=""
                                            value={3}
                                            rating="(9)"
                                        />
                                    </div>
                                    <div className='row mt-5'>
                                        <ProductCard
                                            img={Pic7}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale=""
                                            cardTitle="Lorem ipsum fashion five"
                                            price="$23.00"
                                            strike=""
                                            discount=""
                                            value={4}
                                            rating="(11)"
                                        />
                                        <ProductCard
                                            img={Pic8}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion six"
                                            price="$19.92"
                                            strike="$24.00"
                                            discount="17% Off"
                                            value={5}
                                            rating="(12)"
                                        />
                                        <ProductCard
                                            img={Pic9}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion seven"
                                            price="$20.05"
                                            strike="$25.00"
                                            discount="18% Off"
                                            value={4}
                                            rating="(13)"
                                        />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="option" role="tabpanel" aria-labelledby="option-tab">
                                    <div className='row'>
                                        <ProductCard
                                            img={Pic7}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale=""
                                            cardTitle="Lorem ipsum fashion five"
                                            price="$23.00"
                                            strike=""
                                            discount=""
                                            value={4}
                                            rating="(11)"
                                        />
                                        <ProductCard
                                            img={Pic8}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion six"
                                            price="$19.92"
                                            strike="$24.00"
                                            discount="17% Off"
                                            value={5}
                                            rating="(12)"
                                        />
                                        <ProductCard
                                            img={Pic9}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion seven"
                                            price="$20.05"
                                            strike="$25.00"
                                            discount="18% Off"
                                            value={4}
                                            rating="(13)"
                                        />
                                        <ProductCard
                                            img={Pic10}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion four"
                                            price="$21.06"
                                            strike="$26.00"
                                            discount="19% Off"
                                            value={5}
                                            rating="(14)"
                                        />
                                    </div>
                                    <div className='row mt-5'>
                                        <ProductCard
                                            img={Pic1}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion one"
                                            price="$15.30"
                                            strike="$17.00"
                                            discount="10% Off"
                                            value={4}
                                            rating="(5)"
                                        />
                                        <ProductCard
                                            img={Pic2}
                                            LabelNew="New"
                                            LabelHot="Hot"
                                            LabelSale="Sale"
                                            cardTitle="Lorem ipsum fashion two"
                                            price="$16.02"
                                            strike="$18.00"
                                            discount="11% Off"
                                            value={3}
                                            rating="(6)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Exclusive_Products;
