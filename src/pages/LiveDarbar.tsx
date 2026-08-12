import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/context/ToastContext'
import { COLORS as C } from '@/data/constants'
import { Ico } from '@/components/icons'
import { MandalaIllustration, ConstellationDots } from '@/components/illustrations'
import { Badge } from '@/components/ui'
import heroGuruji from '@/imports/IMG_0229_1__1_.png'

export default function LiveDarbar() {
  const navigate = useNavigate()
  const toast = useToast()
  const [quality, setQuality] = useState('HD')
  const [muted, setMuted] = useState(false)
  const [liked, setLiked] = useState(false)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([
    { user: 'Pooja S.', text: '🙏 Jai Gurudev!', time: '8:02 PM' },
    { user: 'Rahul M.', text: 'What beautiful teachings today', time: '8:03 PM' },
    { user: 'Meena T.', text: 'Guruji please answer my question about health 🙏', time: '8:04 PM' },
    { user: 'Ankit P.', text: 'Live from Mumbai — so grateful to be here', time: '8:05 PM' },
  ])

  const sendComment = () => {
    if (!comment.trim()) return
    setComments(c => [...c, { user: 'You', text: comment, time: 'now' }])
    setComment('')
  }

  return (
    <div className="flex flex-col h-full" style={{ background: '#0D0804' }}>
      <div className="relative" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <ConstellationDots />
        <img src="https://images.unsplash.com/photo-1774751345322-300b2984254b?w=900&h=500&fit=crop&auto=format" alt="Live stream" className="w-full object-cover" style={{ height: '240px', filter: 'brightness(0.6)' }} />
        <div className="absolute animate-spin-slow" style={{ bottom: '-20px', left: '-20px', opacity: 0.15 }}><MandalaIllustration size={100} opacity={1} /></div>
        <div className="absolute bottom-0 right-4" style={{ width: '100px' }}>
          <img src={heroGuruji} alt="Guruji" className="w-full object-cover object-top" style={{ height: '140px' }} />
        </div>
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.5)' }} aria-label="Back">{Ico.back()}</button>
          <div className="relative"><span className="absolute inset-0 rounded-full animate-ripple" style={{ background: 'rgba(196,30,30,0.4)' }} /><Badge live>LIVE</Badge></div>
          <span className="text-xs text-white font-medium">👁 12,847</span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <button onClick={() => setMuted(m => !m)} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.5)' }} aria-label={muted ? 'Unmute' : 'Mute'}>
            {muted
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14"/></svg>
            }
          </button>
          <select value={quality} onChange={e => setQuality(e.target.value)} className="text-xs font-semibold px-2 py-1 rounded" style={{ background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none' }}>
            {['Auto','HD','SD'].map(q => <option key={q} value={q}>{q}</option>)}
          </select>
        </div>
        <div className="absolute bottom-3 left-3">
          <p className="font-display text-white text-base">Live Darbar</p>
          <p className="text-white/70 text-xs">Guruji's Evening Satsang</p>
        </div>
      </div>

      <div className="flex items-center justify-around py-3 px-4" style={{ background: C.maroonDark, borderBottom: 'rgba(255,255,255,0.08) 1px solid' }}>
        {[
          { label: 'Like', icon: () => Ico.heart(liked), action: () => { setLiked(l => !l); toast(liked ? 'Removed like' : '🙏 Jai Gurudev!') } },
          { label: 'Share', icon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.saffron} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>, action: () => toast('Share link copied') },
          { label: 'Ask Q', icon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.saffron} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>, action: () => toast('Question submitted to Guruji') },
          { label: 'Donate', icon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.saffron} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>, action: () => toast('Opening donation flow…') },
        ].map(({ label, icon, action }) => (
          <button key={label} onClick={action} className="flex flex-col items-center gap-1 active:scale-95 focus:outline-none">
            {icon()}
            <span className="text-xs font-medium" style={{ color: 'rgba(255,200,140,0.8)' }}>{label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2 scrollbar-hide" style={{ background: '#110A05' }}>
        {comments.map((c, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ background: C.maroon }}>{c.user[0]}</div>
            <div><span className="text-xs font-semibold" style={{ color: C.saffron }}>{c.user} </span><span className="text-xs" style={{ color: '#C09070' }}>{c.text}</span></div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 px-3 py-3" style={{ background: '#1A0F0A', borderTop: '1px solid #3D2010', paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
        <input value={comment} onChange={e => setComment(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendComment()} placeholder="Say Jai Gurudev… 🙏" className="flex-1 px-4 py-2.5 rounded-full text-sm focus:outline-none" style={{ background: '#2A1508', color: '#E8D0B0', border: '1px solid #4D2510' }} />
        <button onClick={sendComment} className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: C.maroon }}>{Ico.chat('white')}</button>
      </div>
    </div>
  )
}
