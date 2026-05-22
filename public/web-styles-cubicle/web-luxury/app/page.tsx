import HomeHeader from '@/components/sections/HomeHeader'
import HomeIntro from '@/components/sections/HomeIntro'
import StaySlider from '@/components/sections/StaySlider'
import ImageSplit from '@/components/sections/ImageSplit'
import CardsGrid from '@/components/sections/CardsGrid'
import SectionBigImage from '@/components/sections/SectionBigImage'

export default function HomePage() {
  return (
    <>
      <HomeHeader />

      <HomeIntro />

      <StaySlider />

      {/* Dining feature */}
      <ImageSplit
        image="/images/dining.webp"
        alt="Farm-to-table dining at The Damai"
        eyebrow="Dining"
        title="Farm to Table"
        description="Every meal at The Damai is a culinary journey, crafted from ingredients grown in our own organic garden and sourced from trusted local farmers. Our chefs weave Balinese tradition with contemporary technique."
        href="/dining"
        flipped
      />

      {/* Spa feature */}
      <ImageSplit
        image="/images/spa.webp"
        alt="Spa and wellness at The Damai"
        eyebrow="Wellness"
        title="Restore Your Soul"
        description="Our Balinese-inspired spa draws on ancient healing traditions to restore balance to the body and mind. Surrender to the rhythm of Bali."
        href="/relax"
        theme="dark"
        bgSection="dark"
      />

      {/* Packages */}
      <section className="section" data-bg-section="lightgray">
        <div className="container">
          <CardsGrid type="packages" columns={3} />
        </div>
      </section>

      {/* Discover */}
      <section className="section">
        <div className="container">
          <CardsGrid type="discover" columns={3} />
        </div>
      </section>

      {/* Footer CTA image */}
      <SectionBigImage
        src="/images/footer-cta.webp"
        alt="The Damai — your paradise awaits"
        hasText
        eyebrow="Reserve"
        title="Your Paradise Awaits"
        description="Limited villas available. Begin your journey to The Damai."
        href="/contact"
        hrefLabel="Book Your Stay"
      />
    </>
  )
}
