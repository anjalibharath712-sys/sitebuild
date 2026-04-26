import Link from 'next/link';
import gallery from '../data/gallery';

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Static Gallery</p>
          <h1>Elegant gallery pages built with Next.js</h1>
          <p>Create a fully static gallery website with fast load times and beautiful visuals.</p>
          <div className="hero-actions">
            <Link href="/gallery" className="btn btn-primary">
              View Gallery
            </Link>
            <a href="#preview" className="btn btn-secondary">
              Preview Items
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <span className="hero-badge">Static Pages</span>
            <h2>Photo gallery made with Next.js</h2>
            <p>All gallery pages are generated at build time using static props and paths.</p>
          </div>
        </div>
      </section>

      <section id="preview" className="preview-section">
        <div className="section-header">
          <p className="eyebrow">Gallery preview</p>
          <h2>Featured collections</h2>
        </div>

        <div className="gallery-grid">
          {gallery.slice(0, 4).map((item) => (
            <Link key={item.slug} href={`/gallery/${item.slug}`} className="gallery-card">
              <div className="card-image" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="card-content">
                <p className="card-category">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
