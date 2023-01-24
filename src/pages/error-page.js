import React from 'react';

import gif404 from '../Assets/Images/Gif404.gif';

export default function ErrorPage() {
    return (
        <section className="page404-container">
            <h1 className="page404-heading">Oops!</h1>
            <figure>
                <img src={gif404} alt="404Error" className="error404-gif" />
            </figure>
            <p className="page404-desctext">
                Looks like you took a wrong turn somewhere and ended up on a
                page that doesn't exist.
            </p>
            <p className="page404-desctext-details">
                Don't worry though, you're not lost, just a little bit late. We
                suggest you take a look around and see if anything catches your
                eye or you can contact us for help
            </p>
            <a href="/all-rooms" className="page404-goback-btn">
                Go back
            </a>
        </section>
    );
}
