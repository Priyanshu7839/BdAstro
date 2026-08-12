export function MandalaIllustration({ size = 160, opacity = 0.18 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" style={{ opacity }} aria-hidden="true">
      <circle cx="80" cy="80" r="76" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" />
      <circle cx="80" cy="80" r="64" stroke="currentColor" strokeWidth="0.5" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180
        const x = 80 + 52 * Math.sin(a), y = 80 - 52 * Math.cos(a)
        return <ellipse key={i} cx={x} cy={y} rx="6" ry="10" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" transform={`rotate(${i * 30},${x},${y})`} />
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180
        const x = 80 + 30 * Math.sin(a), y = 80 - 30 * Math.cos(a)
        return <ellipse key={i} cx={x} cy={y} rx="5" ry="9" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.2" transform={`rotate(${i * 45},${x},${y})`} />
      })}
      <circle cx="80" cy="80" r="38" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
      <circle cx="80" cy="80" r="22" stroke="currentColor" strokeWidth="0.8" />
      <polygon points="80,52 93,74 67,74" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.1" />
      <polygon points="80,108 67,86 93,86" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.1" />
      <circle cx="80" cy="80" r="4" fill="currentColor" fillOpacity="0.5" />
      <circle cx="80" cy="80" r="8" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  )
}

export function ZodiacRingIllustration({ size = 200 }: { size?: number }) {
  const signs = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓']
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <circle cx="100" cy="100" r="88" stroke="rgba(255,200,100,0.2)" strokeWidth="1" strokeDasharray="3 6" />
      <circle cx="100" cy="100" r="72" stroke="rgba(255,200,100,0.15)" strokeWidth="0.5" />
      {signs.map((sign, i) => {
        const a = ((i * 30 - 90) * Math.PI) / 180
        const x = 100 + 80 * Math.cos(a), y = 100 + 80 * Math.sin(a)
        return <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="rgba(255,200,100,0.55)">{sign}</text>
      })}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = ((i * 30 - 90) * Math.PI) / 180
        return <line key={i} x1={100 + 60 * Math.cos(a)} y1={100 + 60 * Math.sin(a)} x2={100 + 68 * Math.cos(a)} y2={100 + 68 * Math.sin(a)} stroke="rgba(255,200,100,0.25)" strokeWidth="0.8" />
      })}
      <circle cx="100" cy="100" r="18" stroke="rgba(255,200,100,0.3)" strokeWidth="0.8" />
      <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="rgba(255,200,100,0.7)">☀</text>
    </svg>
  )
}

export function ConstellationDots({ className }: { className?: string }) {
  const stars = [
    [12,18],[45,8],[78,22],[30,40],[60,35],[88,15],[20,55],[50,62],[75,50],[95,68],
    [8,75],[35,80],[65,72],[90,85],[22,92],[55,90],[80,95],[42,28],[70,45],[15,65],
  ]
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      {stars.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 0.9 : 0.5} fill="rgba(255,220,140,0.6)" />
      ))}
      <line x1="12" y1="18" x2="30" y2="40" stroke="rgba(255,220,140,0.15)" strokeWidth="0.4" />
      <line x1="30" y1="40" x2="60" y2="35" stroke="rgba(255,220,140,0.15)" strokeWidth="0.4" />
      <line x1="45" y1="8" x2="78" y2="22" stroke="rgba(255,220,140,0.15)" strokeWidth="0.4" />
      <line x1="50" y1="62" x2="75" y2="50" stroke="rgba(255,220,140,0.15)" strokeWidth="0.4" />
      <line x1="75" y1="50" x2="95" y2="68" stroke="rgba(255,220,140,0.15)" strokeWidth="0.4" />
    </svg>
  )
}

export function OmSymbol({ size = 48, color = 'rgba(255,200,100,0.5)' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <text x="24" y="34" textAnchor="middle" fontSize="32" fill={color} fontFamily="serif">ॐ</text>
    </svg>
  )
}
