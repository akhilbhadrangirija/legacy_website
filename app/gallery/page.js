import { MainLayout } from '../../components/MainLayout'
import GalleryHero from '../../components/gallery/GalleryHero'
import GalleryGrid from '../../components/GalleryGrid'

export const metadata = {
  title: 'Gallery - Legacy Retirement Living',
  description:
    'Explore our photo gallery showcasing the beautiful facilities, community spaces, and daily life at Legacy Premium Retirement Living in Vadavucode, Kerala.',
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-surface">
      <MainLayout>
        <GalleryHero />
        <GalleryGrid />
      </MainLayout>
    </main>
  )
}
