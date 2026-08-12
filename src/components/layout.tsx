import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { COLORS as C, navItems } from '@/data/constants'
import { Ico, NavIco, SunLogo } from '@/components/icons'
import { MandalaIllustration, OmSymbol } from '@/components/illustrations'
import { ToastProvider } from '@/context/ToastContext'

/* ── App Header ── */
export function AppHeader({ onMenu }: { onMenu: () => void }) {
  const navigate = useNavigate()
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4" style={{ background: 'rgba(253,248,241,0.82)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(226,205,176,0.6)', minHeight: '64px', paddingTop: 'max(12px, env(safe-area-inset-top))', paddingBottom: '12px', boxShadow: '0 1px 0 rgba(226,205,176,0.8), 0 4px 16px rgba(30,14,8,0.05)' }}>
      <button onClick={onMenu} className="w-10 h-10 flex items-center justify-center rounded-full active:bg-amber-50 focus:outline-none" aria-label="Open menu">{Ico.menu()}</button>
      <div className="flex items-center gap-2">
        <SunLogo />
        <div>
          <p className="text-base font-bold leading-none" style={{ color: C.maroon, fontFamily: 'var(--font-display)' }}>BD ASTRO</p>
          <p className="text-xs leading-none mt-0.5" style={{ color: C.textSec }}>Quick Answers | Clear Guidance</p>
        </div>
      </div>
      <button onClick={() => navigate('/notifications')} className="w-10 h-10 flex items-center justify-center rounded-full active:bg-amber-50 focus:outline-none relative" aria-label="Notifications">
        {Ico.bell()}
        <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full text-white flex items-center justify-center font-bold" style={{ background: C.live, fontSize: '9px' }}>3</span>
      </button>
    </header>
  )
}

/* ── Drawer Menu ── */
export function DrawerMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate()
  if (!open) return null
  const items = [
    { label: 'Home', path: '/' }, { label: 'Guruji Profile', path: '/guruji' },
    { label: 'Consult Astrologers', path: '/consult' }, { label: 'Ask Guruji', path: '/ask-guruji' },
    { label: 'Live Darbar', path: '/live-darbar' }, { label: 'Panchang', path: '/panchang' },
    { label: 'Aarti & Bhajans', path: '/aarti' }, { label: 'Seva & Donate', path: '/seva' },
    { label: 'My Profile', path: '/profile' },
  ]
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40 animate-fade-in" onClick={onClose} aria-hidden="true" />
      <nav className="fixed top-0 left-0 bottom-0 z-50 flex flex-col animate-slide-in-left" style={{ width: '280px', background: C.surface }} role="dialog" aria-modal="true">
        <div className="flex items-center justify-between px-4" style={{ borderBottom: `1px solid ${C.border}`, minHeight: '60px', paddingTop: 'max(12px, env(safe-area-inset-top))', paddingBottom: '12px' }}>
          <div className="flex items-center gap-2"><SunLogo /><span className="font-bold text-base" style={{ color: C.maroon, fontFamily: 'var(--font-display)' }}>BD ASTRO</span></div>
          <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-full active:bg-amber-50" aria-label="Close menu">{Ico.close()}</button>
        </div>
        <div className="relative overflow-hidden flex items-center gap-3 px-5 py-4" style={{ background: 'linear-gradient(135deg,#3B0808,#7B1F1F)', minHeight: '80px' }}>
          <div className="absolute right-0 top-0 animate-spin-slow" style={{ opacity: 0.2 }} aria-hidden="true">
            <MandalaIllustration size={100} opacity={1} />
          </div>
          <div className="animate-float" aria-hidden="true"><OmSymbol size={32} color="rgba(255,200,100,0.5)" /></div>
          <div>
            <p className="font-display text-white text-base">Seekers&apos; Path</p>
            <p className="text-xs" style={{ color: 'rgba(255,210,160,0.7)' }}>Your spiritual journey</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-3">
          {items.map((item, idx) => (
            <button key={item.label} onClick={() => { navigate(item.path); onClose() }} className={`w-full text-left px-5 py-3.5 text-sm font-medium transition-colors hover:bg-amber-50 active:bg-amber-100 focus:outline-none animate-fade-in-up delay-${Math.min(idx * 75, 700)}`} style={{ color: C.text }}>{item.label}</button>
          ))}
        </div>
        <div className="px-5 py-4" style={{ borderTop: `1px solid ${C.border}`, paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}>
          <button onClick={() => { navigate('/onboarding'); onClose() }} className="w-full py-3 rounded-full font-semibold text-sm text-white" style={{ background: C.maroon }}>Sign In / Register</button>
        </div>
      </nav>
    </>
  )
}

/* ── Bottom Navigation ── */
export function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const activeId = navItems.find(n => n.path === location.pathname)?.id ?? 'home'
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full z-30 flex items-stretch" style={{ maxWidth: '480px', background: 'rgba(253,248,241,0.90)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderTop: '1px solid rgba(226,205,176,0.7)', boxShadow: '0 -4px 24px rgba(30,14,8,0.10)', paddingBottom: 'env(safe-area-inset-bottom)' }} aria-label="Main navigation">
      {navItems.map(({ id, label, path }) => (
        <button key={id} onClick={() => navigate(path)} className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-all focus:outline-none min-h-[58px] relative active:scale-90" style={{ color: activeId === id ? C.maroon : C.textSec }} aria-label={label} aria-current={activeId === id ? 'page' : undefined}>
          {activeId === id && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full animate-fade-in-scale" style={{ background: C.maroon }} />}
          {activeId === id && <span className="absolute inset-0 rounded-xl animate-ripple pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,31,31,0.08) 0%, transparent 70%)' }} aria-hidden="true" />}
          <span className={`transition-transform duration-200 ${activeId === id ? 'scale-110' : 'scale-100'}`}><NavIco id={id} active={activeId === id} /></span>
          <span className={`text-xs font-medium transition-all duration-200 ${activeId === id ? 'font-bold' : ''}`}>{label}</span>
        </button>
      ))}
    </nav>
  )
}

/* ── Shell Layout (wraps all main pages except live-darbar and onboarding) ── */
export default function Shell() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <ToastProvider>
      <div className="w-full flex flex-col relative" style={{ maxWidth: '480px', minHeight: '100dvh', background: C.bg }}>
        <AppHeader onMenu={() => setMenuOpen(true)} />
        <main className="flex-1 overflow-y-auto" style={{ paddingBottom: '80px' }}>
          <Outlet />
        </main>
        <BottomNav />
        <DrawerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </ToastProvider>
  )
}

/* ── Bare Layout (no header/nav — used for live-darbar, onboarding) ── */
export function BareShell() {
  return (
    <ToastProvider>
      <div className="w-full flex flex-col relative" style={{ maxWidth: '480px', minHeight: '100dvh', background: C.bg }}>
        <Outlet />
      </div>
    </ToastProvider>
  )
}
