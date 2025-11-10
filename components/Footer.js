export default function Footer() {
  return (
    <footer className="bg-dark-brown text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                {/* LIVING Legacy Section */}
          <div>
            {/* Logo section */}
            <div className="mb-4 flex items-center space-x-2">
              {/* Example logo SVG, replace with actual logo as needed */}
              <svg
                className="w-8 h-8 text-light-pink"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" />
              </svg>
              <span className="font-script text-2xl text-white">Legacy</span>
            </div>
            <div className="space-y-4">
              <p className="text-light-pink font-medium text-lg">PREMIUM RETIREMENT LIVING</p>
              <div>
                <p className="text-white/80 text-sm mb-1">A project of :</p>
                <p className="text-white/80 text-sm">
                  Manivelil Retirement Living (P) Ltd.
                </p>
              </div>
            </div>
          </div>
          {/* LANDMARKS Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">LANDMARKS</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-light-pink font-medium mb-2">Location</h4>
                <p className="text-white/80 text-sm">
                  Vadavucode near Puthencruz, Ernakulam
                </p>
              </div>
              <div>
                <h4 className="text-light-pink font-medium mb-2">Near by Hospitals</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>MOSC Medical College, Kolencherry</li>
                  <li>Rajagiri Hospital, Aluva</li>
                  <li>Aster Medicity, Cheranalloor</li>
                  <li>Lakeshore Hospital, Nettoor</li>
                  <li>Amrita Institute of Medical Sciences</li>
                </ul>
              </div>
            </div>
          </div>

          

          {/* Transportation Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Transportation</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-light-pink font-medium mb-2">Railway Station / Metro Station</h4>
                <p className="text-white/80 text-sm">
                  Thripunithura - 12 KM
                </p>
              </div>
              <div>
                <h4 className="text-light-pink font-medium mb-2">Airport</h4>
                <p className="text-white/80 text-sm">
                  Cochin International Airport - 31 KM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-light-pink font-medium mb-2">Registered Office</h4>
                <p className="text-white/80 text-sm">
                  6/342 A, Vadavucode P O,<br />
                  Puthencruz, Ernakulam - 682 310
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-white/80 text-sm">
                  <span className="text-light-pink">Tel :</span> 04842828282
                </p>
                <p className="text-white/80 text-sm">
                  <span className="text-light-pink">Mob :</span> +91 9895088888
                </p>
                <p className="text-white/80 text-sm">
                  <span className="text-light-pink">Email :</span> info@legacy.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <p className="text-white/60 text-center text-sm">
            © {new Date().getFullYear()} Legacy Retirement Living. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

