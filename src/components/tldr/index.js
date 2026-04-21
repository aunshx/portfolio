import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import asxPortfolio from '../../resources/images/asxPortfolio.jpeg';
import { cultivisionProj, EMAIL_LINK, forestDssProj, fredProj, GITHUB_LINK, LINKEDIN_LINK, MEDIUM_LINK, RESUME_LINK, resviewProj } from '../../resources/constants';

const LINKS = [
  {
    href: 'https://biofred.us',
    emoji: '🌿',
    iconBg: 'rgba(0,145,255,0.18)',
    thumb: fredProj,
    title: 'Forest Biomass Intelligence',
    sub: 'Agentic AI for biomass procurement',
  },
  {
    href: 'https://cultivision.app',
    emoji: '📊',
    iconBg: 'rgba(0,145,255,0.18)',
    thumb: cultivisionProj,
    title: 'Sustainability Metrics',
    sub: 'ESG dashboards built on real data',
  },
  {
    href: 'https://resview.resilientdb.com',
    emoji: '🔗',
    iconBg: 'rgba(0,145,255,0.18)',
    thumb: resviewProj,
    title: 'Blockchain Fabric View',
    sub: 'Consensus transparency on-chain',
  },
  {
    href: 'https://aun.sh',
    emoji: '💼',
    iconBg: 'rgba(126,217,87,0.15)',
    title: 'Portfolio',
    sub: 'Who am I and what do I do?',
  },
  {
    href: RESUME_LINK,
    emoji: '📄',
    iconBg: 'rgba(255,180,41,0.12)',
    title: 'Résumé / CV',
    sub: 'Download or view online',
  },
];

const SKILLS = [
  { label: 'Python', highlight: true },
  { label: 'Typescript', highlight: false },
  { label: 'React', highlight: false },
  { label: 'FastAPI', highlight: false },
  { label: 'ML / AI', highlight: true },
  { label: 'Node.js', highlight: false },
  { label: 'TensorFlow', highlight: true },
  { label: 'PostgreSQL', highlight: false },
  { label: 'Redux', highlight: true },
  { label: 'Claude', highlight: false },
  { label: 'D3.js', highlight: false },
  { label: 'Docker', highlight: true },
  { label: 'AWS', highlight: false },
  { label: 'Blockchain', highlight: true },
  { label: 'Computer Vision', highlight: false },
];

const SOCIALS = [
  { icon: faGithub, href: GITHUB_LINK, label: 'GitHub' },
  { icon: faLinkedin, href: LINKEDIN_LINK, label: 'LinkedIn' },
  { icon: faMedium, href: MEDIUM_LINK, label: 'Medium' },
  { icon: faEnvelope, href: EMAIL_LINK, label: 'Email' },
];

function StarField() {
  const ref = useRef(null);
  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 70; i++) {
      const el = document.createElement('div');
      const size = Math.random() > 0.8 ? 2 : 1;
      el.style.cssText = `
        position:absolute;border-radius:50%;background:white;
        left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        width:${size}px;height:${size}px;
        opacity:${0.2 + Math.random() * 0.4};
        animation:twinkle ${2 + Math.random() * 4}s ease-in-out infinite ${-Math.random() * 5}s;
      `;
      fragment.appendChild(el);
    }
    container.appendChild(fragment);
    return () => { container.innerHTML = ''; };
  }, []);
  return (
    <div
      ref={ref}
      style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}

// ─── AvatarRing ───────────────────────────────────────────────────────────────

function AvatarRing({ size = 96 }) {
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div
        style={{
          position: 'absolute', inset: -3, borderRadius: '50%',
          background: 'conic-gradient(#0091ff, #7ed957, #0091ff)',
          animation: 'tldrSpin 6s linear infinite',
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'relative', zIndex: 1,
          width: size, height: size, borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid rgba(15,20,30,0.95)',
          background: 'rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <img src={asxPortfolio} alt="Aunsh" style={{width:'100%',height:'100%',objectFit:'cover'}} />
        {/* <span style={{ fontSize: size * 0.33, fontWeight: 700, color: '#0091ff', userSelect: 'none' }}>
          AB
        </span> */}
      </div>
    </div>
  );
}


function LinkRow({ href, thumb, title, sub }) {
  const [hovered, setHovered] = useState(false);
  const [imgErr, setImgErr] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex', alignItems: 'center', gap: '1rem',
        borderRadius: '0.875rem', padding: '0.75rem 1rem',
        overflow: 'hidden', textDecoration: 'none',
        transition: 'transform 0.15s ease, box-shadow 0.2s ease, background 0.2s, border-color 0.2s',
        background: hovered ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? 'rgba(0,145,255,0.35)' : 'rgba(255,255,255,0.08)'}`,
        transform: hovered ? 'translateX(4px)' : 'none',
        boxShadow: hovered ? '0 6px 24px rgba(0,0,0,0.3), 0 0 16px rgba(0,145,255,0.15)' : 'none',
      }}
    >
      <div
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
          borderRadius: '0.875rem 0 0 0.875rem',
          background: 'linear-gradient(to bottom, #0091ff, #7ed957)',
          opacity: hovered ? 1 : 0, transition: 'opacity 0.2s',
        }}
        aria-hidden="true"
      />
      <div style={{
        width: 56, height: 42, borderRadius: '0.5rem',
        flexShrink: 0, overflow: 'hidden',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform 0.2s ease',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
      }}>
        {thumb && !imgErr ? (
          <img
            src={thumb}
            alt={title}
            onError={() => setImgErr(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          /* fallback: brand-colored initials box */
          <span style={{ fontSize: '1.1rem', color: title === 'Résumé / CV' ? 'rgba(255,180,41,0.9)' : '#0091ff', fontWeight: 700 }}>
              {title === 'Résumé / CV' ? '📄' : '💼'}
          </span>
        )}
      </div>

      {/* text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          color: 'rgb(235,242,255)', fontSize: '1rem', fontWeight: 500,
          margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          letterSpacing: '-0.01em',
        }}>
          {title}
        </p>
        <p style={{ color: 'rgb(100,115,135)', fontSize: '0.8rem', margin: '3px 0 0', fontFamily: 'monospace' }}>
          {sub}
        </p>
      </div>

      <FontAwesomeIcon
        icon={faArrowRight}
        style={{
          fontSize: 14, flexShrink: 0,
          color: hovered ? '#0091ff' : 'rgb(90,105,125)',
          transform: hovered ? 'translateX(3px)' : 'none',
          transition: 'color 0.15s, transform 0.15s',
        }}
      />
    </a>
  );
}


// ─── SocialIcon ───────────────────────────────────────────────────────────────

function SocialIcon({ icon, href, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={label === 'Email' ? undefined : '_blank'}
      rel={label === 'Email' ? undefined : 'noopener noreferrer'}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 40, height: 40, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textDecoration: 'none', transition: 'all 0.15s ease',
        background: hovered ? 'rgba(0,145,255,0.2)' : 'rgba(255,255,255,0.06)',
        border: `1px solid ${hovered ? 'rgba(0,145,255,0.4)' : 'rgba(255,255,255,0.12)'}`,
        color: hovered ? '#0091ff' : 'rgb(150,165,185)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered ? '0 0 18px rgba(0,145,255,0.2)' : 'none',
      }}
    >
      <FontAwesomeIcon icon={icon} style={{ fontSize: 17 }} />
    </a>
  );
}


function FadeBlock({ delay = 0, children, style = {} }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.55s ease-out, transform 0.55s ease-out',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

const Tldr = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>

      <style>{`
        @keyframes tldrSpin { to { transform: rotate(360deg); } }

        .tldr-footer-link {
          font-family: monospace;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          color: rgb(90,105,125);
          text-decoration: none;
          transition: color 0.2s;
        }
        .tldr-footer-link:hover { color: #0091ff; }

        .tldr-chip {
          font-family: monospace;
          font-size: 0.75rem;
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
          letter-spacing: 0.02em;
          cursor: default;
          transition: border-color 0.2s, color 0.2s;
        }
        .tldr-chip:hover {
          border-color: rgba(0,145,255,0.3) !important;
          color: #0091ff !important;
        }

        .tldr-toplink:hover {
          color: #0091ff !important;
          border-color: rgba(0,145,255,0.3) !important;
          box-shadow: 0 0 14px rgba(0,145,255,0.18);
        }
      `}</style>

      <StarField />

      {/* full-page centering wrapper */}
      <main style={{
        position: 'relative', zIndex: 10,
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'flex-start',
        padding: '2rem 1.25rem 3rem',
      }}>

        {/* top bar — outside the card, just like linktree */}
        <FadeBlock delay={50} style={{
          width: '100%', maxWidth: 520,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: '1.5rem',
        }}>
          <Link to="/" style={{ fontSize: '1.7rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#0091ff', textDecoration: 'none' }}>
            a<span style={{ color: '#0091ff' }}>.</span>
          </Link>
          <Link
            to="/"
            className="tldr-toplink"
            style={{
              fontFamily: 'monospace', fontSize: '0.78rem', letterSpacing: '0.02em',
              padding: '0.35rem 0.9rem', borderRadius: 20, textDecoration: 'none',
              color: 'rgb(150,165,185)', border: '1px solid rgba(255,255,255,0.12)',
              transition: 'all 0.2s',
            }}
          >
            aun.sh →
          </Link>
        </FadeBlock>

        <FadeBlock delay={120} style={{ width: '100%', maxWidth: 520 }}>
          <div style={{
            borderRadius: '1.5rem',
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)',
            padding: '2rem 1.75rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0',
          }}>

            <div style={{ marginBottom: '1.1rem' }}>
              <AvatarRing size={96} />
            </div>

            <h1 style={{
              fontSize: '1.75rem', fontWeight: 700,
              letterSpacing: '-0.03em', color: 'rgb(240,248,255)',
              margin: '0 0 0.3rem', textAlign: 'center',
            }}>
              Aunsh Bandivadekar
            </h1>

            {/* tagline */}
            <p style={{
              fontSize: '1rem', fontWeight: 400,
              color: 'rgb(140,160,185)', margin: '0 0 0.5rem', textAlign: 'center',
            }}>
              Building AI at the edge of{' '}
              <span style={{ color: '#0091ff', fontWeight: 500 }}>software</span>
              {' '}and{' '}
              <span style={{ color: '#0091ff', fontWeight: 500 }}>science</span>
            </p>
            <p style={{
              fontSize: '0.9rem', lineHeight: 1.65,
              color: 'rgb(130,148,170)', textAlign: 'center',
              maxWidth: 380, margin: '0 0 1.3rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '0.875rem', padding: '0.75rem 1.1rem',
            }}>
              Obsessed with the space where software meets intelligence, building systems that are useful, fast, and real.
            </p>

            {/* social icons */}
            <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'center', marginBottom: '1.75rem' }}>
              {SOCIALS.map(s => <SocialIcon key={s.label} {...s} />)}
            </div>

            {/* divider */}
            <div style={{
              width: '100%', height: 1, marginBottom: '1.25rem',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
            }} aria-hidden="true" />

            {/* projects label */}
            <div style={{ width: '100%', marginBottom: '0.75rem' }}>
              <p style={{
                fontFamily: 'monospace', fontSize: '0.72rem',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgb(80,100,120)', margin: 0,
              }}>
                Featured Work
              </p>
            </div>

            {/* link rows */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
              {LINKS.map(link => (
                <LinkRow key={link.title} {...link} />
              ))}
            </div>

            {/* stack label */}
            <div style={{ width: '100%', marginBottom: '0.75rem' }}>
              <p style={{
                fontFamily: 'monospace', fontSize: '0.72rem',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgb(80,100,120)', margin: 0,
              }}>
                Stack
              </p>
            </div>

            {/* chips */}
            <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {SKILLS.map(({ label, highlight }) => (
                <span
                  key={label}
                  className="tldr-chip"
                  style={{
                    border: highlight ? '1px solid rgba(0,145,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
                    background: highlight ? 'rgba(0,145,255,0.15)' : 'rgba(255,255,255,0.03)',
                    color: highlight ? '#0091ff' : 'rgb(140,158,178)',
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

          </div>
        </FadeBlock>

        <FadeBlock delay={500} style={{ marginTop: '1.75rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
            <a className="tldr-footer-link" href="https://aun.sh" target="_blank" rel="noopener noreferrer">aun.sh</a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
            <a className="tldr-footer-link" href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">github</a>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
            <a className="tldr-footer-link" href={EMAIL_LINK}>email</a>
          </div>
          <p style={{ color: 'rgb(70,88,108)', fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.08em', marginTop: '0.4rem' }}>
            tldr<span style={{ color: '#0091ff' }}>.</span>aun.sh
          </p>
        </FadeBlock>

      </main>
    </div>
  );
};

export default Tldr;