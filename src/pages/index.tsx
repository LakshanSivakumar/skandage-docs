import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Documentation"
      description="Official technical documentation for Skandage Technologies.">
      <main style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        
        <div style={{ fontFamily: 'var(--ifm-font-family-monospace)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ifm-menu-color)', marginBottom: '1.5rem' }}>
          Skandage Technologies
        </div>
        
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 500, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
          System Documentation
        </h1>
        
        <p style={{ color: 'var(--ifm-menu-color)', fontSize: '1.25rem', marginBottom: '5rem' }}>
          Select your platform to view the technical guides.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          
          <Link to="/docs/website/intro" style={{ border: '1px solid var(--ifm-toc-border-color)', padding: '3rem', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Website Suite <span style={{ fontFamily: 'var(--ifm-font-family-monospace)' }}>&rarr;</span>
            </h2>
            <p style={{ color: 'var(--ifm-menu-color)', margin: 0 }}>
              Setup guides for your digital HQ, custom domain routing, and Telegram lead capture integration.
            </p>
          </Link>

          <Link to="/docs/insurance/intro" style={{ border: '1px solid var(--ifm-toc-border-color)', padding: '3rem', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Insurance Suite <span style={{ fontFamily: 'var(--ifm-font-family-monospace)' }}>&rarr;</span>
            </h2>
            <p style={{ color: 'var(--ifm-menu-color)', margin: 0 }}>
              Manuals for the offline desktop OS, CRM automation, PDF parsing, and local database security.
            </p>
          </Link>

        </div>
      </main>
    </Layout>
  );
}