import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-sm">
        
        <ul className="space-y-5">
          <li>
            <a href="https://www.abebooks.com/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <h5 className="font-semibold text-white">AbeBooks</h5>
              <p className="text-gray-400">Books, art<br />& collectibles</p>
            </a>
          </li>
          <li>
            <a href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter" className="hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <h5 className="font-semibold text-white">Amazon Web Services</h5>
              <p className="text-gray-400">Scalable Cloud<br />Computing Services</p>
            </a>
          </li>
          <li>
            <a href="https://www.audible.in/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <h5 className="font-semibold text-white">Audible</h5>
              <p className="text-gray-400">Download<br />Audio Books</p>
            </a>
          </li>
          <li>
            <a href="https://www.imdb.com/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <h5 className="font-semibold text-white">IMDb</h5>
              <p className="text-gray-400">Movies, TV<br />& Celebrities</p>
            </a>
          </li>
        </ul>

        
        <ul className="space-y-5">
          <li>
            <a href="https://www.shopbop.com/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <h5 className="font-semibold text-white">Shopbop</h5>
              <p className="text-gray-400">Designer<br />Fashion Brands</p>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <h5 className="font-semibold text-white">Amazon Business</h5>
              <p className="text-gray-400">Everything For<br />Your Business</p>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <h5 className="font-semibold text-white">Prime Now</h5>
              <p className="text-gray-400">2-Hour Delivery<br />on Everyday Items</p>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <h5 className="font-semibold text-white">Amazon Prime Music</h5>
              <p className="text-gray-400">
                100 million songs, ad-free<br />
                Over 15 million podcast episodes
              </p>
            </a>
          </li>
        </ul>
      </div>

      
      <div className="border-t border-gray-700 py-6 px-6 text-xs text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-2 text-center">
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <a href="#" className="hover:underline">Conditions of Use & Sale</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Privacy Notice</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Interest-Based Ads</a>
            </li>
          </ul>
          <span>© 1996–2025, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
