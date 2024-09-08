import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-black py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} PharmaFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;