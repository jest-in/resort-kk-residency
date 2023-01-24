import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import StarRating from '../../components/star-rating';

import thumb1 from '../../Assets/Images/Room Category 1.jpg';

export default function Dashboard() {
    return (
        <div className="user-dashboard-container">
            <Header />
            <main className="user-dash-main">
                <section className="user-active-orders-sec">
                    <h2 className="user-activeorder-header">Active orders</h2>
                    <div className="user-active-orders-sec-wrap">
                        <article className="user-dashboard-card-div">
                            <figure className="userdash-active-img-container">
                                <img
                                    src={thumb1}
                                    alt="room category"
                                    className="user-dashboard-card-img"
                                />
                            </figure>
                            <h3 className="userdash-cat-name">Luxury Plus</h3>
                            <ul className="userdash-cat-spec-div">
                                <li className="userdash-cat-spec-list">
                                    <span className="userdash-cat-spec-div-span-head">
                                        2
                                    </span>
                                    <span className="userdash-cat-spec-div-span">
                                        Bed
                                    </span>
                                </li>
                                <hr className="user-calander-hr userdash-card-hr" />
                                <li className="userdash-cat-spec-list">
                                    <span className="userdash-cat-spec-div-span-head">
                                        2
                                    </span>
                                    <span className="userdash-cat-spec-div-span">
                                        Guests
                                    </span>
                                </li>
                                <hr className="user-calander-hr userdash-card-hr" />
                                <li className="userdash-cat-spec-list">
                                    <span className="userdash-cat-spec-div-span-head">
                                        Bath
                                    </span>
                                    <span className="userdash-cat-spec-div-span">
                                        Attached
                                    </span>
                                </li>
                            </ul>
                            <StarRating />
                            <div className="userdash-cancel-order-btn-div">
                                <button className="userdash-cancel-order-btn">
                                    Cancel
                                </button>
                            </div>
                        </article>
                    </div>
                </section>
                <hr className="user-calander-hr" />

                <section className="user-active-orders-sec">
                    <h2 className="user-activeorder-header">Previous orders</h2>
                    <div className="user-active-orders-sec-wrap">
                        <article className="user-dashboard-card-div">
                            <figure className="userdash-active-img-container">
                                <img
                                    src={thumb1}
                                    alt="room category"
                                    className="user-dashboard-card-img"
                                />
                            </figure>
                            <h3 className="userdash-cat-name">Luxury Plus</h3>
                            <ul className="userdash-cat-spec-div">
                                <li className="userdash-cat-spec-list">
                                    <span className="userdash-cat-spec-div-span-head">
                                        2
                                    </span>
                                    <span className="userdash-cat-spec-div-span">
                                        Bed
                                    </span>
                                </li>
                                <hr className="user-calander-hr userdash-card-hr" />
                                <li className="userdash-cat-spec-list">
                                    <span className="userdash-cat-spec-div-span-head">
                                        2
                                    </span>
                                    <span className="userdash-cat-spec-div-span">
                                        Guests
                                    </span>
                                </li>
                                <hr className="user-calander-hr userdash-card-hr" />
                                <li className="userdash-cat-spec-list">
                                    <span className="userdash-cat-spec-div-span-head">
                                        Bath
                                    </span>
                                    <span className="userdash-cat-spec-div-span">
                                        Attached
                                    </span>
                                </li>
                            </ul>
                            <StarRating />
                            <div className="userdash-cancel-order-btn-div">
                                <button className="userdash-cancel-order-btn userdash-rateexp-btn">
                                    Rate your experience
                                </button>
                            </div>
                        </article>

                        <article className="user-dashboard-card-div">
                            <figure className="userdash-active-img-container">
                                <img
                                    src={thumb1}
                                    alt="room category"
                                    className="user-dashboard-card-img"
                                />
                            </figure>
                            <h3 className="userdash-cat-name">Luxury Plus</h3>
                            <ul className="userdash-cat-spec-div">
                                <li className="userdash-cat-spec-list">
                                    <span className="userdash-cat-spec-div-span-head">
                                        2
                                    </span>
                                    <span className="userdash-cat-spec-div-span">
                                        Bed
                                    </span>
                                </li>
                                <hr className="user-calander-hr userdash-card-hr" />
                                <li className="userdash-cat-spec-list">
                                    <span className="userdash-cat-spec-div-span-head">
                                        2
                                    </span>
                                    <span className="userdash-cat-spec-div-span">
                                        Guests
                                    </span>
                                </li>
                                <hr className="user-calander-hr userdash-card-hr" />
                                <li className="userdash-cat-spec-list">
                                    <span className="userdash-cat-spec-div-span-head">
                                        Bath
                                    </span>
                                    <span className="userdash-cat-spec-div-span">
                                        Attached
                                    </span>
                                </li>
                            </ul>
                            <StarRating />
                            <div className="userdash-cancel-order-btn-div">
                                <button className="userdash-cancel-order-btn userdash-rateexp-btn">
                                    Rate your experience
                                </button>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
