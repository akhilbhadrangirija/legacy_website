import Link from 'next/link'

export default function FreedomSection() {
  return (
    <section className="bg-beige py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-dark-brown mb-8 text-center">
          A community that won't suffocate you with restrictions
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img 
              src="/family_visit.jpg" 
              alt="Freedom at Legacy" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <ul className="space-y-5 text-dark-brown/70 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>You may receive visitors at any time of the day. You may spend time with your offspring and siblings as much as you wish and they can live at your apartment for a few days at a stretch.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-light-pink font-bold mt-1">•</span>
                <span>We understand that the best ingredient that sustains your health and happiness is what you eat. You won't be forced to devour a prescribed and regimented bland food. You have the freedom to choose from an assorted multi cuisine menu. Your choice will be vast and à la carte.</span>
              </li>
            </ul>
            <Link href="/freedom" className="inline-block text-light-pink font-medium hover:underline">
              Learn More →
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  )
}


