import Extras from '@/components/Extras'
import ImageSlider from '@/components/ImageSlider'
import Services from '@/components/Services'
import Testimonials from '@/components/testimonials/Testimonials'

export default function Home() {
  return (
    <main>
      <ImageSlider />
      <Services />
      <Testimonials />
    </main>
  )
}
