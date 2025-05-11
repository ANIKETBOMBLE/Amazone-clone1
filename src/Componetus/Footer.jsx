import React from 'react';

function Footer() {
  return (
    <>
      <div className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-sm">

          <ul className="space-y-4">
            <li>
              <a href="https://www.abebooks.com/" className="hover:underline">
                <h5 className="font-semibold">AbeBooks</h5>
                <span>Books, art<br />& collectibles</span>
              </a>
            </li>
            <li>
              <a href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter" className="hover:underline">
                <h5 className="font-semibold">Amazon Web Services</h5>
                <span>Scalable Cloud<br />Computing Services</span>
              </a>
            </li>
            <li>
              <a href="https://www.audible.in/" className="hover:underline">
                <h5 className="font-semibold">Audible</h5>
                <span>Download<br />Audio Books</span>
              </a>
            </li>
            <li>
              <a href="https://www.imdb.com/" className="hover:underline">
                <h5 className="font-semibold">IMDb</h5>
                <span>Movies, TV<br />& Celebrities</span>
              </a>
            </li>
          </ul>

          <ul className="space-y-4">
            <li>
              <a href="https://www.shopbop.com/" className="hover:underline">
                <h5 className="font-semibold">Shopbop</h5>
                <span>Designer<br />Fashion Brands</span>
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                <h5 className="font-semibold">Amazon Business</h5>
                <span>Everything For<br />Your Business</span>
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                <h5 className="font-semibold">Prime Now</h5>
                <span>2-Hour Delivery<br />on Everyday Items</span>
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                <h5 className="font-semibold">Amazon Prime Music</h5>
                <span>
                  100 million songs, ad-free<br />
                  Over 15 million podcast episodes
                </span>
              </a>
            </li>
          </ul>

        </div>
      </div>

      <div className="bg-gray-900 text-gray-400 text-xs py-4 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-center">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <li>
              <a href="" className="hover:underline">
                Conditions of Use & Sale
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Privacy Notice
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Interest-Based Ads
              </a>
            </li>
          </ul>
          <span className="mt-2 md:mt-0">© 1996–2025, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
