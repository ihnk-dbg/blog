import HeroSection from '../components/HeroSection'
import Newsletter from '../components/Newsletter'
import TagCloud from '../components/TagCloud'
import BlogStats from '../components/BlogStats'
import ScrollReveal from '../components/ScrollReveal'
import SEO from '../components/SEO'
import { siteConfig } from '../data/siteData'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home-page">
      <SEO
        title="Home"
        description={siteConfig.description}
      />
      <HeroSection />
      <div className="home-sections">
        <ScrollReveal delay={100}>
          <BlogStats />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <TagCloud />
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <Newsletter />
        </ScrollReveal>
      </div>
    </div>
  )
}

export default Home
