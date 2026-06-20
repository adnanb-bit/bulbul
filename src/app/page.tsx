import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import ProductShowcase from '@/components/home/ProductShowcase';
import WhyItWorks from '@/components/home/WhyItWorks';
import SocialProof from '@/components/home/SocialProof';
import BundleOffer from '@/components/home/BundleOffer';
import HowItWorks from '@/components/home/HowItWorks';
import VideoDemo from '@/components/home/VideoDemo';
import QuizCTA from '@/components/home/QuizCTA';
import UGCGallery from '@/components/home/UGCGallery';
import BlogPreview from '@/components/home/BlogPreview';
import FAQSection from '@/components/home/FAQSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ProductShowcase />
      <WhyItWorks />
      <SocialProof />
      <BundleOffer />
      <HowItWorks />
      <VideoDemo />
      <QuizCTA />
      <UGCGallery />
      <BlogPreview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
