import React from 'react';

export const BrandLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="40%" stopColor="#FDB931" />
        <stop offset="100%" stopColor="#FFD700" />
      </linearGradient>
    </defs>
    
    {/* Crown */}
    <path
      d="M40 60 C40 60 20 25 20 25 L60 45 L100 5 L140 45 L180 25 C180 25 160 60 160 60 H40Z"
      fill="url(#goldGrad)"
      stroke="#B8860B"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="25" r="5" fill="#FFD700" />
    <circle cx="100" cy="5" r="6" fill="#FFD700" />
    <circle cx="180" cy="25" r="5" fill="#FFD700" />

    {/* Diamond Body */}
    <path
      d="M20 70 H180 L100 210 L20 70Z"
      fill="#050505"
      stroke="url(#goldGrad)"
      strokeWidth="5"
    />
    
    {/* Separator Line */}
    <rect x="18" y="65" width="164" height="6" fill="url(#goldGrad)" />

    {/* Letters ML */}
    {/* M */}
    <path d="M55 100 V160 L85 130 L115 160 V100" stroke="white" strokeWidth="12" strokeLinecap="butt" strokeLinejoin="miter" fill="none" />
    {/* L */}
    <path d="M135 100 V160 H170" stroke="white" strokeWidth="12" strokeLinecap="butt" fill="none" />
  </svg>
);