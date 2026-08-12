import { type ReactNode } from 'react'
import { COLORS as C } from '@/data/constants'
import { Ico } from '@/components/icons'

export function Badge({ children, live, saffron }: { children: ReactNode; live?: boolean; saffron?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: live ? C.live : saffron ? C.saffron : C.maroon }}>
      {live && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />}
      {children}
    </span>
  )
}

export function OnlineStatus({ status }: { status: 'online' | 'busy' | 'offline' }) {
  const m = { online: { color: C.success, label: 'Online' }, busy: { color: C.saffron, label: 'Busy' }, offline: { color: C.textSec, label: 'Offline' } }
  const { color, label } = m[status]
  return (
    <span className="flex items-center gap-1 text-xs font-medium" style={{ color }}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  )
}

export function Rating({ score, count }: { score: number; count: string }) {
  return (
    <span className="flex items-center gap-1">
      {Ico.star()}
      <span className="text-xs font-semibold" style={{ color: C.text }}>{score}</span>
      <span className="text-xs" style={{ color: C.textSec }}>({count})</span>
    </span>
  )
}

export function PrimaryBtn({ children, onClick, full, small }: { children: ReactNode; onClick?: () => void; full?: boolean; small?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 font-semibold rounded-full transition-all active:scale-95 focus:outline-none focus-visible:ring-2 ${full ? 'w-full' : ''}`}
      style={{ background: C.maroon, color: 'white', padding: small ? '8px 16px' : '12px 20px', fontSize: small ? '13px' : '14px', minHeight: '44px', boxShadow: '0 2px 8px rgba(123,31,31,0.22)' }}
    >
      {children}
    </button>
  )
}

export function SecondaryBtn({ children, onClick, full, small }: { children: ReactNode; onClick?: () => void; full?: boolean; small?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 font-semibold rounded-full border transition-all active:scale-95 focus:outline-none focus-visible:ring-2 ${full ? 'w-full' : ''}`}
      style={{ background: 'white', color: C.maroon, borderColor: C.maroon, padding: small ? '8px 16px' : '12px 20px', fontSize: small ? '13px' : '14px', minHeight: '44px' }}
    >
      {children}
    </button>
  )
}

export function SectionHeader({ title, onViewAll }: { title: string; onViewAll?: () => void }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="font-display text-xl" style={{ color: C.text, letterSpacing: '-0.01em' }}>{title}</h2>
      {onViewAll && (
        <button onClick={onViewAll} className="flex items-center gap-1 text-xs font-semibold active:opacity-60 px-3 py-1.5 rounded-full" style={{ color: C.maroon, background: C.surfaceMuted, border: `1px solid ${C.border}` }}>
          View All {Ico.arrowRight()}
        </button>
      )}
    </div>
  )
}

export function Divider() {
  return <div className="my-1" style={{ height: '1px', background: C.border }} aria-hidden="true" />
}

export function PageHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 px-4" style={{ background: 'rgba(253,248,241,0.88)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(226,205,176,0.6)', minHeight: '60px', paddingTop: 'max(12px, env(safe-area-inset-top))', paddingBottom: '12px', boxShadow: '0 1px 0 rgba(226,205,176,0.8), 0 4px 12px rgba(30,14,8,0.05)' }}>
      <button onClick={onBack} className="w-9 h-9 flex items-center justify-center rounded-full active:scale-95 focus:outline-none flex-shrink-0" style={{ background: C.surfaceMuted, border: `1px solid ${C.border}` }} aria-label="Go back">
        {Ico.back()}
      </button>
      <h1 className="font-display text-lg" style={{ color: C.text, letterSpacing: '-0.01em' }}>{title}</h1>
    </header>
  )
}

export function PremiumTabs({ tabs, active, onChange }: { tabs: [string, string][]; active: string; onChange: (t: string) => void }) {
  return (
    <div className="flex px-4 py-3 gap-2" style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
      {tabs.map(([t, l]) => (
        <button key={t} onClick={() => onChange(t)} className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all active:scale-95 focus:outline-none" style={{ background: active === t ? C.maroon : C.surfaceMuted, color: active === t ? 'white' : C.textSec, boxShadow: active === t ? '0 2px 8px rgba(123,31,31,0.25)' : 'none', border: `1px solid ${active === t ? C.maroon : C.border}` }}>
          {l}
        </button>
      ))}
    </div>
  )
}

export function PremiumCard({ children, onClick, className }: { children: ReactNode; onClick?: () => void; className?: string }) {
  const base: React.CSSProperties = { background: C.card, border: `1px solid ${C.border}`, borderRadius: '20px', boxShadow: '0 3px 16px rgba(30,14,8,0.09)' }
  if (onClick) return <button onClick={onClick} className={`text-left w-full active:scale-[0.99] focus:outline-none ${className || ''}`} style={base}>{children}</button>
  return <div className={className} style={base}>{children}</div>
}
