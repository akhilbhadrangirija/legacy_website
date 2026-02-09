import { MainLayout } from "../../components/MainLayout";
import Link from "next/link";

export default function StandardsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <MainLayout>
      <section className="bg-surface py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-accent hover:text-accent/80 mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-charcoal mb-8">
            Retirement Homes on par with international standards
          </h1>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80" 
              alt="International Standard Retirement Homes" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <ul className="space-y-6 text-warm-gray text-lg">
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold text-2xl mt-1">w</span>
                <span>The Legacy is secluded with round the clock security and it's a world unto itself in facilities and self sustainability</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold text-2xl mt-1">w</span>
                <span>Besides the well appointed, plush apartment with optional air-conditioning, the outdoors are lavishly spread out to give you infinite freedom, clean air and a sense of belonging in the lap of nature</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold text-2xl mt-1">w</span>
                <span>You have all the assistance you may need at your be call. An errand runner to fetch your needy things, a chauffeur in wait to take you to nearby places you may cherish to visit individually or as a group</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold text-2xl mt-1">w</span>
                <span>To take care of your or your wellness part, there is a multi-gym with trainer, an ayurveda massage and spa, NABH accredited lab and pharmacy and beauty salon</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold text-2xl mt-1">w</span>
                <span>The entire property will be maintained to extreme hygiene standards and the disinfected laundry service will be there for your well being</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </MainLayout>
    </main>
  );
}


