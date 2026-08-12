import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/context/ToastContext'
import { COLORS as C, astrologers, type Astrologer } from '@/data/constants'
import { Ico } from '@/components/icons'
import { ZodiacRingIllustration, ConstellationDots } from '@/components/illustrations'
import { OnlineStatus, Rating, PageHeader, PremiumCard, SecondaryBtn, PrimaryBtn } from '@/components/ui'

export default function Consult() {
  const navigate = useNavigate()
  const toast = useToast()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Rating')
  const [selected, setSelected] = useState<Astrologer | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMsg, setChatMsg] = useState('')
  const [messages, setMessages] = useState<{ from: 'user' | 'astro'; text: string }[]>([
    { from: 'astro', text: 'Namaste 🙏 How may I guide you today?' },
  ])

  const filters = ['All', 'Online', 'Vedic', 'Vastu', 'Numerology', 'Tarot']
  const sorts = ['Rating', 'Price: Low', 'Price: High', 'Experience']

  const filtered = astrologers
    .filter(a => {
      if (search && !a.name.toLowerCase().includes(search.toLowerCase()) && !a.expertise.toLowerCase().includes(search.toLowerCase())) return false
      if (filter === 'Online' && a.status !== 'online') return false
      if (filter !== 'All' && filter !== 'Online' && !a.expertise.toLowerCase().includes(filter.toLowerCase())) return false
      return true
    })
    .sort((a, b) => {
      if (sort === 'Rating') return b.rating - a.rating
      if (sort === 'Price: Low') return a.price - b.price
      if (sort === 'Price: High') return b.price - a.price
      return parseInt(b.experience) - parseInt(a.experience)
    })

  const sendMsg = () => {
    if (!chatMsg.trim()) return
    setMessages(m => [...m, { from: 'user', text: chatMsg }])
    const reply = chatMsg
    setChatMsg('')
    setTimeout(() => setMessages(m => [...m, { from: 'astro', text: `I understand your concern about "${reply}". Let me check your chart…` }]), 1200)
  }

  if (chatOpen && selected) {
    return (
      <div className="flex flex-col h-full" style={{ background: C.bg }}>
        <PageHeader title={selected.name} onBack={() => setChatOpen(false)} />
        <div className="flex items-center gap-3 px-4 py-3" style={{ background: 'rgba(253,248,241,0.9)', borderBottom: `1px solid ${C.border}` }}>
          <img src={selected.img} alt={selected.name} className="w-11 h-11 rounded-full object-cover border-2" style={{ borderColor: C.saffron }} />
          <div className="flex-1"><p className="font-semibold text-sm" style={{ color: C.text }}>{selected.name}</p><OnlineStatus status={selected.status} /></div>
          <div className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ background: C.surfaceMuted, color: C.maroon, border: `1px solid ${C.border}` }}>₹{selected.price}/min</div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-3" style={{ background: C.bg }}>
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2 animate-fade-in-up`}>
              {m.from === 'astro' && <img src={selected.img} alt="" className="w-7 h-7 rounded-full object-cover flex-shrink-0" />}
              <div className="max-w-[78%] px-4 py-3 text-sm leading-relaxed" style={{ background: m.from === 'user' ? C.maroon : C.card, color: m.from === 'user' ? 'white' : C.text, borderRadius: m.from === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px', boxShadow: '0 2px 8px rgba(30,14,8,0.10)' }}>{m.text}</div>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 flex gap-2" style={{ borderTop: `1px solid ${C.border}`, background: 'rgba(253,248,241,0.95)', backdropFilter: 'blur(16px)', paddingBottom: 'max(12px,env(safe-area-inset-bottom))' }}>
          <input value={chatMsg} onChange={e => setChatMsg(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMsg()} placeholder="Ask your question…" className="flex-1 px-4 py-3 rounded-2xl text-sm focus:outline-none" style={{ background: C.surfaceMuted, color: C.text, border: `1px solid ${C.border}` }} />
          <button onClick={sendMsg} className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 active:scale-95" style={{ background: C.maroon, boxShadow: '0 2px 8px rgba(123,31,31,0.30)' }}>{Ico.chat('white')}</button>
        </div>
      </div>
    )
  }

  if (selected) {
    return (
      <div className="flex flex-col h-full overflow-y-auto" style={{ background: C.bg }}>
        <div className="relative">
          <img src={selected.img} alt={selected.name} className="w-full object-cover animate-fade-in-scale" style={{ height: '280px' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,8,4,0.75) 0%, transparent 55%)' }} aria-hidden="true" />
          <button onClick={() => setSelected(null)} className="absolute left-4 w-9 h-9 rounded-full flex items-center justify-center animate-fade-in" style={{ top: 'max(48px, calc(env(safe-area-inset-top) + 12px))', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)' }} aria-label="Back">{Ico.back()}</button>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-display text-2xl text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>{selected.name}</h2>
                <p className="text-sm mt-0.5" style={{ color: 'rgba(255,220,180,0.85)' }}>{selected.expertise}</p>
                <div className="flex items-center gap-3 mt-2"><Rating score={selected.rating} count={selected.reviews} /><OnlineStatus status={selected.status} /></div>
              </div>
              <div className="text-right"><p className="font-bold text-2xl text-white">₹{selected.price}</p><p className="text-xs" style={{ color: 'rgba(255,200,150,0.8)' }}>per min</p></div>
            </div>
          </div>
        </div>
        <div className="px-5 pt-5 pb-36 flex flex-col gap-5">
          <div className="flex gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: C.surfaceMuted, color: C.textSec, border: `1px solid ${C.border}` }}>🕐 {selected.experience}</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: C.surfaceMuted, color: C.textSec, border: `1px solid ${C.border}` }}>🗣 {selected.lang}</span>
          </div>
          <PremiumCard>
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-2" style={{ color: C.text }}>About</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.textSec }}>A renowned astrologer with deep expertise in {selected.expertise}. Known for accurate predictions and compassionate guidance, {selected.name} has helped thousands of seekers find clarity and peace.</p>
            </div>
          </PremiumCard>
          <div>
            <h3 className="font-semibold text-sm mb-3" style={{ color: C.text }}>Specialisations</h3>
            <div className="flex flex-wrap gap-2">{selected.expertise.split(',').map(e => <span key={e} className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'linear-gradient(135deg,#FEF3E8,#FAE0C0)', color: C.maroon, border: `1px solid ${C.border}` }}>{e.trim()}</span>)}</div>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3" style={{ color: C.text }}>Reviews</h3>
            <div className="flex flex-col gap-3">
              {[{ name: 'Pooja S.', txt: 'Amazing insights! He predicted my job change to the week.', rating: 5 }, { name: 'Ankit R.', txt: 'Very patient and thorough. Answered all my questions.', rating: 5 }].map((r, i) => (
                <PremiumCard key={i}>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2"><span className="font-semibold text-sm" style={{ color: C.text }}>{r.name}</span><div className="flex gap-0.5">{Array(r.rating).fill(0).map((_,j) => <span key={j}>{Ico.star()}</span>)}</div></div>
                    <p className="text-xs leading-relaxed" style={{ color: C.textSec }}>{r.txt}</p>
                  </div>
                </PremiumCard>
              ))}
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full px-5 pb-6 pt-4 z-20 flex gap-3" style={{ maxWidth: '480px', background: 'rgba(253,248,241,0.95)', backdropFilter: 'blur(16px)', borderTop: `1px solid ${C.border}` }}>
          <SecondaryBtn onClick={() => toast(`Calling ${selected.name}…`)} full><span className="flex items-center gap-1.5">{Ico.phone(C.maroon)} Call Now</span></SecondaryBtn>
          <PrimaryBtn onClick={() => setChatOpen(true)} full><span className="flex items-center gap-1.5">{Ico.chat('white')} Chat Now</span></PrimaryBtn>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full" style={{ background: C.bg }}>
      <PageHeader title="Consult Astrologers" onBack={() => navigate(-1)} />
      <div className="relative overflow-hidden flex items-center gap-4 px-5 py-4" style={{ background: 'linear-gradient(135deg,#3B0808,#7B1F1F,#8B3A0A)', minHeight: '80px' }}>
        <ConstellationDots />
        <div className="absolute animate-spin-slow pointer-events-none" style={{ right: '-20px', top: '-20px', opacity: 0.25 }} aria-hidden="true"><ZodiacRingIllustration size={130} /></div>
        <div className="relative z-10 animate-float flex-shrink-0" aria-hidden="true"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,200,100,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-1a6 6 0 0112 0v1"/></svg></div>
        <div className="relative z-10 animate-fade-in-up">
          <p className="font-display text-base text-white">Expert Astrologers</p>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(255,210,160,0.8)' }}>{astrologers.filter(a => a.status === 'online').length} online now · Instant guidance</p>
        </div>
      </div>
      <div className="px-4 pt-4 pb-3" style={{ background: 'rgba(253,248,241,0.88)', backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.border}` }}>
        <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl mb-3" style={{ background: C.surfaceMuted, border: `1px solid ${C.border}` }}>
          {Ico.search()}<input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search astrologers, expertise…" className="flex-1 text-sm bg-transparent focus:outline-none" style={{ color: C.text }} />
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {filters.map(f => <button key={f} onClick={() => setFilter(f)} className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold active:scale-95" style={{ background: filter === f ? C.maroon : C.surfaceMuted, color: filter === f ? 'white' : C.textSec, border: `1px solid ${filter === f ? C.maroon : C.border}` }}>{f}</button>)}
        </div>
        <div className="flex items-center gap-2 mt-2.5 flex-wrap">
          <span className="text-xs font-medium" style={{ color: C.textSec }}>Sort:</span>
          {sorts.map(s => <button key={s} onClick={() => setSort(s)} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: sort === s ? C.maroon : 'transparent', color: sort === s ? 'white' : C.textSec, border: `1px solid ${sort === s ? C.maroon : 'transparent'}` }}>{s}</button>)}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4 flex flex-col gap-3">
        {filtered.length === 0 && (
          <PremiumCard className="animate-fade-in-scale">
            <div className="p-8 flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#FEF3E8,#FAE0C0)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <p className="font-display text-lg" style={{ color: C.text }}>No astrologers found</p>
              <p className="text-sm" style={{ color: C.textSec }}>Try a different search or filter</p>
            </div>
          </PremiumCard>
        )}
        {filtered.map((a, idx) => (
          <div key={a.id} role="button" tabIndex={0} onClick={() => setSelected(a)} onKeyDown={e => e.key === 'Enter' && setSelected(a)} className={`overflow-hidden cursor-pointer active:scale-[0.99] focus:outline-none animate-fade-in-up delay-${Math.min(idx * 75, 700)}`} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: '20px', boxShadow: '0 3px 16px rgba(30,14,8,0.09)' }}>
            <div className="flex gap-0">
              <div className="relative flex-shrink-0">
                <img src={a.img} alt={a.name} className="object-cover" style={{ width: '88px', height: '120px' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 70%, rgba(253,248,241,0.4))' }} aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0 p-3.5">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <p className="font-semibold text-sm leading-snug" style={{ color: C.text }}>{a.name}</p>
                  <OnlineStatus status={a.status} />
                </div>
                <p className="text-xs leading-snug" style={{ color: C.textSec }}>{a.expertise}</p>
                <p className="text-xs mt-0.5" style={{ color: C.textSec }}>🕐 {a.experience} · 🗣 {a.lang}</p>
                <div className="flex items-center gap-3 mt-2"><Rating score={a.rating} count={a.reviews} /><span className="text-xs font-bold" style={{ color: C.maroon }}>₹{a.price}/min</span></div>
                <div className="flex gap-2 mt-2.5">
                  <button onClick={e => { e.stopPropagation(); toast(`Calling ${a.name}…`) }} className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold border active:scale-95" style={{ borderColor: C.border, color: C.text, background: C.surface }}>{Ico.phone()} Call</button>
                  <button onClick={e => { e.stopPropagation(); setSelected(a); setTimeout(() => setChatOpen(true), 50) }} className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold active:scale-95" style={{ background: C.maroon, color: 'white', boxShadow: '0 2px 6px rgba(123,31,31,0.25)' }}>{Ico.chat('white')} Chat</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
