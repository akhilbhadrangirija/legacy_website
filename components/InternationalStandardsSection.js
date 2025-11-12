import Link from 'next/link'

export default function InternationalStandardsSection() {
  return (
    <section className="bg-light-cream py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown mb-8 text-center">
          Retirement Homes on par with international standards
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <img 
              src='/arial_view.jpg' 
              alt="International Standard Retirement Homes" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <ul className="space-y-5 text-dark-brown/70">
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>The Legacy is secluded with round the clock security and it's a world unto itself in facilities and self sustainability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>Besides the well appointed, plush apartment with optional air-conditioning, the outdoors are lavishly spread out to give you infinite freedom, clean air and a sense of belonging in the lap of nature</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>You have all the assistance you may need at your be call. An errand runner to fetch your needy things, a chauffeur in wait to take you to nearby places you may cherish to visit individually or as a group</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>To take care of your or your wellness part, there is a multi-gym with trainer, an ayurveda massage and spa, NABH accredited lab and pharmacy and beauty salon</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>The entire property will be maintained to extreme hygiene standards and the disinfected laundry service will be there for your well being</span>
              </li>
            </ul>
            <Link href="/standards" className="inline-block mt-6 text-light-pink font-medium hover:underline">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
