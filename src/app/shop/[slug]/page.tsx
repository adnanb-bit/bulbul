import { products } from '@/lib/data';
import ProductPageClient from '@/components/ProductPageClient';

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <ProductPageClient slug={params.slug} />;
}
