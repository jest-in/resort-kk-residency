import React from 'react';
import Header from '../components/header';

import Footer from '../components/footer';
import cat1 from '../Assets/Images/Room Category 1.jpg';
import cat2 from '../Assets/Images/Room Category 2.png';
import cat3 from '../Assets/Images/Room Category 3.png';

export default function AllRooms() {
    return (
        <div className="container">
            <Header />
            <main className="user-allroom-main">
                <article className="room-category">
                    <figure className="room-img-div">
                        <img src={cat1} alt="room category" />
                    </figure>
                    <div className="room-details-div">
                        <div className="room-rating">
                            <p className="room-rating">
                                <span className="rating-star">★</span>{' '}
                                <span className="rating-point">4.9</span>{' '}
                                <span className="rating-user-count">(254)</span>
                            </p>
                        </div>
                        <div className="room-category-name">
                            <h2>Luxury Plus</h2>
                        </div>
                        <div className="reeom-cat-des">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolorem, aliquid autem! Itaque
                                cupiditate eligendi officia possimus. Earum
                                accusamus quaerat, sint laborum laudantium
                                soluta commodi aliquid cupiditate aspernatur rem
                                fugiat provident.
                            </p>
                        </div>
                        <div className="room-features-div">
                            <div className="room-features">
                                <ul>
                                    <li>2 Bed</li>
                                    <li>Att. Bathroom</li>
                                    <li>4 guests</li>
                                </ul>
                            </div>
                            <div className="learn-more-btn-div">
                                <button className="learn-more-btn">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="room-price-div">
                        <p className="room-price">Rs. 500</p>
                        <p className="room-price-desc">per day</p>
                        <button className="book-now-btn">Book now</button>
                    </div>
                </article>
                <hr className="room-cat-border" />

                <article className="room-category">
                    <figure className="room-img-div">
                        <img src={cat2} alt="room category" />
                    </figure>
                    <div className="room-details-div">
                        <div className="room-rating">
                            <p className="room-rating">
                                <span className="rating-star">★</span>{' '}
                                <span className="rating-point">4.7</span>{' '}
                                <span className="rating-user-count">(500)</span>
                            </p>
                        </div>
                        <div className="room-category-name">
                            <h2>Luxury</h2>
                        </div>
                        <div className="reeom-cat-des">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolorem, aliquid autem! Itaque
                                cupiditate eligendi officia possimus. Earum
                                accusamus quaerat, sint laborum laudantium
                                soluta commodi aliquid cupiditate aspernatur rem
                                fugiat provident.
                            </p>
                        </div>
                        <div className="room-features-div">
                            <div className="room-features">
                                <ul>
                                    <li>2 Bed</li>
                                    <li>Att. Bathroom</li>
                                    <li>4 guests</li>
                                </ul>
                            </div>
                            <div className="learn-more-btn-div">
                                <button className="learn-more-btn">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="room-price-div">
                        <p className="room-price">Rs. 300</p>
                        <p className="room-price-desc">per day</p>
                        <button className="book-now-btn">Book now</button>
                    </div>
                </article>
                <hr className="room-cat-border" />

                <article className="room-category">
                    <figure className="room-img-div">
                        <img src={cat3} alt="room category" />
                    </figure>
                    <div className="room-details-div">
                        <div className="room-rating">
                            <p className="room-rating">
                                <span className="rating-star">★</span>{' '}
                                <span className="rating-point">4.8</span>{' '}
                                <span className="rating-user-count">(325)</span>
                            </p>
                        </div>
                        <div className="room-category-name">
                            <h2>Semi Luxury</h2>
                        </div>
                        <div className="reeom-cat-des">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolorem, aliquid autem! Itaque
                                cupiditate eligendi officia possimus. Earum
                                accusamus quaerat, sint laborum laudantium
                                soluta commodi aliquid cupiditate aspernatur rem
                                fugiat provident.
                            </p>
                        </div>
                        <div className="room-features-div">
                            <div className="room-features">
                                <ul>
                                    <li>2 Bed</li>
                                    <li>Att. Bathroom</li>
                                    <li>4 guests</li>
                                </ul>
                            </div>
                            <div className="learn-more-btn-div">
                                <button className="learn-more-btn">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="room-price-div">
                        <p className="room-price">Rs. 200</p>
                        <p className="room-price-desc">per day</p>
                        <button className="book-now-btn">Book now</button>
                    </div>
                </article>
                <hr className="room-cat-border" />

                <article className="room-category">
                    <figure className="room-img-div">
                        <img src={cat1} alt="room category" />
                    </figure>
                    <div className="room-details-div">
                        <div className="room-rating">
                            <p className="room-rating">
                                <span className="rating-star">★</span>{' '}
                                <span className="rating-point">4.9</span>{' '}
                                <span className="rating-user-count">(254)</span>
                            </p>
                        </div>
                        <div className="room-category-name">
                            <h2>Luxury Plus</h2>
                        </div>
                        <div className="reeom-cat-des">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolorem, aliquid autem! Itaque
                                cupiditate eligendi officia possimus. Earum
                                accusamus quaerat, sint laborum laudantium
                                soluta commodi aliquid cupiditate aspernatur rem
                                fugiat provident.
                            </p>
                        </div>
                        <div className="room-features-div">
                            <div className="room-features">
                                <ul>
                                    <li>2 Bed</li>
                                    <li>Att. Bathroom</li>
                                    <li>4 guests</li>
                                </ul>
                            </div>
                            <div className="learn-more-btn-div">
                                <button className="learn-more-btn">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="room-price-div">
                        <p className="room-price">Rs. 500</p>
                        <p className="room-price-desc">per day</p>
                        <button className="book-now-btn">Book now</button>
                    </div>
                </article>
                <hr className="room-cat-border" />

                <article className="room-category">
                    <figure className="room-img-div">
                        <img src={cat2} alt="room category" />
                    </figure>
                    <div className="room-details-div">
                        <div className="room-rating">
                            <p className="room-rating">
                                <span className="rating-star">★</span>{' '}
                                <span className="rating-point">4.7</span>{' '}
                                <span className="rating-user-count">(500)</span>
                            </p>
                        </div>
                        <div className="room-category-name">
                            <h2>Luxury</h2>
                        </div>
                        <div className="reeom-cat-des">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolorem, aliquid autem! Itaque
                                cupiditate eligendi officia possimus. Earum
                                accusamus quaerat, sint laborum laudantium
                                soluta commodi aliquid cupiditate aspernatur rem
                                fugiat provident.
                            </p>
                        </div>
                        <div className="room-features-div">
                            <div className="room-features">
                                <ul>
                                    <li>2 Bed</li>
                                    <li>Att. Bathroom</li>
                                    <li>4 guests</li>
                                </ul>
                            </div>
                            <div className="learn-more-btn-div">
                                <button className="learn-more-btn">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="room-price-div">
                        <p className="room-price">Rs. 300</p>
                        <p className="room-price-desc">per day</p>
                        <button className="book-now-btn">Book now</button>
                    </div>
                </article>
                <hr className="room-cat-border" />

                <article className="room-category">
                    <figure className="room-img-div">
                        <img src={cat3} alt="room category" />
                    </figure>
                    <div className="room-details-div">
                        <div className="room-rating">
                            <p className="room-rating">
                                <span className="rating-star">★</span>{' '}
                                <span className="rating-point">4.8</span>{' '}
                                <span className="rating-user-count">(325)</span>
                            </p>
                        </div>
                        <div className="room-category-name">
                            <h2>Semi Luxury</h2>
                        </div>
                        <div className="reeom-cat-des">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Dolorem, aliquid autem! Itaque
                                cupiditate eligendi officia possimus. Earum
                                accusamus quaerat, sint laborum laudantium
                                soluta commodi aliquid cupiditate aspernatur rem
                                fugiat provident.
                            </p>
                        </div>
                        <div className="room-features-div">
                            <div className="room-features">
                                <ul>
                                    <li>2 Bed</li>
                                    <li>Att. Bathroom</li>
                                    <li>4 guests</li>
                                </ul>
                            </div>
                            <div className="learn-more-btn-div">
                                <button className="learn-more-btn">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="room-price-div">
                        <p className="room-price">Rs. 200</p>
                        <p className="room-price-desc">per day</p>
                        <button className="book-now-btn">Book now</button>
                    </div>
                </article>
                <hr className="room-cat-border" />
                <Footer />
            </main>
        </div>
    );
}
