import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary/100 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="flex justify-between"> */}
          <div className='justify-center'>
            <h2 className="text-2xl  justify-center font-bold">Discover Valorant Agent</h2>
            <p className="mt-2">Discover the diverse world of Valorant agents, each equipped with unique abilities and strategic roles essential for tactical gameplay. Uncover their skills, strengths, and backstories as you navigate through the dynamic universe of Riot Games' competitive shooter. Master their abilities, forge alliances, and dominate the battlefield in Valorant.</p>
          </div>
          <div className="flex items-center">
            <a href="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="/contact" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        {/* </div> */}
        <div className="mt-4 flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Valorant Roit Games. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="/" className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2C5.03 2 1 6.03 1 11c0 4.41 2.84 8.14 6.75 9.45.49.09.67-.21.67-.47 0-.23-.01-.89-.01-1.75-2.46.45-2.98-.59-3.17-1.13-.11-.28-.6-1.13-1.02-1.36-.34-.18-.82-.62-.01-.63.76-.01 1.3.7 1.48 1 .87 1.49 2.28 1.08 2.84.82.09-.63.34-1.07.62-1.31-2.17-.25-4.44-1.09-4.44-4.85 0-1.07.38-1.95 1-2.64-.1-.25-.43-1.25.09-2.6 0 0 .82-.26 2.7 1.01A9.32 9.32 0 0 1 10 5.77c.83.01 1.67.11 2.47.32 1.88-1.27 2.7-1.01 2.7-1.01.52 1.35.2 2.35.1 2.6.62.69 1 1.57 1 2.64 0 3.77-2.28 4.6-4.46 4.85.35.3.67.91.67 1.85 0 1.33-.01 2.41-.01 2.74 0 .26.18.57.68.47A10.02 10.02 0 0 0 19 11c0-4.97-4.03-9-9-9z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="/" className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-2.65 7.5a.5.5 0 0 1 .8-.4c.74.62 1.83.92 3.1.92s2.36-.3 3.1-.92a.5.5 0 1 1 .8.6A5.493 5.493 0 0 1 10 13a5.49 5.49 0 0 1-3.65-1.5zm-4.74 3.93a.5.5 0 0 1 .14-.7c1.28-.92 2.93-1.43 4.74-1.43s3.46.51 4.74 1.43a.5.5 0 1 1-.66.74c-1.18-.86-2.7-1.34-4.08-1.34-1.38 0-2.9.48-4.08 1.34a.5.5 0 0 1-.7-.14zM5.5 5.1a.5.5 0 0 1 .2-.67c1.06-.63 2.3-1 3.8-1s2.74.37 3.8 1a.5.5 0 1 1-.6.8c-1.24-.74-2.7-1.14-4.2-1.14-1.5 0-2.96.4-4.2 1.14a.5.5 0 0 1-.67-.2zm-.67 5.26a.5.5 0 0 1 .67-.22c1.16.66 2.56 1.02 4.2 1.02s3.04-.36 4.2-1.02a.5.5 0 0 1 .67.74c-1.1.63-2.4.98-3.87.98-1.47 0-2.77-.35-3.87-.98a.5.5 0 0 1-.22-.67z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="/" className="text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1.032 6.553l.702.711a.5.5 0 0 0 .71 0l.703-.71a.5.5 0 0 0-.002-.71l-1.415-1.42a.5.5 0 0 0-.706 0l-1.415 1.42a.5.5 0 0 0 0 .71zm3.029 4.144a2.5 2.5 0 1 0-3.565 0l-2.125 2.123a.5.5 0 0 0 .708.708l2.127-2.125a2.5 2.5 0 0 0 3.556 0l2.127 2.125a.5.5 0 0 0 .708-.708l-2.125-2.123z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
