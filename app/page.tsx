import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { UspStrip } from '@/components/usp-strip'
import { Services } from '@/components/services'
import { Products } from '@/components/products'
import { Process } from '@/components/process'
import { Reviews } from '@/components/reviews'
import { ContactCta } from '@/components/contact-cta'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <UspStrip />
        <Services />
        <Products />
        <Process />
        <Reviews />
        <ContactCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
