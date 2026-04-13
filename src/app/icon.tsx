import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 600,
            fontFamily: 'monospace',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -2,
          }}
        >
          c
        </div>
        {/* Emerald availability dot */}
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '15%',
            width: 6,
            height: 6,
            background: '#10b981',
            borderRadius: '50%',
            border: '1px solid #09090b',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
