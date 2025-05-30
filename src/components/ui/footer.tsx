const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white">
        {/* Newsletter Section */}
        <div className="border-t border-b border-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-gray-400">Subscribe to our newsletter</p>
              </div>
              <div className="flex-1 w-full max-w-xl">
                <form className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-gray-800 rounded-lg px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
  
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Models Column */}
            <div>
              <h4 className="text-gray-400 font-medium mb-4">Models</h4>
              <ul className="space-y-3">
                {['718', '911', 'Taycan', 'Panamera', 'Macan', 'Cayenne', 'All Models'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Services Column */}
            <div>
              <h4 className="text-gray-400 font-medium mb-4">Services</h4>
              <ul className="space-y-3">
                {['Service & Maintenance', 'Tele-Diagnostics', 'Porsche Finder', 'Configurator', 'Service Locator'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Explore Column */}
            <div>
              <h4 className="text-gray-400 font-medium mb-4">Explore Porsche</h4>
              <ul className="space-y-3">
                {['About Porsche', 'Careers', 'Investor Relations', 'Press Portal', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Legal Column */}
            <div>
              <h4 className="text-gray-400 font-medium mb-4">Legal</h4>
              <ul className="space-y-3">
                {['Legal Notice', 'Privacy Policy', 'Cookie Policy', 'Terms & Conditions', 'Imprint'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Social Media & Language */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <span className="text-gray-400">Follow Porsche:</span>
                <div className="flex gap-4">
                  {['facebook', 'twitter', 'instagram', 'youtube'].map((platform) => (
                    <a key={platform} href="#" className="text-gray-400 hover:text-white transition-colors">
                      <span className="sr-only">{platform}</span>
                      {/* Icons would go here */}
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        {/* Example icon path */}
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Indonesia
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Deutsch
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="bg-gray-800 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
            <p>© 2024 Porsche Indonesia. A subsidiary of Volkswagen Group.</p>
            <p>All product names, logos, and brands are property of their respective owners.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;