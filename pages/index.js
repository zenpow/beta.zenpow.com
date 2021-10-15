import HeroSection from '../components/Index/HeroSection'
import FeatureSection from '../components/Index/FeatureSection'
import HeaderSection from '../components/Index/HeaderSection'
import Stats from '../components/Index/Stats'
import Testimonials from '../components/Index/Testimonials'
import LogoClouds from '../components/Index/LogoClouds'
import ContactSection from '../components/Index/ContactSection'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Index() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <HeroSection />
      <FeatureSection />
      <HeaderSection />
      <Stats />
      <Testimonials />
      <LogoClouds />
      <ContactSection />
    </>
  )
}
