import React from 'react'
import './CommonSection.css'

export default function CommonSection({title}) {
  return (
    <section className="common-section">
      <div className="container">
        <h1 className='text-center'>{title}</h1>
      </div>
    </section>
  );
}
