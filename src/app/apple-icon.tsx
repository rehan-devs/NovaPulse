import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0A0F',
          borderRadius: '40px',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 32 32"
          fill="none"
        >
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A6CF7" />
              <stop offset="100%" stopColor="#7B61FF" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="8" fill="url(#g)" fillOpacity="0.15"/>
          <path
            d="M6 18 L10 14 L13 17 L18 10 L22 15 L26 11"
            stroke="url(#g)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="26" cy="11" r="2" fill="#7B61FF"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}