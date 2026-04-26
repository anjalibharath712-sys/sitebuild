import Link from 'next/link';
import gallery from '../../data/gallery';

export function getStaticPaths() {
  return {
    paths: gallery.map((item) => ({ params: { slug: item.slug } })),
    fallback: false
  };
}

export function getStaticProps({ params }) {
  const item = gallery.find((entry) => entry.slug === params.slug);
  return {
    props: {
      item
    }
  };
}

export default function GalleryItem({ item }) {
  return (
    <main className="page-shell">
      <section className="detail-header">
        <div>
          <p className="eyebrow">{item.category}</p>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <Link href="../" className="btn btn-secondary">
            Back to gallery
          </Link>
        </div>
        <div className="detail-image" style={{ backgroundImage: `url(${item.image})` }} />
      </section>

      <section className="detail-grid">
        <div className="detail-card">
          <h2>About this collection</h2>
          <p>
            This gallery item is fully pre-rendered and served as a static page by Next.js. The content is optimized for fast performance and easy scaling.
          </p>
        </div>
        <div className="detail-card">
          <h2>Build detail</h2>
          <p>
            Each page is generated at build time using `getStaticProps` and `getStaticPaths`, so the gallery remains static and deployable anywhere.
          </p>
        </div>
      </section>
    </main>
  );
}
