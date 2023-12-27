import React from 'react';
import featuresData from '../data/featuresData.json';

const Feature = ({ category, title, description, likes, comments, image }) => (
  <div className="p-4 lg:w-1/3">
    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      {image && <img className="object-cover object-center mb-4 rounded" src={image} alt={title} />}

      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{title}</h1>
      <p className="leading-relaxed mb-3">{description}</p>
      <a href="#!" className="text-indigo-500 inline-flex items-center">
        Learn More
        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
     
    </div>
  </div>
);

const Features = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      {Array.from({ length: Math.ceil(featuresData.length / 3) }, (_, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap -m-4">
          {featuresData.slice(rowIndex * 3, rowIndex * 3 + 3).map((feature) => (
            <Feature
              key={feature.id}
              category={feature.category}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      ))}
    </div>
  </section>
);

export default Features;
