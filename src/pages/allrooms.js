import React from 'react'

export default function AllRooms() {
  return (
    <>
        <header>
            <p>KK Residency</p>
            <h1 style={{display: 'none'}}>All rooms</h1>
            <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#rooms">Rooms</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact us</a></li>
            </ul>
            <a href="/index.html">Sign in</a>
            </nav>
        </header>
        <main>
            <article>
                <figure>
                    {/* place the image here */}
                </figure>
                <div>
                    <p>★ 4.9 (254)</p>
                    <h2>Luxury Plus</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, aliquid autem! Itaque cupiditate eligendi officia possimus. Earum accusamus quaerat, sint laborum laudantium soluta commodi aliquid cupiditate aspernatur rem fugiat provident.</p>
                </div>
                <p><span>Rs. 500</span><br />per day</p>
                <div>
                    <ul>
                    <li>2 Bed</li>
                    <li>Att. Bathroom</li>
                    <li>4 guests</li>
                    </ul>
                    <button>Learn more</button>
                    <button>Book now</button>
                </div>
            </article> 
            <article>
                <figure>
                    {/* place the image here */}
                </figure>
                <div>
                    <p>★ 4.9 (254)</p>
                    <h2>Luxury</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, aliquid autem! Itaque cupiditate eligendi officia possimus. Earum accusamus quaerat, sint laborum laudantium soluta commodi aliquid cupiditate aspernatur rem fugiat provident.</p>
                </div>
                <p><span>Rs. 300</span><br />per day</p>
                <div>
                    <ul>
                    <li>2 Bed</li>
                    <li>Att. Bathroom</li>
                    <li>4 guests</li>
                    </ul>
                    <button>Learn more</button>
                    <button>Book now</button>
                </div>
            </article>
            <article>
                <figure>
                    {/* place the image here */}
                </figure>
                <div>
                    <p>★ 4.9 (254)</p>
                    <h2>Semi Luxury</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, aliquid autem! Itaque cupiditate eligendi officia possimus. Earum accusamus quaerat, sint laborum laudantium soluta commodi aliquid cupiditate aspernatur rem fugiat provident.</p>
                </div>
                <p><span>Rs. 200</span><br />per day</p>
                <div>
                    <ul>
                    <li>2 Bed</li>
                    <li>Att. Bathroom</li>
                    <li>4 guests</li>
                    </ul>
                    <button>Learn more</button>
                    <button>Book now</button>
                </div>
            </article> 
        </main>

    </>
  )
}
