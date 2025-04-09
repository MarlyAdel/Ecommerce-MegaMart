import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className='not-found my-5 py-5 text-center'>
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className='mt-4 fw-medium'>404 - Page Not Found</h1>
      <p>Oops! It seems like the page you're looking for doesn't exist.</p>
      <p className='mb-4'>But don't worry, you can go back to the homepage or explore other parts of the website!</p>
      <Link className='text-decoration-none ' to={'/'}>Go to Homepage</Link>
            </div>
        </div>
      </div>
    </section>
  );
}
