import { bundles } from '@/lib/data';
import BundlePageClient from '@/components/BundlePageClient';

export function generateStaticParams() {
  return bundles.map((bundle) => ({
    slug: bundle.slug,
  }));
}

export default function BundlePage({ params }: { params: { slug: string } }) {
  return <BundlePageClient slug={params.slug} />;
}
