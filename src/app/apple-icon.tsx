import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
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
            fontSize: 110,
            color: 'white',
            fontWeight: 600,
            fontFamily: 'monospace',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -10,
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
            width: 32,
            height: 32,
            background: '#10b981',
            borderRadius: '50%',
            border: '6px solid #09090b',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
