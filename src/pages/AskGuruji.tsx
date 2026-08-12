import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/context/ToastContext'
import { COLORS as C } from '@/data/constants'
import { ZodiacRingIllustration, ConstellationDots, OmSymbol } from '@/components/illustrations'
import { PageHeader, PremiumCard, PremiumTabs, PrimaryBtn } from '@/components/ui'
import heroGuruji from '@/imports/IMG_0229_1__1_.png'

export default function AskGuruji() {
  const navigate = useNavigate()
  const toast = useToast()
  const [tab, setTab] = useState<'ask' | 'weekly'>('ask')
  const [question, setQuestion] = useState('')
  const [category, setCategory] = useState('Career')
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const categories = ['Career', 'Relationship', 'Health', 'Finance', 'Marriage', 'Education', 'Spiritual']

  const handleSubmit = () => {
    if (!question.trim()) { toast('Please write your question'); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col h-full overflow-y-auto animate-fade-in">
        <PageHeader title="Ask Guruji" onBack={() => { setSubmitted(false); setQuestion('') }} />
        <div className="relative overflow-hidden flex flex-col items-center justify-center py-10 px-6" style={{ background: 'linear-gradient(160deg,#3B0808,#7B1F1F,#C96B0A)', minHeight: '200px' }}>
          <ConstellationDots />
          <div className="absolute animate-spin-slow pointer-events-none" aria-hidden="true"><ZodiacRingIllustration size={220} /></div>
          <div className="relative z-10 animate-fade-in-scale">
            <div className="w-20 h-20 rounded-full flex items-center justify-center animate-glow-pulse" style={{ background: 'rgba(201,107,10,0.3)', border: '2px solid rgba(255,200,100,0.4)' }}>
              <OmSymbol size={48} color="rgba(255,220,140,0.9)" />
            </div>
          </div>
          <h2 className="font-display text-2xl text-white mt-4 relative z-10 animate-fade-in-up delay-150" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>Question Submitted</h2>
          <p className="text-xs mt-1 relative z-10 animate-fade-in-up delay-200" style={{ color: 'rgba(255,210,160,0.8)' }}>🙏 Jai Gurudev</p>
        </div>
        <div className="flex-1 flex flex-col items-center px-6 pt-6 pb-8 gap-4 text-center animate-fade-in-up delay-300">
          <PremiumCard className="w-full">
            <div className="p-5">
              <p className="text-sm leading-relaxed" style={{ color: C.textSec }}>Your question has been received. Guruji personally reviews selected questions and may answer yours in the next Live Darbar or weekly session.</p>
              <div className="flex items-center justify-center gap-4 mt-4 pt-4" style={{ borderTop: `1px solid ${C.border}` }}>
                {[['📿','Submitted'],['🕐','Under review'],['🎙','May be answered']].map(([e, l]) => (
                  <div key={l} className="text-center"><p className="text-xl">{e}</p><p className="text-xs mt-1 font-medium" style={{ color: C.textSec }}>{l}</p></div>
                ))}
              </div>
            </div>
          </PremiumCard>
          <PrimaryBtn onClick={() => setSubmitted(false)} full>Ask Another Question</PrimaryBtn>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto animate-fade-in">
      <PageHeader title="Ask Guruji" onBack={() => navigate(-1)} />
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#3B0808 0%,#7B1F1F 60%,#C96B0A 100%)', minHeight: '110px' }}>
        <ConstellationDots />
        <div className="absolute animate-spin-slow pointer-events-none" style={{ top: '-20px', right: '-20px', opacity: 0.25 }} aria-hidden="true"><ZodiacRingIllustration size={140} /></div>
        <div className="relative z-10 flex items-center gap-4 px-5 py-5">
          <div className="relative flex-shrink-0 animate-fade-in-scale">
            <div className="absolute inset-0 rounded-full animate-glow-pulse" style={{ background: 'radial-gradient(circle, rgba(201,107,10,0.45) 0%, transparent 70%)' }} aria-hidden="true" />
            <img src={heroGuruji} alt="Guruji" className="w-16 h-16 rounded-full object-cover object-top relative z-10" style={{ border: '2px solid rgba(255,200,100,0.5)' }} />
          </div>
          <div className="animate-fade-in-up delay-150">
            <p className="font-display text-lg text-white" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>Guruji's Guidance</p>
            <p className="text-xs mt-1 leading-relaxed" style={{ color: 'rgba(255,210,160,0.9)', maxWidth: '240px' }}>Submit your question for Guruji's weekly session or Live Darbar.</p>
          </div>
          <div className="ml-auto animate-float" aria-hidden="true"><OmSymbol size={40} color="rgba(255,200,100,0.3)" /></div>
        </div>
      </div>
      <PremiumTabs tabs={[['ask','Submit Question'],['weekly','Weekly Selection']]} active={tab} onChange={t => setTab(t as typeof tab)} />
      {tab === 'ask' ? (
        <div className="px-5 pt-5 pb-8 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold mb-2.5" style={{ color: C.text }}>Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => <button key={c} onClick={() => setCategory(c)} className="px-3.5 py-1.5 rounded-full text-xs font-semibold active:scale-95 transition-all" style={{ background: category === c ? C.maroon : C.surfaceMuted, color: category === c ? 'white' : C.textSec, border: `1px solid ${category === c ? C.maroon : C.border}` }}>{c}</button>)}
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold mb-2" style={{ color: C.text }}>Your Question <span style={{ color: C.live }}>*</span></label>
            <textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder="Write your question clearly. Include relevant context about your situation…" rows={5} className="w-full px-4 py-3 rounded-2xl text-sm resize-none focus:outline-none" style={{ background: C.surfaceMuted, color: C.text, border: `1.5px solid ${question ? C.maroon : C.border}` }} />
            <p className="text-xs mt-1 text-right" style={{ color: C.textSec }}>{question.length}/500</p>
          </div>
          <div>
            <label className="block text-xs font-bold mb-2" style={{ color: C.text }}>Your Name (optional)</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Displayed anonymously if answered" className="w-full px-4 py-3 rounded-2xl text-sm focus:outline-none" style={{ background: C.surfaceMuted, color: C.text, border: `1.5px solid ${C.border}` }} />
          </div>
          <PremiumCard>
            <div className="p-3.5 flex items-start gap-2.5">
              <span className="text-base mt-0.5 flex-shrink-0">🙏</span>
              <p className="text-xs leading-relaxed" style={{ color: C.textSec }}>Guruji personally selects questions to answer. Submitting does not guarantee a response. Your details remain confidential.</p>
            </div>
          </PremiumCard>
          <PrimaryBtn onClick={handleSubmit} full>Submit Question 🙏</PrimaryBtn>
        </div>
      ) : (
        <div className="px-5 pt-5 pb-8 flex flex-col gap-4">
          <PremiumCard>
            <div className="p-4" style={{ background: 'linear-gradient(135deg,rgba(123,31,31,0.05),rgba(201,107,10,0.05))', borderRadius: '20px' }}>
              <h3 className="font-display text-base mb-1.5" style={{ color: C.maroonDark }}>Weekly Guruji Session</h3>
              <p className="text-xs leading-relaxed" style={{ color: C.textSec }}>Each week Guruji selects 5 seekers for a personal 10-minute consultation. Applications are reviewed based on urgency and sincerity.</p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full" style={{ background: 'rgba(123,31,31,0.1)', border: `1px solid rgba(123,31,31,0.2)` }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: C.maroon }} />
                <p className="text-xs font-bold" style={{ color: C.maroon }}>Next selection: May 25, 2025</p>
              </div>
            </div>
          </PremiumCard>
          {[['Your Name', name, setName, 'Full name'], ['Date of Birth', dob, setDob, 'DD/MM/YYYY'], ['Your Question / Situation', question, setQuestion, 'Describe your situation in detail…']].map(([label, value, setter, ph]) => (
            <div key={label as string}>
              <label className="block text-xs font-bold mb-2" style={{ color: C.text }}>{label as string} <span style={{ color: C.live }}>*</span></label>
              {label === 'Your Question / Situation' ? (
                <textarea value={value as string} onChange={e => (setter as React.Dispatch<React.SetStateAction<string>>)(e.target.value)} placeholder={ph as string} rows={4} className="w-full px-4 py-3 rounded-2xl text-sm resize-none focus:outline-none" style={{ background: C.surfaceMuted, color: C.text, border: `1.5px solid ${C.border}` }} />
              ) : (
                <input value={value as string} onChange={e => (setter as React.Dispatch<React.SetStateAction<string>>)(e.target.value)} placeholder={ph as string} className="w-full px-4 py-3 rounded-2xl text-sm focus:outline-none" style={{ background: C.surfaceMuted, color: C.text, border: `1.5px solid ${C.border}` }} />
              )}
            </div>
          ))}
          <PrimaryBtn onClick={() => toast('Application submitted for weekly selection 🙏')} full>Apply for Weekly Selection</PrimaryBtn>
        </div>
      )}
    </div>
  )
}
