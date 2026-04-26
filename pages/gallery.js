import Link from 'next/link';
import gallery from '../data/gallery';

export function getStaticProps() {
  return {
    props: {
      items: gallery
    }
  };
}

export default function GalleryPage({ items }) {
  return (
    <main className="page-shell">
      <section className="page-header">
        <div>
          <p className="eyebrow">Gallery</p>
          <h1>Curated photo collections</h1>
          <p>Browse a static gallery experience powered by Next.js and generated at build time.</p>
        </div>
        <Link href="../" className="btn btn-outline">
          Back home
        </Link>
      </section>

      <div className="gallery-grid">
        {items.map((item) => (
          <Link key={item.slug} href={item.slug} className="gallery-card">
            <div className="card-image" style={{ backgroundImage: `url(${item.image})` }} />
            <div className="card-content">
              <p className="card-category">{item.category}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
