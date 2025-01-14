import React from 'react';

interface propsType {
  icon: React.ReactNode;
  title: string;
  desc: string | React.ReactNode; // Allow JSX
}


const FeatureCard = ({ icon, title, desc }: propsType) => {
  const isLink =
    typeof desc === 'string' &&
    (desc.startsWith('http') || desc.includes('@') || desc.includes('.com'));

  return (
    <div className="flex gap-4 bg-gray-100 px-4 py-6 rounded-md shadow-sm">
      <div className="text-yellow-600">{icon}</div>
      <div>
        <h2 className="font-medium text-xl">{title}</h2>
        {isLink ? (
          <a
            href={
              desc.startsWith('@')
                ? `https://www.instagram.com/${desc.replace('@', '')}`
                : desc
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {desc}
          </a>
        ) : (
          // Replace <p> with <div> to prevent invalid nesting
          <div className="text-gray-600">{desc}</div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;