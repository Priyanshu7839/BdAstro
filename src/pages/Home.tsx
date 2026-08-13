import { useState, useRef, useEffect } from 'react'
import heroGuruji from '@/imports/IMG_0229_1__1_.png'
import { MessageCircle, ShieldCheck, ShieldLock, User2, UserCheck } from 'lucide-react'
import HanumaChalisaImg from '../assets/HanumanChalisaImg.png'
import PurnimaPujaImg from '../assets/PurnimaPujaImg.png'
import Astrologer1Img from '../assets/Astrologer1Img.png'
import Astrologer2Img from '../assets/Astrologer2Img.png'
import Astrologer3Img from '../assets/Astrologer3Img.png'
import Astrologer4Img from '../assets/Astrologer4Img.png'
import Astrologer5Img from '../assets/Astrologer5Img.png'
import Astrologer6Img from '../assets/Astrologer6Img.jpeg'
import QuotesBabaImg from '../assets/QuotesBabaImg.jpeg'
import LiveDarbarImg from '../assets/LiveDarbarImg.jpeg'

import Lakshmipujaimg from '../assets/lakshmiPujaIMg.png'
import MahamritunjayPujaImg from '../assets/MahamritunjayPujaImg.png'
import NavgrahaPujaImg from '../assets/NavgrahaPujaImg.png'
import GaneshPujaImg from '../assets/GaneshPujaImg.png'

import AnnadanamImg from '../assets/annadanamImg.PNG'
import VidyaDanamImg from '../assets/VidyaDanamImg.PNG'
import GausevaImg from '../assets/GausevaImg.PNG'

import logo from '../assets/logo.png'

/* ═══════════════════════════════════════════════════════════════════════════
   DESIGN TOKENS
══════════════════════════════════════════════════════════════════════════ */
const C = {
  bg: '#F7F0E6',
  surface: '#FFFCF7',
  surfaceMuted: '#F2E9DA',
  maroon: '#7B1F1F',
  maroonDark: '#4E0F0F',
  saffron: '#C96B0A',
  gold: '#A0500A',
  text: '#1E0E08',
  textSec: '#6B4535',
  border: '#E2CDB0',
  success: '#15803D',
  live: '#C41E1E',
  muted: '#EDE0CE',
  card: '#FDF8F1',
}

/* ═══════════════════════════════════════════════════════════════════════════
   MOCK DATA
══════════════════════════════════════════════════════════════════════════ */
const astrologers = [
  { id: 1, name: 'Acharya Vikas Shastri', expertise: 'Vedic Astrologer', experience: '18 yrs', rating: 4.9, reviews: '2.3K', price: 45, status: 'online' as const, lang: 'Hindi, English', img: Astrologer1Img},
  { id: 2, name: 'Ramcharan Trivedi', expertise: 'Jyotish, Vastu, Numerology', experience: '12 yrs', rating: 4.8, reviews: '1.8K', price: 40, status: 'online' as const, lang: 'Hindi, Gujarati', img:Astrologer4Img},
  { id: 3, name: 'Pt. Aditya Ojha', expertise: 'Vedic Astrology, Kundli Analysis', experience: '22 yrs', rating: 4.9, reviews: '1.2K', price: 35, status: 'online' as const, lang: 'Hindi, English', img: Astrologer3Img },
  { id: 4, name: 'Pandit Ramesh Joshi', expertise: 'Prashna Kundli, Muhurta', experience: '15 yrs', rating: 4.7, reviews: '980', price: 50, status: 'busy' as const, lang: 'Hindi, Marathi', img:Astrologer2Img },
  { id: 5, name: 'Rajesh Sharma', expertise: 'Tarot, Numerology', experience: '9 yrs', rating: 4.6, reviews: '750', price: 30, status: 'online' as const, lang: 'Hindi, English', img: Astrologer5Img },
  { id: 6, name: 'Guru Pradeep Das', expertise: 'Lal Kitab, Vastu', experience: '25 yrs', rating: 4.8, reviews: '3.1K', price: 60, status: 'offline' as const, lang: 'Hindi, Bengali', img: Astrologer6Img},
]

const gurujiAnswers = [
  { id: 1, q: 'When will I get a good job?', a: 'Saturn is entering your 10th house in November — career doors open then. Focus on skills now, not shortcuts.', date: 'May 10, 2025', asker: 'Rahul M.' },
  { id: 2, q: 'Should I invest in property this year?', a: 'Jupiter favors property in the second half of 2025. Wait until after Diwali for the best muhurta.', date: 'May 8, 2025', asker: 'Priya S.' },
  { id: 3, q: 'My marriage is facing difficulties. What to do?', a: 'Venus and Mars are in opposition in your chart. Perform Shukra pooja on Fridays for 21 weeks.', date: 'May 5, 2025', asker: 'Amit T.' },
]

const gurujiSchedule = [
  { id: 1, title: 'Live Darbar', date: 'May 23, 2025', time: '8:00 PM – 9:30 PM', type: 'live' },
  { id: 2, title: 'Satsang & Q&A', date: 'May 25, 2025', time: '7:00 PM – 8:00 PM', type: 'online' },
  { id: 3, title: 'Purnima Special Puja', date: 'May 23, 2025', time: '5:00 AM – 6:00 AM', type: 'puja' },
]

const pujas = [
  { id: 1, name: 'Ganesh Pooja', desc: 'Remove obstacles and attract auspicious energy', price: 501, duration: '45 min', img: GaneshPujaImg },
  { id: 2, name: 'Navgraha Shanti', desc: 'Pacify all nine planetary influences', price: 1100, duration: '90 min', img: NavgrahaPujaImg },
  { id: 3, name: 'Lakshmi Pooja', desc: 'Invite prosperity and abundance', price: 751, duration: '60 min', img: Lakshmipujaimg },
  { id: 4, name: 'Mahamrityunjaya Jaap', desc: 'For health, protection, and long life', price: 2100, duration: '120 min', img: MahamritunjayPujaImg },
]

const donationCauses = [
  { id: 1, name: 'Annadanam', desc: 'Feed the needy — daily langar at the ashram', raised: 84200, goal: 100000, suggested: 501,img:AnnadanamImg },
  { id: 2, name: 'Gau Seva', desc: 'Care for cows at our gaushala', raised: 52000, goal: 75000, suggested: 251 ,img:GausevaImg},
  { id: 3, name: 'Vidya Daan', desc: 'Sponsor education for underprivileged children', raised: 31000, goal: 50000, suggested: 1001,img:VidyaDanamImg },
]

const consultationHistory = [
  { id: 1, astrologer: 'Acharya Vikas Shastri', type: 'Chat', date: 'May 12, 2025', duration: '23 min', topic: 'Career & Finance', amount: 1035 },
  { id: 2, astrologer: 'Dr. Neha Trivedi', type: 'Call', date: 'Apr 28, 2025', duration: '15 min', topic: 'Relationship', amount: 600 },
  { id: 3, astrologer: 'Pt. Aditya Shukla', type: 'Chat', date: 'Apr 10, 2025', duration: '31 min', topic: 'Kundli Reading', amount: 1085 },
]

const panchangData = {
  today: { tithi: 'Ashtami', nakshatra: 'Rohini', yoga: 'Shiva', karana: 'Kaulava', sunrise: '5:42 AM', sunset: '7:18 PM', moonrise: '12:34 PM', moonset: '1:08 AM', rahuKaal: '7:30 AM – 9:00 AM' },
  weekDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  dates: [
    { d: 19, tithi: 'Panchami' }, { d: 20, tithi: 'Shashthi' }, { d: 21, tithi: 'Saptami' },
    { d: 22, tithi: 'Ashtami', today: true }, { d: 23, tithi: 'Navami', purnima: false, event: 'Purnima Puja' },
    { d: 24, tithi: 'Dashami' }, { d: 25, tithi: 'Ekadashi' },
  ],
}

const bhajans = [
  { id: 1, title: 'Jai Ganesh Deva', artist: 'Anuradha Paudwal', duration: '5:42', category: 'Ganesh', img: 'https://images.unsplash.com/photo-1772346823487-2ae1e2409c01?w=120&h=120&fit=crop&auto=format' },
  { id: 2, title: 'Hanuman Chalisa', artist: 'Gulshan Kumar', duration: '7:18', category: 'Hanuman', img: 'https://images.unsplash.com/photo-1774751345322-300b2984254b?w=120&h=120&fit=crop&auto=format' },
  { id: 3, title: 'Om Jai Jagdish Hare', artist: 'Lata Mangeshkar', duration: '4:55', category: 'Vishnu', img: 'https://images.unsplash.com/photo-1762795297387-b0b88a635aa6?w=120&h=120&fit=crop&auto=format' },
  { id: 4, title: 'Shiv Tandav Stotram', artist: 'Ravi Shankar', duration: '8:12', category: 'Shiva', img: 'https://images.unsplash.com/photo-1774751403526-39d30322e51b?w=120&h=120&fit=crop&auto=format' },
  { id: 5, title: 'Durga Chalisa', artist: 'Narendra Chanchal', duration: '6:30', category: 'Durga', img: 'https://images.unsplash.com/photo-1772346823487-2ae1e2409c01?w=120&h=120&fit=crop&auto=format' },
  { id: 6, title: 'Lakshmi Aarti', artist: 'Anuradha Paudwal', duration: '3:48', category: 'Lakshmi', img: 'https://images.unsplash.com/photo-1774751345322-300b2984254b?w=120&h=120&fit=crop&auto=format' },
]

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'guruji', label: 'Guruji' },
  { id: 'consult', label: 'Consult' },
  { id: 'seva', label: 'Seva' },
  { id: 'profile', label: 'Profile' },
]

const serviceScreenMap: Record<string, string> = {
  consult: 'consult', ask: 'ask-guruji', live: 'live-darbar',
  daily: 'daily-horoscope', panchang: 'panchang', aarti: 'aarti', seva: 'seva', puja: 'seva',
}

/* ═══════════════════════════════════════════════════════════════════════════
   ICONS
══════════════════════════════════════════════════════════════════════════ */
function SunLogo() {
  return (
    <div className="animate-spin-slow" style={{ animationDuration: '20s' }}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="8" fill={C.saffron} />
      {[0,45,90,135,180,225,270,315].map((deg) => (
        <line key={deg} x1={18+10*Math.cos(deg*Math.PI/180)} y1={18+10*Math.sin(deg*Math.PI/180)} x2={18+14*Math.cos(deg*Math.PI/180)} y2={18+14*Math.sin(deg*Math.PI/180)} stroke={C.maroon} strokeWidth="2" strokeLinecap="round" />
      ))}
      <text x="18" y="22" textAnchor="middle" fontSize="8" fontWeight="700" fill={C.maroonDark} fontFamily="serif">उ</text>
    </svg>
    </div>
  )
}
const Ico = {
  star: () => <svg width="12" height="12" viewBox="0 0 12 12" fill={C.saffron}><polygon points="6,1 7.5,4.5 11,4.8 8.5,7 9.3,10.5 6,8.5 2.7,10.5 3.5,7 1,4.8 4.5,4.5"/></svg>,
  verified: () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill={C.saffron}/><polyline points="4.5,8 7,10.5 11.5,5.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  phone: (color='currentColor') => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 016 12a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  chat: (color='currentColor') => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  bell: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>,
  menu: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  close: (color=C.text) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  back: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/></svg>,
  play: (color='currentColor') => <svg width="18" height="18" viewBox="0 0 24 24" fill={color}><polygon points="5,3 19,12 5,21"/></svg>,
  pause: (color='currentColor') => <svg width="18" height="18" viewBox="0 0 24 24" fill={color}><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>,
  skipNext: () => <svg width="20" height="20" viewBox="0 0 24 24" fill={C.text}><polygon points="5,4 15,12 5,20"/><line x1="19" y1="4" x2="19" y2="20" stroke={C.text} strokeWidth="2" strokeLinecap="round"/></svg>,
  skipPrev: () => <svg width="20" height="20" viewBox="0 0 24 24" fill={C.text}><polygon points="19,4 9,12 19,20"/><line x1="5" y1="4" x2="5" y2="20" stroke={C.text} strokeWidth="2" strokeLinecap="round"/></svg>,
  quote: () => <svg width="20" height="20" viewBox="0 0 24 24" fill={C.saffron} opacity="0.6"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>,
  shield: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.saffron} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/></svg>,
  clock: (color=C.saffron) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
  check: (color=C.success) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>,
  arrowRight: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>,
  search: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.textSec} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  filter: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"/></svg>,
  sun: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.saffron} strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  moon: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>,
  heart: (filled=false) => <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? C.live : 'none'} stroke={C.live} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  music: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
  volume: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14"/></svg>,
  user: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  wallet: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 3.13a4 4 0 010 7.75"/><circle cx="16" cy="13" r="1.5" fill={C.maroon}/></svg>,
  kundli: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="3" x2="21" y2="21"/><line x1="21" y1="3" x2="3" y2="21"/></svg>,
  settings: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.textSec} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  eye: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.textSec} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  edit: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
}

// Nav icons
function NavIco({ id, active }: { id: string; active: boolean }) {
  const s = active ? C.maroon : C.textSec
  const f = active ? C.maroon : 'none'
  const paths: Record<string, JSX.Element> = {
    home: <svg width="22" height="22" viewBox="0 0 24 24" fill={f} stroke={s} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
    guruji: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-1a6 6 0 0112 0v1"/></svg>,
    consult: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>,
    seva: <svg width="22" height="22" viewBox="0 0 24 24" fill={f} stroke={s} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    profile: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={s} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  }
  return paths[id] || paths.home
}

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED UI PRIMITIVES
══════════════════════════════════════════════════════════════════════════ */
function Badge({ children, live, saffron }: { children: React.ReactNode; live?: boolean; saffron?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: live ? C.live : saffron ? C.saffron : C.maroon, color: 'white' }}>
      {live && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />}
      {children}
    </span>
  )
}

function OnlineStatus({ status }: { status: 'online' | 'busy' | 'offline' }) {
  const m = { online: { color: C.success, label: 'Online' }, busy: { color: C.saffron, label: 'Busy' }, offline: { color: C.textSec, label: 'Offline' } }
  const { color, label } = m[status]
  return <span className="flex items-center gap-1 text-xs font-medium" style={{ color }}><span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />{label}</span>
}

function Rating({ score, count }: { score: number; count: string }) {
  return (
    <span className="flex items-center gap-1">
      {Ico.star()}
      <span className="text-xs font-semibold" style={{ color: C.text }}>{score}</span>
      <span className="text-xs" style={{ color: C.textSec }}>({count})</span>
    </span>
  )
}

function PrimaryBtn({ children, onClick, full, small }: { children: React.ReactNode; onClick?: () => void; full?: boolean; small?: boolean }) {
  return (
    <button onClick={onClick} className={`flex items-center justify-center gap-2 font-semibold rounded-full transition-all active:scale-95 focus:outline-none focus-visible:ring-2 ${full ? 'w-full' : ''}`}
      style={{ background: C.maroon, color: 'white', padding: small ? '8px 16px' : '12px 20px', fontSize: small ? '13px' : '14px', minHeight: '44px', boxShadow: '0 2px 8px rgba(123,31,31,0.22)' }}>
      {children}
    </button>
  )
}

function SecondaryBtn({ children, onClick, full, small }: { children: React.ReactNode; onClick?: () => void; full?: boolean; small?: boolean }) {
  return (
    <button onClick={onClick} className={`flex items-center justify-center gap-2 font-semibold rounded-full border transition-all active:scale-95 focus:outline-none focus-visible:ring-2 ${full ? 'w-full' : ''}`}
      style={{ background: 'white', color: C.maroon, borderColor: C.maroon, padding: small ? '8px 16px' : '12px 20px', fontSize: small ? '13px' : '14px', minHeight: '44px' }}>
      {children}
    </button>
  )
}

function SectionHeader({ title, onViewAll }: { title: string; onViewAll?: () => void }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="font-display text-xl" style={{ color: C.text, letterSpacing: '-0.01em' }}>{title}</h2>
      {onViewAll && <button onClick={onViewAll} className="flex items-center gap-1 text-xs font-semibold active:opacity-60 px-3 py-1.5 rounded-full whitespace-nowrap" style={{ color: C.maroon, background: C.surfaceMuted, border: `1px solid ${C.border}` }}>View All {Ico.arrowRight()}</button>}
    </div>
  )
}

function Divider() {
  return <div style={{ height: '1px', background: C.border, margin: '4px 0' }} aria-hidden="true" />
}

function PageHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 px-4" style={{ background: 'rgba(253,248,241,0.88)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: `1px solid rgba(226,205,176,0.6)`, minHeight: '60px', paddingTop: 'max(12px, env(safe-area-inset-top))', paddingBottom: '12px', boxShadow: '0 1px 0 rgba(226,205,176,0.8), 0 4px 12px rgba(30,14,8,0.05)' }}>
      <button onClick={onBack} className="w-9 h-9 flex items-center justify-center rounded-full active:scale-95 focus:outline-none flex-shrink-0" style={{ background: C.surfaceMuted, border: `1px solid ${C.border}` }} aria-label="Go back">{Ico.back()}</button>
      <h1 className="font-display text-lg" style={{ color: C.text, letterSpacing: '-0.01em' }}>{title}</h1>
    </header>
  )
}

function PremiumTabs({ tabs, active, onChange }: { tabs: [string, string][]; active: string; onChange: (t: string) => void }) {
  return (
    <div className="flex px-4 py-3 gap-2" style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
      {tabs.map(([t, l]) => (
        <button key={t} onClick={() => onChange(t)} className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all active:scale-95 focus:outline-none" style={{ background: active === t ? C.maroon : C.surfaceMuted, color: active === t ? 'white' : C.textSec, boxShadow: active === t ? '0 2px 8px rgba(123,31,31,0.25)' : 'none', border: `1px solid ${active === t ? C.maroon : C.border}` }}>{l}</button>
      ))}
    </div>
  )
}

function PremiumCard({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  const base: React.CSSProperties = { background: C.card, border: `1px solid ${C.border}`, borderRadius: '20px', boxShadow: '0 3px 16px rgba(30,14,8,0.09)' }
  if (onClick) return <button onClick={onClick} className={`text-left w-full active:scale-[0.99] focus:outline-none ${className || ''}`} style={base}>{children}</button>
  return <div className={className} style={base}>{children}</div>
}

/* ── Illustrations ── */
function MandalaIllustration({ size = 160, opacity = 0.18 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" fill="none" style={{ opacity }} aria-hidden="true">
      {/* Outer ring */}
      <circle cx="80" cy="80" r="76" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" />
      <circle cx="80" cy="80" r="64" stroke="currentColor" strokeWidth="0.5" />
      {/* 12 petals */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180
        const x = 80 + 52 * Math.sin(a)
        const y = 80 - 52 * Math.cos(a)
        return <ellipse key={i} cx={x} cy={y} rx="6" ry="10" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" transform={`rotate(${i * 30},${x},${y})`} />
      })}
      {/* Inner lotus petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180
        const x = 80 + 30 * Math.sin(a)
        const y = 80 - 30 * Math.cos(a)
        return <ellipse key={i} cx={x} cy={y} rx="5" ry="9" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.2" transform={`rotate(${i * 45},${x},${y})`} />
      })}
      {/* Mid rings */}
      <circle cx="80" cy="80" r="38" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
      <circle cx="80" cy="80" r="22" stroke="currentColor" strokeWidth="0.8" />
      {/* Star of david */}
      <polygon points="80,52 93,74 67,74" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.1" />
      <polygon points="80,108 67,86 93,86" stroke="currentColor" strokeWidth="0.7" fill="currentColor" fillOpacity="0.1" />
      {/* Center dot */}
      <circle cx="80" cy="80" r="4" fill="currentColor" fillOpacity="0.5" />
      <circle cx="80" cy="80" r="8" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  )
}

function ZodiacRingIllustration({ size = 200 }: { size?: number }) {
  const signs = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓']
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden="true" style={{ overflow: 'visible' }}>
      <circle cx="100" cy="100" r="88" stroke="rgba(255,200,100,0.2)" strokeWidth="1" strokeDasharray="3 6" />
      <circle cx="100" cy="100" r="72" stroke="rgba(255,200,100,0.15)" strokeWidth="0.5" />
      {signs.map((sign, i) => {
        const a = ((i * 30 - 90) * Math.PI) / 180
        const x = 100 + 80 * Math.cos(a)
        const y = 100 + 80 * Math.sin(a)
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="13" fill="rgba(255,200,100,0.55)">{sign}</text>
        )
      })}
      {/* Spoke lines */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = ((i * 30 - 90) * Math.PI) / 180
        return <line key={i} x1={100 + 60 * Math.cos(a)} y1={100 + 60 * Math.sin(a)} x2={100 + 68 * Math.cos(a)} y2={100 + 68 * Math.sin(a)} stroke="rgba(255,200,100,0.25)" strokeWidth="0.8" />
      })}
      <circle cx="100" cy="100" r="18" stroke="rgba(255,200,100,0.3)" strokeWidth="0.8" />
      <text x="100" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="rgba(255,200,100,0.7)">☀</text>
    </svg>
  )
}

function ConstellationDots({ className }: { className?: string }) {
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

function OmSymbol({ size = 48, color = 'rgba(255,200,100,0.5)' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <text x="24" y="34" textAnchor="middle" fontSize="32" fill={color} fontFamily="serif">ॐ</text>
    </svg>
  )
}

function WaveBars({ playing, color = C.maroon }: { playing: boolean; color?: string }) {
  return (
    <div className="flex items-center gap-0.5" style={{ height: '18px' }} aria-hidden="true">
      {[1,2,3,4,5].map(i => (
        <div key={i} className={playing ? `animate-wave-${i}` : ''} style={{ width: '3px', height: '100%', background: color, borderRadius: '2px', transformOrigin: 'bottom', transform: playing ? undefined : 'scaleY(0.3)', opacity: playing ? 1 : 0.4, transition: 'opacity 0.3s' }} />
      ))}
    </div>
  )
}

function Toast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => { const t = setTimeout(onDone, 2600); return () => clearTimeout(t) }, [message])
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full text-sm font-medium text-white shadow-lg animate-fade-in whitespace-nowrap" style={{ background: C.maroonDark }} role="status" aria-live="polite">
      {message}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   APP HEADER
══════════════════════════════════════════════════════════════════════════ */
function AppHeader({ onMenu, onNotification }: { onMenu: () => void; onNotification: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4" style={{ background: 'rgba(253,248,241,0.82)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: `1px solid rgba(226,205,176,0.6)`, minHeight: '64px', paddingTop: 'max(12px, env(safe-area-inset-top))', paddingBottom: '12px', boxShadow: '0 1px 0 rgba(226,205,176,0.8), 0 4px 16px rgba(30,14,8,0.05)' }}>
     <div className="flex items-center gap-1">
       <button onClick={onMenu} className="w-10 h-10 flex items-center justify-center rounded-full active:bg-amber-50 focus:outline-none" aria-label="Open menu">{Ico.menu()}</button>
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className='w-[10%] rounded-2xl' />
        <div>
          <p className="text-base font-bold leading-none" style={{ color: C.maroon }}>BD ASTRO</p>
          <p className="text-xs leading-none mt-0.5" style={{ color: C.textSec }}>Quick Answers | Clear Guidance</p>
        </div>
      </div>
     </div>
      <button onClick={onNotification} className="w-10 h-10 flex items-center justify-center rounded-full active:bg-amber-50 focus:outline-none relative" aria-label="Notifications, 3 unread">
        {Ico.bell()}
        <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full text-white flex items-center justify-center font-bold" style={{ background: C.live, fontSize: '9px' }}>3</span>
      </button>
    </header>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   DRAWER MENU
══════════════════════════════════════════════════════════════════════════ */
function DrawerMenu({ open, onClose, onNav }: { open: boolean; onClose: () => void; onNav: (s: string) => void }) {
  if (!open) return null
  const items = [
    { label: 'Home', screen: 'home' }, { label: 'Guruji Profile', screen: 'guruji' },
    { label: 'Consult Astrologers', screen: 'consult' }, { label: 'Ask Guruji', screen: 'ask-guruji' },
    { label: 'Live Darbar', screen: 'live-darbar' }, { label: 'Panchang', screen: 'panchang' },
    { label: 'Aarti & Bhajans', screen: 'aarti' }, { label: 'Seva & Donate', screen: 'seva' },
    { label: 'My Profile', screen: 'profile' },
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
            <button key={item.label} onClick={() => { onNav(item.screen); onClose() }} className={`w-full text-left px-5 py-3.5 text-sm font-medium transition-colors hover:bg-amber-50 active:bg-amber-100 focus:outline-none animate-fade-in-up delay-${Math.min(idx * 75, 700)}`} style={{ color: C.text }}>{item.label}</button>
          ))}
        </div>
        <div className="px-5 py-4" style={{ borderTop: `1px solid ${C.border}`, paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}>
          <button onClick={() => { onNav('onboarding'); onClose() }} className="w-full py-3 rounded-full font-semibold text-sm text-white" style={{ background: C.maroon }}>Sign In / Register</button>
        </div>
      </nav>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   BOTTOM NAVIGATION
══════════════════════════════════════════════════════════════════════════ */
function BottomNav({ active, onNav }: { active: string; onNav: (id: string) => void }) {
  const mainNav = active === 'home' || navItems.some(n => n.id === active)
  const activeId = mainNav ? active : navItems[0].id
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full z-30 flex items-stretch" style={{ maxWidth: '480px', background: 'rgba(253,248,241,0.90)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderTop: `1px solid rgba(226,205,176,0.7)`, boxShadow: '0 -4px 24px rgba(30,14,8,0.10)', paddingBottom: 'env(safe-area-inset-bottom)' }} aria-label="Main navigation">
      {navItems.map(({ id, label }) => (
        <button key={id} onClick={() => onNav(id)} className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-all focus:outline-none min-h-[58px] relative active:scale-90" style={{ color: activeId === id ? C.maroon : C.textSec }} aria-label={label} aria-current={activeId === id ? 'page' : undefined}>
          {activeId === id && <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full animate-fade-in-scale" style={{ background: C.maroon }} />}
          {activeId === id && <span className="absolute inset-0 rounded-xl animate-ripple pointer-events-none" style={{ background: `radial-gradient(circle, rgba(123,31,31,0.08) 0%, transparent 70%)` }} aria-hidden="true" />}
          <span className={`transition-transform duration-200 ${activeId === id ? 'scale-110' : 'scale-100'}`}><NavIco id={id} active={activeId === id} /></span>
          <span className={`text-xs font-medium transition-all duration-200 ${activeId === id ? 'font-bold' : ''}`}>{label}</span>
        </button>
      ))}
    </nav>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   HOME SCREEN
══════════════════════════════════════════════════════════════════════════ */
const services = [
  { id: 'consult', label: 'Consult', icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg> },
  { id: 'ask', label: 'Ask Guruji', icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
  { id: 'live', label: 'Live Darbar', icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23,7 16,12 23,17"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
  { id: 'daily', label: 'Daily Message', icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { id: 'panchang', label: 'Panchang', icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { id: 'aarti', label: 'Aarti & Bhajans', icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg> },
  { id: 'seva', label: 'Seva & Donate', icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg> },
  { id: 'puja', label: 'Special Puja', icon: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"/><circle cx="12" cy="9" r="2.5" fill={C.saffron} stroke="none"/></svg> },
]

const events = [
  { id: 1, title: 'Purnima Special Puja', date: 'May 23, 2025, Friday', time: '8:00 PM', img: PurnimaPujaImg },
  { id: 2, title: 'Hanuman Chalisa Path', date: 'May 24, 2025, Saturday', time: '7:00 PM', img: HanumaChalisaImg
   },
]

function HomeScreen({ onNav, toast }: { onNav: (s: string) => void; toast: (m: string) => void }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '340px', background: 'linear-gradient(160deg, #3B0808 0%, #7B1F1F 45%, #C96B0A 100%)' }}>
        {/* Constellation field */}
        <ConstellationDots />
        {/* Spinning zodiac ring — back layer */}
        <div className="absolute animate-spin-slow" style={{ top: '-30px', right: '-30px', opacity: 0.22 }} aria-hidden="true">
          <ZodiacRingIllustration size={200} />
        </div>
        {/* Slow-counter-spin mandala */}
        <div className="absolute animate-spin-reverse" style={{ bottom: '-20px', left: '-20px', color: 'rgba(255,210,140,1)' }} aria-hidden="true">
          <MandalaIllustration size={140} opacity={0.14} />
        </div>
        {/* Temple texture overlay */}
        <div className="absolute inset-0" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1774751403526-39d30322e51b?w=900&h=600&fit=crop&auto=format')`, backgroundSize: 'cover', backgroundPosition: 'center 30%', opacity: 0.14, mixBlendMode: 'luminosity' }} aria-hidden="true" />
        {/* Warm vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(90,18,18,0.0) 0%, rgba(30,8,4,0.55) 100%)' }} aria-hidden="true" />
        {/* Guruji portrait — right, full-height bleed */}
        <div className="absolute bottom-0 right-0 animate-fade-in delay-300" style={{ width: '55%', maxWidth: '240px' }} aria-hidden="true">
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(90,18,18,0.7) 0%, transparent 40%)', zIndex: 1 }} />
          <img src={heroGuruji} alt="" className="w-full object-cover object-top" style={{ height: '340px', display: 'block' }} />
        </div>
        {/* Content */}
        <div className="relative z-10 px-5 pt-10 pb-10" style={{ maxWidth: '62%' }}>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-4 animate-fade-in-up" style={{ background: 'rgba(201,107,10,0.25)', border: '1px solid rgba(201,107,10,0.4)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
            <span className="text-xs font-semibold text-amber-300">Guruji Online Now</span>
          </div>
          <h1 className="font-display leading-tight mb-3 text-white animate-fade-in-up delay-150" style={{ fontSize: 'clamp(20px,5.8vw,27px)', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>When your mind is full of questions, guidance stands with you.</h1>
          <p className="text-sm leading-relaxed mb-6 animate-fade-in-up delay-300" style={{ color: 'rgba(255,235,200,0.80)' }}>Personalized astrological guidance based on your birth details.</p>
          <div className="flex flex-col gap-2.5 animate-fade-in-up delay-400">
            <button onClick={() => onNav('consult')} className="flex items-center justify-center gap-2 font-semibold rounded-full px-5 text-sm active:scale-95 focus:outline-none" style={{ background: 'white', color: C.maroonDark, minHeight: '44px', boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }}>
              {Ico.phone(C.maroonDark)} Get Guidance Now
            </button>
            <button onClick={() => onNav('ask-guruji')} className="flex items-center justify-center gap-2 font-semibold rounded-full px-5 text-sm active:scale-95 focus:outline-none" style={{ background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.35)', color: 'white', minHeight: '44px', backdropFilter: 'blur(8px)' }}>
              {Ico.chat('white')} Ask Guruji
            </button>
          </div>
        </div>
        {/* Floating Om symbol */}
        <div className="absolute animate-float" style={{ top: '20px', left: '58%', zIndex: 5 }} aria-hidden="true">
          <OmSymbol size={36} color="rgba(255,200,100,0.35)" />
        </div>

        {/* ── Trust strip — inside hero so glass blurs against dark gradient ── */}
        <div className="relative z-10 px-4 pb-5 animate-fade-in delay-500">
          <div className="flex items-stretch rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.35)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 32px rgba(0,0,0,0.3)' }}>
            {[
              { icon: <ShieldLock className='text-amber-300'/>, t: '100% Private', s: 'Your data is secure' },
              { icon: <MessageCircle className='text-amber-300'/>, t: 'Instant Answers', s: 'Minutes, not days' },
              { icon: <UserCheck className='text-amber-300'/>, t: 'Verified Experts', s: 'Certified astrologers' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-2 flex-1 py-4 px-2 text-center relative">
                {i > 0 && <div className="absolute left-0 top-4 bottom-4" style={{ width: '1px', background: 'rgba(255,255,255,0.25)' }} aria-hidden="true" />}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:C.maroon , border: '1px solid rgba(255,200,100,0.4)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-xs leading-none text-white" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>{item.t}</p>
                  <p className="leading-none mt-1" style={{ color: 'rgba(255,220,170,0.9)', fontSize: '9.5px' }}>{item.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Astrologer carousel ── */}
      <section className="pt-6 pb-3 px-5">
        <div className=" mb-4 animate-fade-in-up delay-200"><SectionHeader title="Consult Expert Astrologers" onViewAll={() => onNav('consult')} /></div>
        <div className="flex gap-4 overflow-x-auto snap-x scrollbar-hide  pb-2">
          {astrologers.slice(0,4).map((a, idx) => (
            <div key={a.id} className={`snap-start flex-shrink-0 rounded-3xl overflow-hidden animate-fade-in-up`} style={{ width: '200px', background: C.card, border: `1px solid ${C.border}`, boxShadow: '0 4px 20px rgba(30,14,8,0.10)', animationDelay: `${300 + idx * 80}ms` }}>
              <div className="relative">
                <img src={a.img} alt={a.name} className="w-full object-cover" style={{ height: '160px' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,8,4,0.55) 0%, transparent 50%)' }} aria-hidden="true" />
                <div className="absolute top-2.5 left-2.5"><OnlineStatus status={a.status} /></div>
                <div className="absolute top-2.5 right-2.5">{Ico.verified()}</div>
                <div className="absolute bottom-2 left-3 right-3">
                  <p className="font-semibold text-sm text-white leading-snug" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{a.name}</p>
                  <p className="text-xs text-white/75 mt-0.5 line-clamp-1">{a.expertise}</p>
                </div>
              </div>
              <div className="px-3 pt-2.5 pb-3">
                <div className="flex items-center justify-between mb-3">
                  <Rating score={a.rating} count={a.reviews} />
                  <span className="font-bold text-sm" style={{ color: C.maroon }}>₹{a.price}/min</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => toast(`Calling ${a.name}…`)} className="flex-1 flex items-center justify-center gap-1 py-2 rounded-full border text-xs font-semibold active:scale-95 focus:outline-none" style={{ borderColor: C.border, color: C.text, background: C.surface }}>{Ico.phone()} Call</button>
                  <button onClick={() => toast(`Chatting with ${a.name}…`)} className="flex-1 flex items-center justify-center gap-1 py-2 rounded-full text-xs font-semibold active:scale-95 focus:outline-none" style={{ background: C.maroon, color: 'white', boxShadow: '0 2px 8px rgba(123,31,31,0.30)' }}>{Ico.chat('white')} Chat</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-2" aria-hidden="true">
          {[0,1,2,3].map(i => <span key={i} style={{ width: i === 0 ? '20px' : '6px', height: '6px', borderRadius: '4px', background: i === 0 ? C.maroon : C.border, display: 'inline-block', transition: 'width 0.2s' }} />)}
        </div>
      </section>

      {/* ── Service grid ── */}
      <section className="mx-4 my-3 rounded-3xl overflow-hidden relative animate-fade-in-scale delay-400" style={{ background: 'linear-gradient(160deg,#2A0808 0%,#5A1212 50%,#8B3A0A 100%)', boxShadow: '0 12px 40px rgba(30,8,4,0.28), inset 0 1px 0 rgba(255,180,80,0.15)' }}>
        {/* Spinning mandala background */}
        <div className="absolute animate-spin-slow pointer-events-none" style={{ top: '-30px', right: '-30px', color: 'rgba(255,200,100,1)' }} aria-hidden="true">
          <MandalaIllustration size={130} opacity={0.18} />
        </div>
        <div className="absolute animate-spin-reverse pointer-events-none" style={{ bottom: '-25px', left: '-25px', color: 'rgba(255,200,100,1)' }} aria-hidden="true">
          <MandalaIllustration size={100} opacity={0.12} />
        </div>
        <div className="relative z-10 px-4 pt-5 pb-5">
          <div className="flex items-center justify-center gap-2 mb-4">
            <OmSymbol size={22} color="rgba(255,200,100,0.55)" />
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: 'rgba(255,200,120,0.65)', letterSpacing: '0.12em' }}>Our Services</p>
            <OmSymbol size={22} color="rgba(255,200,100,0.55)" />
          </div>
          <div className="grid grid-cols-4 gap-2.5">
            {services.map(s => (
              <button key={s.id} onClick={() => onNav(serviceScreenMap[s.id] || s.id)} className="flex flex-col items-center gap-2 py-3.5 rounded-2xl active:scale-95 focus:outline-none transition-all" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,rgba(201,107,10,0.35),rgba(123,31,31,0.35))', border: '1px solid rgba(255,180,80,0.25)', boxShadow: '0 0 14px rgba(201,107,10,0.2), inset 0 1px 0 rgba(255,220,140,0.2)' }}>
                  <div style={{ filter: 'brightness(0) invert(1) opacity(0.9)' }}>{s.icon()}</div>
                </div>
                <span className="font-semibold text-center leading-tight px-0.5" style={{ color: 'rgba(255,230,190,0.9)', fontSize: '9.5px' }}>{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Live Darbar + Guruji Message ── */}
      <section className="px-5 pt-5 pb-3 grid grid-cols-1 gap-3">
        <button onClick={() => onNav('live-darbar')} className="relative overflow-hidden rounded-3xl text-left active:scale-[0.98] focus:outline-none" style={{ background: '#1E0804', boxShadow: '0 8px 24px rgba(30,8,4,0.25)' }}>
          <img src={LiveDarbarImg} alt="" className="absolute inset-0 w-full h-full object-cover "/>
         
          <div className="relative z-10 p-3.5 flex  flex-col justify-between h-full" style={{ minHeight: '180px' }}>
            <div className="flex items-start justify-between">
              <Badge live>LIVE</Badge>
              <span className="text-xs text-white/60 font-medium">👁 12.4K</span>
            </div>
            <div className='flex flex-col items-end'>
              <h3 className="font-bold text-xl text-white leading-tight" >Live Darbar</h3>
              <p className="text-xs mt-1 text-white" >With Guruji</p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: C.saffron, color: 'white', boxShadow: '0 2px 8px rgba(201,107,10,0.4)' }}>{Ico.play('white')} Watch</div>
            </div>
          </div>
        </button>
        <div className="rounded-3xl overflow-hidden flex flex-col" style={{ background: 'linear-gradient(160deg,#FEF3E8,#F9E4C4)', border: `1px solid ${C.border}`, boxShadow: '0 4px 16px rgba(30,14,8,0.08)' }}>
          <div className="flex-1 p-3.5 absolute max-[418px]:w-[45%]  w-[35%] max-[418px]:right-19 right-30">
            <h3 className="font-display text-base leading-snug mb-2" style={{ color: C.maroonDark }}>Guruji's Message</h3>
            
            <p className="text-xs leading-relaxed mt-1.5" style={{ color: C.text }}>Be patient, keep faith, and make the right decision at the right time.</p>
            <p className="text-xs font-bold mt-2" style={{ color: C.maroon }}>— Guruji</p>
          </div>
          <img src={QuotesBabaImg} alt="Guruji" className="w-full object-cover h-[180px]"  />
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="px-5 pt-5 pb-3">
        <SectionHeader title="Upcoming Events" onViewAll={() => toast('Loading all events…')} />
        <div className="flex flex-col gap-3">
          {events.map((e, idx) => (
            <div key={e.id} className="rounded-2xl overflow-hidden flex items-stretch animate-fade-in-up" style={{ background: C.card, border: `1px solid ${C.border}`, boxShadow: '0 3px 12px rgba(30,14,8,0.08)', animationDelay: `${idx * 100}ms` }}>
              <div className="relative flex-shrink-0" style={{ width: '150px' }}>
                <img src={e.img} alt={e.title} className="w-full h-full object-cover" />
                {/* <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, rgba(253,248,241,0.3))' }} aria-hidden="true" /> */}
              </div>
              <div className="flex flex-col justify-start py-3.5 pr-4 flex-1 gap-1 pl-3.5">
                <h4 className="font-semibold text-xl leading-snug" style={{ color: C.text }}>{e.title}</h4>
                <p className="text-xs" style={{ color: C.textSec }}>📅 {e.date}</p>
                <p className="text-xs" style={{ color: C.textSec }}>⏰ {e.time}</p>
                <button onClick={() => toast(`Booking ${e.title}…`)} className="mt-2 self-start px-4 py-1.5 rounded-full text-xs font-semibold active:scale-95" style={{ background: C.maroon, color: 'white', boxShadow: '0 2px 8px rgba(123,31,31,0.25)' }}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Kundli promo ── */}
      <section className="px-5 pt-4 pb-8">
        <div className="rounded-3xl overflow-hidden relative animate-fade-in-scale delay-200" style={{ background: 'linear-gradient(135deg, #4E0F0F 0%, #7B1F1F 60%, #C96B0A 100%)', boxShadow: '0 8px 24px rgba(78,15,15,0.30)' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1772346823487-2ae1e2409c01?w=600&h=300&fit=crop&auto=format')`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
          {/* Constellation overlay */}
          <ConstellationDots />
          {/* Floating zodiac */}
          <div className="absolute right-2 top-2 animate-spin-slow" style={{ opacity: 0.2 }} aria-hidden="true">
            <ZodiacRingIllustration size={90} />
          </div>
          <div className="relative z-10 flex items-center gap-3 p-4">
            <div className="flex-1">
              <p className="text-xs font-semibold text-amber-300 mb-1 tracking-wide uppercase" style={{ fontSize: '10px' }}>Free Report</p>
              <h3 className="font-display text-lg text-white leading-snug">Know Your Kundli</h3>
              <p className="text-xs mt-1 leading-snug" style={{ color: 'rgba(255,220,180,0.80)' }}>Birth chart · Planetary periods · Predictions</p>
            </div>
            <button onClick={() => toast('Creating your Kundli…')} className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-2xl font-semibold text-sm active:scale-95 focus:outline-none" style={{ background: 'white', color: C.maroonDark, boxShadow: '0 4px 12px rgba(0,0,0,0.25)' }}>
              Create {Ico.arrowRight()}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   CONSULT SCREEN
══════════════════════════════════════════════════════════════════════════ */
function ConsultScreen({ onBack, toast }: { onBack: () => void; toast: (m: string) => void }) {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Rating')
  const [selected, setSelected] = useState<typeof astrologers[0] | null>(null)
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
          <SecondaryBtn onClick={() => toast(`Calling ${selected.name}…`)} full><span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>{Ico.phone(C.maroon)} Call Now</span></SecondaryBtn>
          <PrimaryBtn onClick={() => setChatOpen(true)} full><span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>{Ico.chat('white')} Chat Now</span></PrimaryBtn>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full" style={{ background: C.bg }}>
      <PageHeader title="Consult Astrologers" onBack={onBack} />
      {/* Header band */}
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
          {filters.map(f => <button key={f} onClick={() => setFilter(f)} className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold active:scale-95" style={{ background: filter === f ? C.maroon : C.surfaceMuted, color: filter === f ? 'white' : C.textSec, border: `1px solid ${filter === f ? C.maroon : C.border}`, boxShadow: filter === f ? '0 2px 6px rgba(123,31,31,0.22)' : 'none' }}>{f}</button>)}
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
          <div key={a.id} role="button" tabIndex={0} onClick={() => setSelected(a)} onKeyDown={e => e.key === 'Enter' && setSelected(a)} className={`overflow-hidden max-[400px]:h-[225px] h-[160px] cursor-pointer active:scale-[0.99] focus:outline-none animate-fade-in-up delay-${Math.min(idx * 75, 700)}`} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: '20px', boxShadow: '0 3px 16px rgba(30,14,8,0.09)' }}>
            <div className="flex gap-0">
              <div className="relative flex-shrink-0">
                <img src={a.img} alt={a.name} className="object-cover h-full" style={{ width: '130px', }} />
                
              </div>
              <div className="flex-1 min-w-0 p-3.5">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <p className="font-semibold text-md leading-snug" style={{ color: C.text }}>{a.name}</p>
                  <OnlineStatus status={a.status} />
                </div>
                <p className="text-xs leading-snug" style={{ color: C.textSec }}>{a.expertise}</p>
                <p className="text-xs mt-0.5" style={{ color: C.textSec }}>🕐 {a.experience} · 🗣 {a.lang}</p>
                <div className="flex items-center gap-3 mt-2"><Rating score={a.rating} count={a.reviews} /><span className="text-xs font-bold" style={{ color: C.maroon }}>₹{a.price}/min</span></div>
                <div className="flex gap-2 max-[400px]:flex-col mt-2.5">
                  <button onClick={e => { e.stopPropagation(); toast(`Calling ${a.name}…`) }} className="flex max-[400px]:w-fit items-center gap-1 px-6 py-1.5 rounded-full text-md font-semibold border active:scale-95" style={{ borderColor: C.border, color: C.text, background: C.surface }}>{Ico.phone()} Call</button>
                  <button onClick={e => { e.stopPropagation(); setSelected(a); setTimeout(() => setChatOpen(true), 50) }} className="flex items-center gap-1 px-6 py-1.5 rounded-full text-md font-semibold active:scale-95 max-[400px]:w-fit" style={{ background: C.maroon, color: 'white', boxShadow: '0 2px 6px rgba(123,31,31,0.25)' }}>{Ico.chat('white')} Chat</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   ASK GURUJI SCREEN
══════════════════════════════════════════════════════════════════════════ */
function AskGurujiScreen({ onBack, toast }: { onBack: () => void; toast: (m: string) => void }) {
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
        {/* Dark hero with mandala */}
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
      <PageHeader title="Ask Guruji" onBack={onBack} />

      {/* Guruji hero banner */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#3B0808 0%,#7B1F1F 60%,#C96B0A 100%)', minHeight: '110px' }}>
        <ConstellationDots />
        <div className="absolute animate-spin-slow pointer-events-none" style={{ top: '-20px', right: '-20px', opacity: 0.25 }} aria-hidden="true">
          <ZodiacRingIllustration size={140} />
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1696521124780-7bc12dc16f0b?w=800&h=200&fit=crop&auto=format')`, backgroundSize: 'cover', backgroundPosition: 'center' } as React.CSSProperties} aria-hidden="true" />
        <div className="relative z-10 flex items-center gap-4 px-5 py-5">
          <div className="relative flex-shrink-0 animate-fade-in-scale">
            <div className="absolute inset-0 rounded-full animate-glow-pulse" style={{ background: 'radial-gradient(circle, rgba(201,107,10,0.45) 0%, transparent 70%)' }} aria-hidden="true" />
            <img src={heroGuruji} alt="Guruji" className="w-16 h-16 rounded-full object-cover object-top relative z-10" style={{ border: '2px solid rgba(255,200,100,0.5)' }} />
          </div>
          <div className="animate-fade-in-up delay-150">
            <p className="font-display text-lg text-white" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>Guruji's Guidance</p>
            <p className="text-xs mt-1 leading-relaxed" style={{ color: 'rgba(255,210,160,0.9)', maxWidth: '240px' }}>Submit your question for Guruji's weekly session or Live Darbar.</p>
          </div>
          <div className="ml-auto animate-float" aria-hidden="true">
            <OmSymbol size={40} color="rgba(255,200,100,0.3)" />
          </div>
        </div>
      </div>

      <PremiumTabs tabs={[['ask','Submit Question'],['weekly','Weekly Selection']]} active={tab} onChange={t => setTab(t as typeof tab)} />

      {tab === 'ask' ? (
        <div className="px-5 pt-5 pb-8 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold mb-2.5" style={{ color: C.text }}>Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => <button key={c} onClick={() => setCategory(c)} className="px-3.5 py-1.5 rounded-full text-xs font-semibold active:scale-95 transition-all" style={{ background: category === c ? C.maroon : C.surfaceMuted, color: category === c ? 'white' : C.textSec, border: `1px solid ${category === c ? C.maroon : C.border}`, boxShadow: category === c ? '0 2px 8px rgba(123,31,31,0.25)' : 'none' }}>{c}</button>)}
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold mb-2" style={{ color: C.text }}>Your Question <span style={{ color: C.live }}>*</span></label>
            <textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder="Write your question clearly. Include relevant context about your situation…" rows={5} className="w-full px-4 py-3 rounded-2xl text-sm resize-none focus:outline-none" style={{ background: C.surfaceMuted, color: C.text, border: `1.5px solid ${question ? C.maroon : C.border}`, boxShadow: question ? '0 0 0 3px rgba(123,31,31,0.08)' : 'none' }} />
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
          {[['Your Name', 'name', name, setName, 'Full name'], ['Date of Birth', 'dob', dob, setDob, 'DD/MM/YYYY'], ['Your Question / Situation', 'question', question, setQuestion, 'Describe your situation in detail…']].map(([label, , value, setter, ph]) => (
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

/* ═══════════════════════════════════════════════════════════════════════════
   LIVE DARBAR SCREEN
══════════════════════════════════════════════════════════════════════════ */
function LiveDarbarScreen({ onBack, toast }: { onBack: () => void; toast: (m: string) => void }) {
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
      {/* Video area */}
      <div className="relative" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <ConstellationDots />
        <img src="https://images.unsplash.com/photo-1774751345322-300b2984254b?w=900&h=500&fit=crop&auto=format" alt="Live stream" className="w-full object-cover" style={{ height: '240px', filter: 'brightness(0.6)' }} />
        <div className="absolute animate-spin-slow" style={{ bottom: '-20px', left: '-20px', opacity: 0.15 }}><MandalaIllustration size={100} opacity={1} /></div>
        {/* Overlaid Guruji */}
        <div className="absolute bottom-0 right-4" style={{ width: '100px' }}>
          <img src={heroGuruji} alt="Guruji" className="w-full object-cover object-top" style={{ height: '140px' }} />
        </div>
        {/* Controls */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <button onClick={onBack} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.5)' }} aria-label="Back">{Ico.back()}</button>
          <div className="relative"><span className="absolute inset-0 rounded-full animate-ripple" style={{ background: 'rgba(196,30,30,0.4)' }} /><Badge live>LIVE</Badge></div>
          <span className="text-xs text-white font-medium">👁 12,847</span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <button onClick={() => setMuted(m => !m)} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.5)' }} aria-label={muted ? 'Unmute' : 'Mute'}>
            {muted ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg> : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14"/></svg>}
          </button>
          <select value={quality} onChange={e => setQuality(e.target.value)} className="text-xs font-semibold px-2 py-1 rounded" style={{ background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none' }}>
            {['Auto','HD','SD'].map(q => <option key={q} value={q}>{q}</option>)}
          </select>
        </div>
        {/* Now playing info */}
        <div className="absolute bottom-3 left-3">
          <p className="font-display text-white text-base">Live Darbar</p>
          <p className="text-white/70 text-xs">Guruji's Evening Satsang</p>
        </div>
      </div>

      {/* Action bar */}
      <div className="flex items-center justify-around py-3 px-4" style={{ background: C.maroonDark, borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
        {[
          { label: 'Like', icon: () => Ico.heart(liked), action: () => { setLiked(l => !l); toast(liked ? 'Removed like' : '🙏 Jai Gurudev!') } },
          { label: 'Share', icon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.saffron} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>, action: () => toast('Share link copied') },
          { label: 'Ask Q', icon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.saffron} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>, action: () => toast('Question submitted to Guruji') },
          { label: 'Donate', icon: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.saffron} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>, action: () => toast('Opening donation flow…') },
        ].map(({ label, icon, action }, idx) => (
          <button key={label} onClick={action} className={`flex flex-col items-center gap-1 active:scale-95 focus:outline-none animate-fade-in-up delay-${idx * 75}`}>
            {icon()}
            <span className="text-xs font-medium" style={{ color: 'rgba(255,200,140,0.8)' }}>{label}</span>
          </button>
        ))}
      </div>

      {/* Live comments */}
      <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2 scrollbar-hide" style={{ background: '#110A05' }}>
        {comments.map((c, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ background: C.maroon }}>{c.user[0]}</div>
            <div><span className="text-xs font-semibold" style={{ color: C.saffron }}>{c.user} </span><span className="text-xs" style={{ color: '#C09070' }}>{c.text}</span></div>
          </div>
        ))}
      </div>

      {/* Comment input */}
      <div className="flex gap-2 px-3 py-3" style={{ background: '#1A0F0A', borderTop: '1px solid #3D2010', paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
        <input value={comment} onChange={e => setComment(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendComment()} placeholder="Say Jai Gurudev… 🙏" className="flex-1 px-4 py-2.5 rounded-full text-sm focus:outline-none" style={{ background: '#2A1508', color: '#E8D0B0', border: '1px solid #4D2510' }} />
        <button onClick={sendComment} className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: C.maroon }}>{Ico.chat('white')}</button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   GURUJI PROFILE SCREEN
══════════════════════════════════════════════════════════════════════════ */
function GurujiScreen({ onBack, onAskGuruji, onLive, toast }: { onBack: () => void; onAskGuruji: () => void; onLive: () => void; toast: (m: string) => void }) {
  const [tab, setTab] = useState<'about' | 'answers' | 'schedule'>('about')
  return (
    <div className="flex flex-col h-full overflow-y-auto animate-fade-in">
      <PageHeader title="Guruji" onBack={onBack} />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: '240px', background: 'linear-gradient(160deg,#3B0808 0%,#7B1F1F 55%,#C96B0A 100%)' }}>
        {/* Constellation background */}
        <ConstellationDots />
        {/* Animated zodiac ring */}
        <div className="absolute animate-spin-slow" style={{ top: '-40px', right: '-40px', opacity: 0.3 }} aria-hidden="true">
          <ZodiacRingIllustration size={220} />
        </div>
        <div className="absolute animate-spin-reverse" style={{ bottom: '-30px', left: '-30px', color: 'rgba(255,200,100,1)' }} aria-hidden="true">
          <MandalaIllustration size={120} opacity={0.16} />
        </div>
        <img src="https://images.unsplash.com/photo-1774751403526-39d30322e51b?w=900&h=400&fit=crop&auto=format" alt="" className="absolute inset-0 w-full h-full object-cover opacity-12" aria-hidden="true" style={{ mixBlendMode: 'luminosity' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(30,8,4,0.2) 0%, rgba(30,8,4,0.55) 100%)' }} aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center pt-8 pb-6 px-4">
          <div className="relative mb-3 animate-fade-in-scale">
            {/* Glow ring animation */}
            <div className="absolute inset-0 rounded-full animate-glow-pulse" style={{ background: 'radial-gradient(circle, rgba(201,107,10,0.4) 0%, transparent 70%)' }} aria-hidden="true" />
            <img src={heroGuruji} alt="Guruji" className="w-28 h-28 rounded-full object-cover object-top relative z-10" style={{ border: '3px solid rgba(201,107,10,0.8)', boxShadow: '0 0 0 6px rgba(201,107,10,0.18), 0 8px 32px rgba(0,0,0,0.35)' }} />
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center z-20" style={{ background: C.success }}><svg width="10" height="10" viewBox="0 0 10 10" fill="white"><circle cx="5" cy="5" r="3"/></svg></span>
          </div>
          <h2 className="font-display text-3xl text-white animate-fade-in-up delay-150" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>Guruji</h2>
          <p className="text-sm mt-1 animate-fade-in-up delay-200" style={{ color: 'rgba(255,210,160,0.85)' }}>Vedic Scholar · Spiritual Mentor</p>
          <div className="flex items-center gap-6 mt-5 animate-fade-in-up delay-300">
            {[['2.4M','Followers'],['18K','Q&A'],['340+','Live']].map(([n,l],i) => (
              <div key={i} className="text-center">
                <p className="font-bold text-xl text-white">{n}</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,200,150,0.75)' }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex gap-3 px-5 py-4" style={{ background: 'rgba(253,248,241,0.9)', borderBottom: `1px solid ${C.border}` }}>
        <SecondaryBtn onClick={onAskGuruji} full small>Ask Guruji</SecondaryBtn>
        <PrimaryBtn onClick={onLive} full small><span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>{Ico.play('white')} Watch Live</span></PrimaryBtn>
      </div>

      <PremiumTabs tabs={[['about','About'],['answers','Q&A'],['schedule','Schedule']]} active={tab} onChange={t => setTab(t as typeof tab)} />

      {tab === 'about' && (
        <div className="px-5 pt-5 pb-8 flex flex-col gap-4">
          <PremiumCard><div className="p-4"><h3 className="font-semibold text-sm mb-2" style={{ color: C.text }}>Biography</h3><p className="text-sm leading-relaxed" style={{ color: C.textSec }}>Guruji is a revered Vedic scholar with over 30 years of spiritual practice. Born in Varanasi, he studied under legendary gurus of the Shankara tradition. His teachings blend ancient wisdom with practical guidance for modern seekers.</p></div></PremiumCard>
          <div><h3 className="font-semibold text-sm mb-3" style={{ color: C.text }}>Areas of Guidance</h3><div className="flex flex-wrap gap-2">{['Vedic Astrology','Karma & Dharma','Relationship Guidance','Career & Life Path','Spiritual Growth','Health & Wellbeing'].map(a => <span key={a} className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: 'linear-gradient(135deg,#FEF3E8,#FAE0C0)', color: C.maroon, border: `1px solid ${C.border}` }}>{a}</span>)}</div></div>
          <PremiumCard><div className="p-4"><h3 className="font-semibold text-sm mb-3" style={{ color: C.text }}>Guruji's Approach</h3>{['Weekly Q&A via submission','Monthly Live Darbar','Guided by scripture and intuition','No claims of miracles — only sincere guidance'].map(pt => <div key={pt} className="flex items-start gap-2 mb-2">{Ico.check()}<p className="text-sm" style={{ color: C.textSec }}>{pt}</p></div>)}</div></PremiumCard>
        </div>
      )}

      {tab === 'answers' && (
        <div className="px-5 pt-5 pb-8 flex flex-col gap-4">
          {gurujiAnswers.map(a => (
            <PremiumCard key={a.id}>
              <div className="p-4">
                <div className="flex items-center justify-between mb-3"><span className="text-xs font-medium" style={{ color: C.textSec }}>{a.asker} · {a.date}</span><span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: 'linear-gradient(135deg,#FEF3E8,#FAE0C0)', color: C.maroon }}>Answered</span></div>
                <p className="font-semibold text-sm mb-3" style={{ color: C.text }}>"{a.q}"</p>
                {Ico.quote()}
                <p className="text-sm leading-relaxed mt-2" style={{ color: C.textSec }}>{a.a}</p>
              </div>
            </PremiumCard>
          ))}
          <SecondaryBtn onClick={onAskGuruji} full>Submit Your Question 🙏</SecondaryBtn>
        </div>
      )}

      {tab === 'schedule' && (
        <div className="px-5 pt-5 pb-8 flex flex-col gap-3">
          {gurujiSchedule.map(s => (
            <PremiumCard key={s.id}>
              <div className="p-4 flex items-stretch gap-4">
                <div className="flex-shrink-0 w-1 rounded-full self-stretch" style={{ background: s.type === 'live' ? C.live : s.type === 'puja' ? C.saffron : C.maroon }} />
                <div className="flex-1">
                  <div className="flex items-start justify-between"><p className="font-semibold text-sm" style={{ color: C.text }}>{s.title}</p>{s.type === 'live' && <Badge live>LIVE</Badge>}</div>
                  <p className="text-xs mt-1" style={{ color: C.textSec }}>📅 {s.date} · ⏰ {s.time}</p>
                  <button onClick={() => s.type === 'live' ? onLive() : toast(`Reminder set for ${s.title}`)} className="mt-2 text-xs font-bold" style={{ color: C.maroon }}>{s.type === 'live' ? 'Watch Live →' : 'Set Reminder →'}</button>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SEVA SCREEN
══════════════════════════════════════════════════════════════════════════ */
function SevaScreen({ onBack, toast }: { onBack: () => void; toast: (m: string) => void }) {
  const [tab, setTab] = useState<'puja' | 'donate'>('puja')
  const [donateAmount, setDonateAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [selectedPuja, setSelectedPuja] = useState<typeof pujas[0] | null>(null)

  const presets = [51, 101, 251, 501, 1001, 2100]

  if (selectedPuja) {
    return (
      <div className="flex flex-col h-full overflow-y-auto animate-fade-in">
        <PageHeader title="Book Puja" onBack={() => setSelectedPuja(null)} />
        <img src={selectedPuja.img} alt={selectedPuja.name} className="w-full object-cover" style={{ height: '200px' }} />
        <div className="px-4 pt-4 pb-32">
          <h2 className="font-display text-xl" style={{ color: C.text }}>{selectedPuja.name}</h2>
          <p className="text-sm mt-1" style={{ color: C.textSec }}>{selectedPuja.desc}</p>
          <div className="flex items-center gap-4 mt-3">
            <span className="text-xl font-bold" style={{ color: C.maroon }}>₹{selectedPuja.price}</span>
            <span className="text-sm" style={{ color: C.textSec }}>⏱ {selectedPuja.duration}</span>
          </div>
          <Divider />
          <h3 className="font-semibold text-sm mt-3 mb-2" style={{ color: C.text }}>What's included</h3>
          {['Expert pandit assigned', 'HD live stream of the puja', 'Prasad shipped to your address', 'Puja certificate'].map(item => <div key={item} className="flex items-center gap-2 mb-1.5">{Ico.check()}<span className="text-sm" style={{ color: C.textSec }}>{item}</span></div>)}
          <Divider />
          <h3 className="font-semibold text-sm mt-3 mb-3" style={{ color: C.text }}>Select Date</h3>
          <div className="grid grid-cols-3 gap-2">
            {['May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28'].map((d, i) => (
              <button key={d} onClick={() => toast(`Selected ${d}`)} className="py-2.5 rounded-xl text-sm font-medium active:scale-95" style={{ background: i === 0 ? C.maroon : C.surfaceMuted, color: i === 0 ? 'white' : C.text, border: `1px solid ${i === 0 ? C.maroon : C.border}` }}>{d}</button>
            ))}
          </div>
        </div>
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full px-4 pb-6 pt-4 z-20" style={{ maxWidth: '480px', background: C.surface, borderTop: `1px solid ${C.border}` }}>
          <PrimaryBtn onClick={() => { toast(`Booking ${selectedPuja.name}…`); setSelectedPuja(null) }} full>Book Now — ₹{selectedPuja.price}</PrimaryBtn>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto animate-fade-in">
      <PageHeader title="Seva & Donate" onBack={onBack} />

      <div className="relative overflow-hidden flex items-center gap-4 px-5 py-5" style={{ background: 'linear-gradient(135deg,#3B0808,#7B1F1F,#C96B0A)', minHeight: '100px' }}>
        <ConstellationDots />
        <div className="absolute animate-spin-reverse pointer-events-none" style={{ right: '-20px', top: '-20px', color: 'rgba(255,200,100,1)' }}><MandalaIllustration size={110} opacity={0.2} /></div>
        <div className="relative z-10 animate-float"><OmSymbol size={44} color="rgba(255,200,100,0.4)" /></div>
        <div className="relative z-10 animate-fade-in-up delay-150">
          <p className="font-display text-white text-lg">Seva &amp; Donations</p>
          <p className="text-xs mt-1" style={{ color: 'rgba(255,210,160,0.85)' }}>Participate in sacred service · Earn punya</p>
        </div>
      </div>

      <PremiumTabs tabs={[['puja','Book a Puja'],['donate','Donate / Seva']]} active={tab} onChange={t => setTab(t as typeof tab)} />

      {tab === 'puja' ? (
        <div className="px-5 pt-5 pb-8 flex flex-col gap-4">
          <p className="text-sm leading-relaxed" style={{ color: C.textSec }}>Book a sacred puja performed by verified pandits. Watch live and receive prasad at home.</p>
          {pujas.map(p => (
            <button key={p.id} onClick={() => setSelectedPuja(p)} className="flex h-[130px] items-stretch rounded-3xl text-left overflow-hidden active:scale-[0.99] focus:outline-none w-full" style={{ background: C.card, border: `1px solid ${C.border}`, boxShadow: '0 3px 16px rgba(30,14,8,0.09)' }}>
              <div className="relative flex-shrink-0 " style={{ width: '130px' }}>
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
               
              </div>
              <div className="py-4 pr-4 pl-4 flex-1 flex items-start justify-center flex-col w-full">
                <p className="font-semibold text-sm" style={{ color: C.text }}>{p.name}</p>
                <p className="text-xs mt-1 leading-snug" style={{ color: C.textSec }}>{p.desc}</p>
                <div className="flex max-[400px]:flex-col max-[400px]:items-start gap-1 items-center justify-between mt-2.5 w-full">
                  <div><span className="font-bold text-base" style={{ color: C.maroon }}>₹{p.price}</span><span className="text-xs ml-2" style={{ color: C.textSec }}>⏱ {p.duration}</span></div>
                  <span className="text-xs font-bold flex items-center gap-0.5" style={{ color: C.maroon }}>Book {Ico.arrowRight()}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="px-5 pt-5 pb-8 flex flex-col gap-4">
          {donationCauses.map(cause => (
            <PremiumCard className='overflow-hidden' key={cause.id}>
            <div className='flex  ' >

              <div className='h-[160px] w-[160px] max-[485px]:h-[225px]'>
                <img src={cause.img} alt=""  className='object-cover w-full h-full'/>
              </div>
                <div className="p-4 flex-1">
                <p className="font-semibold text-sm" style={{ color: C.text }}>{cause.name}</p>
                <p className="text-xs mt-0.5" style={{ color: C.textSec }}>{cause.desc}</p>
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1.5"><span style={{ color: C.textSec }}>₹{(cause.raised/1000).toFixed(1)}K raised</span><span className="font-semibold" style={{ color: C.maroon }}>Goal ₹{(cause.goal/1000).toFixed(0)}K</span></div>
                  <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: C.surfaceMuted }}>
                    <div className="h-2 rounded-full" style={{ background: `linear-gradient(to right, ${C.saffron}, ${C.maroon})`, width: `${Math.round(cause.raised/cause.goal*100)}%` }} />
                  </div>
                </div>
               <div className='flex items-center justify-between w-full mt-3 max-[490px]:flex-col max-[490px]:items-start gap-3'>
                 <button onClick={() => { setDonateAmount(cause.suggested); }} className="mt-3 text-xs font-bold flex items-center gap-0.5" style={{ color: C.maroon }}>Donate ₹{cause.suggested} {Ico.arrowRight()}</button>


              

                 <button  onClick={() => toast(`Subscription processed for ${cause.name}. 🙏 Thank you!`)} className={`flex items-center justify-center gap-2 font-semibold rounded-full transition-all active:scale-95 focus:outline-none focus-visible:ring-2`}
      style={{ background: C.maroon, color: 'white', padding:'5px 20px', fontSize: '11px', boxShadow: '0 2px 8px rgba(123,31,31,0.22)' }}>
      Subscribe
    </button>
               </div>
              </div>
            </div>
            </PremiumCard>
          ))}
          <div>
            <h3 className="font-semibold text-sm mb-3" style={{ color: C.text }}>Choose Amount</h3>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {presets.map(a => <button key={a} onClick={() => setDonateAmount(a)} className="py-3 rounded-2xl text-sm font-semibold active:scale-95" style={{ background: donateAmount === a ? C.maroon : C.surfaceMuted, color: donateAmount === a ? 'white' : C.text, border: `1px solid ${donateAmount === a ? C.maroon : C.border}`, boxShadow: donateAmount === a ? '0 2px 8px rgba(123,31,31,0.25)' : 'none' }}>₹{a}</button>)}
            </div>
            <input value={customAmount} onChange={e => { setCustomAmount(e.target.value); setDonateAmount(null) }} placeholder="Custom amount (₹)" type="number" className="w-full px-4 py-3 rounded-2xl text-sm focus:outline-none" style={{ background: C.surfaceMuted, color: C.text, border: `1px solid ${C.border}` }} />
          </div>
          <PrimaryBtn onClick={() => toast(`Donation of ₹${donateAmount || customAmount} processed. 🙏 Thank you!`)} full>Donate ₹{donateAmount || customAmount || '—'} 🙏</PrimaryBtn>
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   PROFILE SCREEN
══════════════════════════════════════════════════════════════════════════ */
function ProfileScreen({ onBack, toast, onNav }: { onBack: () => void; toast: (m: string) => void; onNav: (s: string) => void }) {
  const [tab, setTab] = useState<'history' | 'kundli' | 'settings'>('history')
  return (
    <div className="flex flex-col h-full overflow-y-auto animate-fade-in">
      <PageHeader title="My Profile" onBack={onBack} />

      {/* User hero */}
      <div className="relative px-5 pt-6 pb-5 overflow-hidden" style={{ background: 'linear-gradient(160deg,#3B0808 0%,#7B1F1F 55%,#C96B0A 100%)' }}>
        <ConstellationDots />
        <div className="absolute animate-spin-slow pointer-events-none" style={{ top: '-30px', right: '-30px', opacity: 0.25 }} aria-hidden="true">
          <ZodiacRingIllustration size={180} />
        </div>
        <div className="absolute animate-spin-reverse pointer-events-none" style={{ bottom: '-20px', left: '-20px', color: 'rgba(255,200,100,1)' }} aria-hidden="true">
          <MandalaIllustration size={100} opacity={0.15} />
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1774751403526-39d30322e51b?w=900&h=300&fit=crop&auto=format')`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'luminosity' } as React.CSSProperties} aria-hidden="true" />
        <div className="relative z-10 flex items-center gap-4 animate-fade-in-up">
          <div className="w-18 h-18 rounded-full flex items-center justify-center text-3xl font-bold text-white flex-shrink-0" style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.3)', width: '68px', height: '68px', backdropFilter: 'blur(8px)' }}>R</div>
          <div className="flex-1 min-w-0">
            <p className="font-display text-xl text-white" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.3)' }}>Rahul Mehta</p>
            <p className="text-xs mt-0.5" style={{ color: 'rgba(255,210,160,0.85)' }}>+91 98765 43210</p>
            <span className="inline-block mt-1.5 text-xs px-2.5 py-0.5 rounded-full font-semibold" style={{ background: 'rgba(201,107,10,0.30)', color: '#FCD28A', border: '1px solid rgba(201,107,10,0.4)' }}>⭐ Premium Member</span>
          </div>
          <button onClick={() => toast('Edit profile')} className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}>{Ico.edit()}</button>
        </div>
        {/* Wallet */}
        <div className="relative z-10 flex items-center justify-between mt-4 px-4 py-3 rounded-2xl animate-fade-in-up delay-200" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}>
          <div className="flex items-center gap-2">{Ico.wallet()}<div><p className="text-xs text-white/70">BD Wallet</p><p className="font-bold text-lg text-white">₹1,250</p></div></div>
          <button onClick={() => onNav('wallet')} className="px-4 py-2 rounded-xl text-xs font-semibold" style={{ background: 'white', color: C.maroonDark }}>Add Money</button>
        </div>
      </div>

      <PremiumTabs tabs={[['history','Consultations'],['kundli','Kundli'],['settings','Settings']]} active={tab} onChange={t => setTab(t as typeof tab)} />

      {tab === 'history' && (
        <div className="px-5 pt-5 pb-8 flex flex-col gap-3">
          {consultationHistory.map((c, idx) => (
            <div key={c.id} className={`animate-fade-in-up`} style={{ animationDelay: `${idx * 80}ms` }}><PremiumCard>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div><p className="font-semibold text-sm" style={{ color: C.text }}>{c.astrologer}</p><p className="text-xs mt-0.5" style={{ color: C.textSec }}>{c.topic}</p></div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: c.type === 'Chat' ? '#EFF6FF' : 'linear-gradient(135deg,#FEF3E8,#FAE0C0)', color: c.type === 'Chat' ? '#1D4ED8' : C.saffron }}>{c.type}</span>
                </div>
                <div className="flex items-center gap-3 text-xs" style={{ color: C.textSec }}>
                  <span>📅 {c.date}</span><span>⏱ {c.duration}</span><span className="font-bold" style={{ color: C.maroon }}>₹{c.amount}</span>
                </div>
                <div className="flex gap-3 mt-3 pt-3" style={{ borderTop: `1px solid ${C.border}` }}>
                  <button onClick={() => toast('Opening transcript…')} className="text-xs font-bold" style={{ color: C.maroon }}>View Transcript →</button>
                  <button onClick={() => toast('Booking follow-up…')} className="text-xs font-bold" style={{ color: C.maroon }}>Book Again →</button>
                </div>
              </div>
            </PremiumCard></div>
          ))}
        </div>
      )}

      {tab === 'kundli' && (
        <div className="px-5 pt-5 pb-8 flex flex-col gap-3">
          <PremiumCard>
            <div className="p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#FEF3E8,#FAE0C0)' }}>{Ico.kundli()}</div>
              <div className="flex-1"><p className="font-semibold text-sm" style={{ color: C.text }}>Rahul Mehta — Kundli</p><p className="text-xs mt-0.5" style={{ color: C.textSec }}>Generated May 1, 2025 · Vedic Chart</p></div>
              <button onClick={() => onNav('kundli-detail')} className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: C.maroon, color: 'white' }}>View</button>
            </div>
          </PremiumCard>
          <PremiumCard className="animate-fade-in-scale delay-150">
            <div className="p-6 flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#FEF3E8,#FAE0C0)' }}>{Ico.kundli()}</div>
              <p className="font-display text-base" style={{ color: C.text }}>No family reports yet</p>
              <p className="text-xs leading-relaxed" style={{ color: C.textSec }}>Generate Kundli charts for your family members to get personalised predictions</p>
              <button onClick={() => toast('Creating new Kundli…')} className="mt-1 px-5 py-2.5 rounded-full text-xs font-bold" style={{ background: C.maroon, color: 'white', boxShadow: '0 2px 8px rgba(123,31,31,0.25)' }}>Add Family Member</button>
            </div>
          </PremiumCard>
        </div>
      )}

      {tab === 'settings' && (
        <div className="px-4 pt-4 pb-6 flex flex-col gap-2">
          {[
            { label: 'Language', value: 'Hindi + English', icon: Ico.settings() },
            { label: 'Notification Preferences', value: 'All enabled', icon: Ico.bell() },
            { label: 'Privacy & Data', value: '', icon: Ico.eye() },
            { label: 'Help & Support', value: '', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.textSec} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/></svg> },
            { label: 'About BD ASTRO', value: 'v2.4.1', icon: <SunLogo /> },
          ].map(item => (
            <button key={item.label} onClick={() => toast(`Opening ${item.label}…`)} className="flex items-center gap-3 p-4 rounded-2xl w-full text-left active:scale-[0.99] focus:outline-none" style={{ background: C.card, border: `1px solid ${C.border}`, boxShadow: '0 2px 8px rgba(30,14,8,0.06)' }}>
              <div className="w-8 h-8 flex items-center justify-center">{item.icon}</div>
              <span className="flex-1 text-sm font-medium" style={{ color: C.text }}>{item.label}</span>
              {item.value && <span className="text-xs" style={{ color: C.textSec }}>{item.value}</span>}
              {Ico.arrowRight()}
            </button>
          ))}
          <div className="mt-4">
            <button onClick={() => toast('Signed out')} className="w-full py-3 rounded-full text-sm font-semibold" style={{ background: '#FEE2E2', color: C.live }}>Sign Out</button>
          </div>
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   PANCHANG SCREEN
══════════════════════════════════════════════════════════════════════════ */
function PanchangScreen({ onBack }: { onBack: () => void }) {
  const [selectedDate, setSelectedDate] = useState(22)
  const [monthOffset, setMonthOffset] = useState(0)
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const baseMonth = 4 // May (0-indexed)
  const displayMonth = months[(baseMonth + monthOffset + 12) % 12]
  const displayYear = 2025 + Math.floor((baseMonth + monthOffset) / 12)
  const p = panchangData.today
  return (
    <div className="flex flex-col h-full overflow-y-auto animate-fade-in">
      <PageHeader title="Panchang" onBack={onBack} />

      {/* Zodiac banner */}
      <div className="relative overflow-hidden flex items-center justify-center py-5" style={{ background: 'linear-gradient(135deg,#3B0808,#7B1F1F,#C96B0A)', minHeight: '90px' }}>
        <ConstellationDots />
        <div className="absolute animate-spin-slow pointer-events-none" aria-hidden="true">
          <ZodiacRingIllustration size={170} />
        </div>
        <div className="relative z-10 text-center">
          <p className="font-display text-2xl text-white animate-fade-in-up" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>May 2025</p>
          <p className="text-xs mt-1 animate-fade-in-up delay-150" style={{ color: 'rgba(255,210,160,0.85)' }}>Vrishabha Māsa · Shaka 1947</p>
        </div>
      </div>

      {/* Month & week strip */}
      <div className="px-5 pt-5 pb-4" style={{ background: C.surface, borderBottom: `1px solid ${C.border}` }}>
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => { setMonthOffset(o => o - 1); setSelectedDate(1) }} className="w-9 h-9 flex items-center justify-center rounded-full active:scale-90 transition-transform" style={{ background: C.surfaceMuted, border: `1px solid ${C.border}` }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="2.5" strokeLinecap="round"><polyline points="15,18 9,12 15,6"/></svg>
          </button>
          <h2 className="font-display text-xl" style={{ color: C.text }}>{displayMonth} {displayYear}</h2>
          <button onClick={() => { setMonthOffset(o => o + 1); setSelectedDate(1) }} className="w-9 h-9 flex items-center justify-center rounded-full active:scale-90 transition-transform" style={{ background: C.surfaceMuted, border: `1px solid ${C.border}` }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="2.5" strokeLinecap="round"><polyline points="9,18 15,12 9,6"/></svg>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center mb-3">
          {panchangData.weekDays.map((d, i) => <span key={i} className="text-xs font-bold" style={{ color: i === 0 || i === 6 ? C.live : C.textSec }}>{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {panchangData.dates.map((d) => (
            <button key={d.d} onClick={() => setSelectedDate(d.d)} className="flex flex-col items-center py-2 rounded-xl transition-all active:scale-95" style={{ background: selectedDate === d.d ? C.maroon : d.today ? C.surfaceMuted : 'transparent', boxShadow: selectedDate === d.d ? '0 2px 8px rgba(123,31,31,0.3)' : 'none' }}>
              <span className="text-sm font-bold" style={{ color: selectedDate === d.d ? 'white' : C.text }}>{d.d}</span>
              <span className="leading-tight mt-0.5 text-center" style={{ color: selectedDate === d.d ? 'rgba(255,220,180,0.9)' : C.textSec, fontSize: '8px' }}>{d.tithi}</span>
              {d.event && <span className="w-1.5 h-1.5 rounded-full mt-0.5" style={{ background: selectedDate === d.d ? '#FCD28A' : C.saffron }} />}
            </button>
          ))}
        </div>
      </div>

      {/* Today's panchang */}
      <div className="px-5 pt-5 pb-8 flex flex-col gap-4">
        <div className="flex items-center gap-2">{Ico.sun()}<h2 className="font-display text-xl" style={{ color: C.text }}>Today's Panchang</h2></div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Tithi', value: p.tithi, emoji: '🌙' }, { label: 'Nakshatra', value: p.nakshatra, emoji: '⭐' },
            { label: 'Yoga', value: p.yoga, emoji: '🔯' }, { label: 'Karana', value: p.karana, emoji: '📿' },
          ].map(item => (
            <PremiumCard key={item.label}>
              <div className="p-3.5">
                <p className="text-lg mb-1">{item.emoji}</p>
                <p className="text-xs font-semibold" style={{ color: C.textSec }}>{item.label}</p>
                <p className="font-bold text-sm mt-0.5" style={{ color: C.text }}>{item.value}</p>
              </div>
            </PremiumCard>
          ))}
        </div>

        <PremiumCard>
          <div className="p-4">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: C.text }}>{Ico.sun()} Sun & Moon</h3>
            <div className="grid grid-cols-2 gap-3">
              {[['🌅 Sunrise', p.sunrise], ['🌇 Sunset', p.sunset], ['🌙 Moonrise', p.moonrise], ['🌑 Moonset', p.moonset]].map(([label, val]) => (
                <div key={label as string} className="p-2.5 rounded-xl" style={{ background: C.surfaceMuted }}>
                  <p className="text-xs font-semibold" style={{ color: C.textSec }}>{label}</p>
                  <p className="font-bold text-sm mt-0.5" style={{ color: C.text }}>{val}</p>
                </div>
              ))}
            </div>
          </div>
        </PremiumCard>

        <div className="p-4 rounded-2xl flex items-center gap-3" style={{ background: 'linear-gradient(135deg,#FFF0F0,#FFE4E4)', border: `1px solid #FECACA`, boxShadow: '0 2px 12px rgba(153,27,27,0.08)' }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#FEE2E2' }}><span className="text-lg">⚠️</span></div>
          <div><p className="font-bold text-sm" style={{ color: '#991B1B' }}>Rahu Kaal</p><p className="text-xs mt-0.5" style={{ color: '#7F1D1D' }}>Avoid important work during {p.rahuKaal}</p></div>
        </div>

        <PremiumCard>
          <div className="p-4" style={{ background: 'linear-gradient(135deg,rgba(253,248,241,1),rgba(250,235,215,0.6))', borderRadius: '20px' }}>
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: C.text }}>
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ background: 'rgba(21,128,61,0.12)', color: C.success }}>✓</span>
              Auspicious Activities Today
            </h3>
            {['Travel towards North', 'Starting new business dealings', 'Spiritual study and meditation', 'Meeting elders and seeking blessings'].map(a => (
              <div key={a} className="flex items-center gap-2.5 py-1.5" style={{ borderBottom: `1px solid ${C.border}` }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(21,128,61,0.12)' }}>{Ico.check()}</span>
                <span className="text-xs" style={{ color: C.textSec }}>{a}</span>
              </div>
            ))}
          </div>
        </PremiumCard>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   AARTI & BHAJANS SCREEN
══════════════════════════════════════════════════════════════════════════ */
function AartiScreen({ onBack }: { onBack: () => void }) {
  const [playing, setPlaying] = useState<typeof bhajans[0] | null>(null)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [liked, setLiked] = useState<Set<number>>(new Set())
  const [category, setCategory] = useState('All')
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const categories = ['All', 'Ganesh', 'Hanuman', 'Shiva', 'Vishnu', 'Durga', 'Lakshmi']

  const filtered = bhajans.filter(b => category === 'All' || b.category === category)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setProgress(p => { if (p >= 100) { clearInterval(timerRef.current!); return 100 } return p + 0.3 }), 100)
  }

  const play = (b: typeof bhajans[0]) => {
    if (timerRef.current) clearInterval(timerRef.current)
    setPlaying(b)
    setPaused(false)
    setProgress(0)
    startTimer()
  }

  const togglePause = () => {
    if (paused) { startTimer(); setPaused(false) }
    else { if (timerRef.current) clearInterval(timerRef.current); setPaused(true) }
  }

  const toggleLike = (id: number) => setLiked(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n })

  const formatTime = (pct: number, dur: string) => {
    const [m, s] = dur.split(':').map(Number)
    const total = m * 60 + s
    const elapsed = Math.round(pct / 100 * total)
    return `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col h-full" style={{ paddingBottom: playing ? '140px' : '0' }}>
      <PageHeader title="Aarti & Bhajans" onBack={onBack} />
      {/* Devotional header banner */}
      <div className="relative overflow-hidden flex items-center gap-4 px-5 py-4" style={{ background: 'linear-gradient(135deg,#3B0808,#7B1F1F,#C96B0A)', minHeight: '80px' }}>
        <ConstellationDots />
        <div className="absolute animate-spin-reverse pointer-events-none" style={{ right: '-15px', top: '-15px', color: 'rgba(255,200,100,1)' }} aria-hidden="true"><MandalaIllustration size={100} opacity={0.2} /></div>
        <div className="relative z-10 animate-float flex-shrink-0"><OmSymbol size={40} color="rgba(255,200,100,0.5)" /></div>
        <div className="relative z-10 animate-fade-in-up delay-100">
          <p className="font-display text-base text-white">Aarti &amp; Bhajans</p>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(255,210,160,0.8)' }}>{bhajans.length} sacred tracks · Stream devotional music</p>
        </div>
      </div>

      {/* Category filter */}
      <div className="px-4 py-3.5 flex gap-2 overflow-x-auto scrollbar-hide" style={{ background: C.surface, borderBottom: `1px solid ${C.border}` }}>
        {categories.map(c => <button key={c} onClick={() => setCategory(c)} className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95" style={{ background: category === c ? C.maroon : C.surfaceMuted, color: category === c ? 'white' : C.textSec, border: `1px solid ${category === c ? C.maroon : C.border}`, boxShadow: category === c ? '0 2px 8px rgba(123,31,31,0.25)' : 'none' }}>{c}</button>)}
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4 flex flex-col gap-2.5">
        {filtered.map(b => (
          <div key={b.id} role="button" tabIndex={0} onClick={() => play(b)} onKeyDown={e => e.key === 'Enter' && play(b)} className="flex items-center gap-3 p-3.5 rounded-2xl cursor-pointer active:scale-[0.99] focus:outline-none" style={{ background: playing?.id === b.id ? 'linear-gradient(135deg,rgba(123,31,31,0.06),rgba(201,107,10,0.04))' : C.card, border: `1.5px solid ${playing?.id === b.id ? C.maroon : C.border}`, boxShadow: playing?.id === b.id ? '0 3px 16px rgba(123,31,31,0.12)' : '0 2px 8px rgba(30,14,8,0.06)' }}>
            <div className="relative flex-shrink-0">
              <img src={b.img} alt={b.title} className="w-14 h-14 rounded-xl object-cover" style={{ boxShadow: '0 2px 8px rgba(30,14,8,0.15)' }} />
              {playing?.id === b.id && <div className="absolute inset-0 rounded-xl flex items-center justify-center" style={{ background: 'rgba(123,31,31,0.65)' }}><WaveBars playing={!paused} color="white" /></div>}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm leading-snug" style={{ color: playing?.id === b.id ? C.maroon : C.text }}>{b.title}</p>
              <p className="text-xs mt-0.5" style={{ color: C.textSec }}>{b.artist}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: C.surfaceMuted, color: C.textSec, border: `1px solid ${C.border}` }}>{b.category}</span>
                <span className="text-xs" style={{ color: C.textSec }}>{b.duration}</span>
              </div>
            </div>
            <button onClick={e => { e.stopPropagation(); toggleLike(b.id) }} className="w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 active:scale-90 transition-all" style={{ background: liked.has(b.id) ? '#FEE2E2' : C.surfaceMuted, border: `1px solid ${liked.has(b.id) ? '#FECACA' : C.border}` }}>
              {Ico.heart(liked.has(b.id))}
            </button>
          </div>
        ))}
      </div>

      {/* Mini player — premium dark */}
      {playing && (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full z-20" style={{ maxWidth: '480px', background: 'linear-gradient(135deg,#1C0808,#3B0F0F)', borderTop: `1px solid rgba(255,160,80,0.2)`, boxShadow: '0 -6px 30px rgba(30,14,8,0.35)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
          {/* Progress bar */}
          <div className="w-full h-0.5" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <div className="h-0.5 transition-all rounded-full" style={{ background: 'linear-gradient(90deg,#C96B0A,#FCD28A)', width: `${progress}%` }} />
          </div>
          <div className="flex items-center gap-3 px-4 py-3.5">
            <div className="relative flex-shrink-0">
              <img src={playing.img} alt={playing.title} className="w-12 h-12 rounded-xl object-cover" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.4)' }} />
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-xl" style={{ boxShadow: '0 0 10px rgba(201,107,10,0.4)' }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-bold text-sm truncate text-white">{playing.title}</p>
                <WaveBars playing={!paused && progress < 100} color="rgba(252,210,138,0.9)" />
              </div>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(255,180,120,0.8)' }}>{playing.artist}</p>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{formatTime(progress, playing.duration)} / {playing.duration}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button onClick={() => { const i = bhajans.findIndex(b => b.id === playing.id); if (i > 0) play(bhajans[i-1]) }} className="w-9 h-9 flex items-center justify-center rounded-full active:scale-90" style={{ background: 'rgba(255,255,255,0.1)' }}>{Ico.skipPrev()}</button>
              <button onClick={togglePause} className="w-12 h-12 flex items-center justify-center rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg,#C96B0A,#A0500A)', boxShadow: '0 3px 14px rgba(201,107,10,0.5)' }}>
                {paused || progress >= 100 ? Ico.play('white') : Ico.pause('white')}
              </button>
              <button onClick={() => { const i = bhajans.findIndex(b => b.id === playing.id); if (i < bhajans.length-1) play(bhajans[i+1]) }} className="w-9 h-9 flex items-center justify-center rounded-full active:scale-90" style={{ background: 'rgba(255,255,255,0.1)' }}>{Ico.skipNext()}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   NOTIFICATIONS SCREEN
══════════════════════════════════════════════════════════════════════════ */
function NotificationsScreen({ onBack }: { onBack: () => void }) {
  const notifications = [
    { id: 1, type: 'live', title: 'Live Darbar Starting Soon', body: "Guruji's Live Darbar starts in 30 minutes. Tune in for divine guidance.", time: '5 min ago', read: false },
    { id: 2, type: 'consult', title: 'Consultation Reminder', body: 'Your call with Acharya Vikas Shastri is scheduled at 7:00 PM today.', time: '2 hrs ago', read: false },
    { id: 3, type: 'result', title: 'Your Question Was Answered', body: 'Guruji has answered your question about career prospects. Tap to read.', time: '1 day ago', read: false },
    { id: 4, type: 'promo', title: 'Special Offer: 20% Off', body: 'Get 20% off on your next consultation. Limited time only.', time: '2 days ago', read: true },
    { id: 5, type: 'puja', title: 'Puja Booking Confirmed', body: 'Your Ganesh Pooja booking for May 23 is confirmed. Prasad will be delivered.', time: '3 days ago', read: true },
    { id: 6, type: 'kundli', title: 'Kundli Report Ready', body: 'Your full Kundli analysis report has been generated. View it in your profile.', time: '5 days ago', read: true },
  ]
  const typeMap: Record<string, { bg: string; icon: () => JSX.Element }> = {
    live:    { bg: '#FEE2E2', icon: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.live} strokeWidth="2" strokeLinecap="round"><polygon points="23,7 16,12 23,17"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
    consult: { bg: '#FEF3E8', icon: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.maroon} strokeWidth="2" strokeLinecap="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg> },
    result:  { bg: '#DCFCE7', icon: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.success} strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
    promo:   { bg: '#FEF9E7', icon: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.saffron} strokeWidth="2" strokeLinecap="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg> },
    puja:    { bg: '#EEF2FF', icon: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"><path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"/><circle cx="12" cy="9" r="2.5"/></svg> },
    kundli:  { bg: '#FEF3E8', icon: () => Ico.kundli() },
  }
  return (
    <div className="flex flex-col min-h-dvh animate-fade-in" style={{ background: C.bg }}>
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#3B0808,#7B1F1F)', minHeight: '90px' }}>
        <ConstellationDots />
        <PageHeader title="Notifications" onBack={onBack} />
      </div>
      <div className="px-4 pt-4 pb-24 flex flex-col gap-3">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs font-semibold" style={{ color: C.textSec }}>3 unread</p>
          <button className="text-xs font-semibold active:opacity-60" style={{ color: C.maroon }}>Mark all read</button>
        </div>
        {notifications.map((n, i) => {
          const t = typeMap[n.type] || typeMap.result
          return (
            <PremiumCard key={n.id} className={`animate-fade-in-up delay-${Math.min(i * 75, 700)}`}>
              <div className="p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: t.bg }}>{t.icon()}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-semibold text-sm flex-1" style={{ color: C.text }}>{n.title}</p>
                    {!n.read && <span className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse-dot" style={{ background: C.live }} />}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: C.textSec }}>{n.body}</p>
                  <p className="text-xs mt-1.5 font-medium" style={{ color: C.muted }}>{n.time}</p>
                </div>
              </div>
            </PremiumCard>
          )
        })}
        <p className="text-center text-xs mt-4 py-4 animate-fade-in-up delay-700" style={{ color: C.textSec }}>
          <span className="text-lg block mb-1">🔔</span>
          You are all caught up!
        </p>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   DAILY HOROSCOPE SCREEN
══════════════════════════════════════════════════════════════════════════ */
function DailyHoroscopeScreen({ onBack, toast }: { onBack: () => void; toast: (m: string) => void }) {
  const signs = [
    { sym: '♈', name: 'Aries', dates: 'Mar 21 – Apr 19' },
    { sym: '♉', name: 'Taurus', dates: 'Apr 20 – May 20' },
    { sym: '♊', name: 'Gemini', dates: 'May 21 – Jun 20' },
    { sym: '♋', name: 'Cancer', dates: 'Jun 21 – Jul 22' },
    { sym: '♌', name: 'Leo', dates: 'Jul 23 – Aug 22' },
    { sym: '♍', name: 'Virgo', dates: 'Aug 23 – Sep 22' },
    { sym: '♎', name: 'Libra', dates: 'Sep 23 – Oct 22' },
    { sym: '♏', name: 'Scorpio', dates: 'Oct 23 – Nov 21' },
    { sym: '♐', name: 'Sagittarius', dates: 'Nov 22 – Dec 21' },
    { sym: '♑', name: 'Capricorn', dates: 'Dec 22 – Jan 19' },
    { sym: '♒', name: 'Aquarius', dates: 'Jan 20 – Feb 18' },
    { sym: '♓', name: 'Pisces', dates: 'Feb 19 – Mar 20' },
  ]
  type Reading = { message: string; color: string; number: number; element: string; planet: string }
  const readings: Record<string, Reading> = {
    Aries:       { message: 'Mars energises your ambitions today. A bold decision made before noon carries celestial support. Avoid confrontation in the evening — patience is your power.', color: '#FF6B6B', number: 9, element: 'Fire', planet: 'Mars' },
    Taurus:      { message: 'Venus smiles on your finances. A long-awaited payment may arrive. Focus on beauty, art, and comfort today — sensory pleasures restore your spirit.', color: '#4ECDC4', number: 6, element: 'Earth', planet: 'Venus' },
    Gemini:      { message: 'Mercury sharpens your mind. An important communication brings clarity. Short trips and new connections are favoured — be open to the unexpected encounter.', color: '#FFE66D', number: 5, element: 'Air', planet: 'Mercury' },
    Cancer:      { message: 'The Moon blesses home and family. A creative project takes shape. Trust your intuition in matters of the heart — feelings are your compass today.', color: '#A8E6CF', number: 2, element: 'Water', planet: 'Moon' },
    Leo:         { message: 'The Sun illuminates your natural charisma. Leadership opportunities arise. Express yourself fearlessly and others will follow — your warmth is magnetic today.', color: '#FFD93D', number: 1, element: 'Fire', planet: 'Sun' },
    Virgo:       { message: 'Mercury brings order to chaos. Your analytical mind solves a long-standing problem. Health routines begin bearing fruit — honour what nourishes you.', color: '#95E1D3', number: 5, element: 'Earth', planet: 'Mercury' },
    Libra:       { message: 'Venus creates harmony in relationships. A partnership deepens. Balance giving and receiving for optimal outcomes — fairness is your superpower.', color: '#F38181', number: 6, element: 'Air', planet: 'Venus' },
    Scorpio:     { message: 'Pluto stirs deep transformation. Secrets surface for healing. Trust the process — what ends today makes room for something far greater to emerge.', color: '#9B59B6', number: 8, element: 'Water', planet: 'Pluto' },
    Sagittarius: { message: 'Jupiter expands horizons. Travel or study brings unexpected wisdom. Say yes to the adventure presenting itself — fortune favours the bold today.', color: '#6BCB77', number: 3, element: 'Fire', planet: 'Jupiter' },
    Capricorn:   { message: 'Saturn rewards discipline. A career milestone is closer than you think. Patience and persistence are your greatest assets — the summit is near.', color: '#4D96FF', number: 8, element: 'Earth', planet: 'Saturn' },
    Aquarius:    { message: 'Uranus sparks innovation. A revolutionary idea emerges from an unexpected source. Embrace the unconventional — your originality breaks boundaries today.', color: '#48CAE4', number: 4, element: 'Air', planet: 'Uranus' },
    Pisces:      { message: 'Neptune deepens your spiritual connection. Dreams carry meaningful messages. A creative endeavour reaches its peak — surrender to the divine flow.', color: '#C3A6FF', number: 7, element: 'Water', planet: 'Neptune' },
  }
  const [selected, setSelected] = useState('Leo')
  const r: Reading = readings[selected] || readings.Leo
  const selectedSign = signs.find(s => s.name === selected)
  return (
    <div className="flex flex-col min-h-dvh animate-fade-in" style={{ background: C.bg }}>
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#0B1A3B,#1E3A8A,#4B1B6B)', minHeight: '190px' }}>
        <ConstellationDots />
        <div className="absolute animate-spin-slow" style={{ top: '-40px', right: '-40px', opacity: 0.3 }} aria-hidden="true">
          <ZodiacRingIllustration size={200} />
        </div>
        <div className="absolute animate-spin-reverse" style={{ bottom: '-20px', left: '-20px', color: 'rgba(180,150,255,0.8)' }} aria-hidden="true">
          <MandalaIllustration size={120} opacity={0.18} />
        </div>
        <PageHeader title="Daily Horoscope" onBack={onBack} />
        <div className="relative z-10 px-5 pb-6 animate-fade-in-up delay-150">
          <p className="font-display text-white text-2xl">{selected}</p>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(200,180,255,0.85)' }}>{selectedSign?.dates}</p>
        </div>
      </div>
      <div className="px-4 py-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2" style={{ width: 'max-content' }}>
          {signs.map(s => (
            <button key={s.name} onClick={() => setSelected(s.name)} className="flex flex-col items-center gap-1 px-3 py-2.5 rounded-2xl transition-all active:scale-95 focus:outline-none" style={{ background: selected === s.name ? C.maroon : C.surfaceMuted, border: `1px solid ${selected === s.name ? C.maroon : C.border}`, minWidth: '60px' }}>
              <span style={{ fontSize: '20px' }}>{s.sym}</span>
              <span className="text-xs font-medium" style={{ color: selected === s.name ? 'white' : C.textSec }}>{s.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="px-4 pb-24 flex flex-col gap-4">
        <PremiumCard className="animate-fade-in-up delay-200">
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${r.color}22` }}>
                <span style={{ fontSize: '28px' }}>{selectedSign?.sym}</span>
              </div>
              <div>
                <p className="font-display text-lg" style={{ color: C.text }}>{selected}</p>
                <p className="text-xs font-medium" style={{ color: r.color }}>{r.planet} rules today</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: C.text }}>{r.message}</p>
          </div>
        </PremiumCard>
        <div className="grid grid-cols-3 gap-3 animate-fade-in-up delay-300">
          {[
            { label: 'Lucky Number', value: String(r.number), glyph: '✦' },
            { label: 'Element', value: r.element, glyph: '◈' },
            { label: 'Planet', value: r.planet, glyph: '◉' },
          ].map(item => (
            <PremiumCard key={item.label}>
              <div className="p-3 flex flex-col items-center text-center gap-1">
                <span style={{ fontSize: '18px', color: C.saffron }}>{item.glyph}</span>
                <p className="font-bold text-lg font-display" style={{ color: C.text }}>{item.value}</p>
                <p className="text-xs" style={{ color: C.textSec }}>{item.label}</p>
              </div>
            </PremiumCard>
          ))}
        </div>
        <PremiumCard className="animate-fade-in-up delay-400">
          <div className="p-5">
            <p className="font-display text-base mb-3" style={{ color: C.text }}>Planetary Overview</p>
            {[
              { planet: 'Sun', sign: 'Taurus', degree: "14°23'" },
              { planet: 'Moon', sign: 'Rohini', degree: 'Nakshatra' },
              { planet: 'Mars', sign: 'Cancer', degree: "7°45'" },
              { planet: 'Mercury', sign: 'Aries', degree: "28°12'" },
              { planet: 'Jupiter', sign: 'Gemini', degree: "3°58'" },
              { planet: 'Venus', sign: 'Pisces', degree: "21°33'" },
              { planet: 'Saturn', sign: 'Aquarius', degree: "16°07'" },
            ].map((p, i) => (
              <div key={p.planet} className="flex items-center justify-between py-2" style={{ borderBottom: i < 6 ? `1px solid ${C.border}` : 'none' }}>
                <span className="text-sm font-medium" style={{ color: C.text }}>{p.planet}</span>
                <span className="text-sm" style={{ color: C.textSec }}>{p.sign}</span>
                <span className="text-xs font-mono" style={{ color: C.saffron }}>{p.degree}</span>
              </div>
            ))}
          </div>
        </PremiumCard>
        <button onClick={() => toast('Full personalized reading coming soon…')} className="w-full py-3.5 rounded-2xl text-sm font-semibold animate-fade-in-up delay-500" style={{ background: 'linear-gradient(135deg,#7B1F1F,#C96B0A)', color: 'white', boxShadow: '0 4px 16px rgba(123,31,31,0.3)' }}>
          Get Full Personalized Reading
        </button>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   WALLET SCREEN
══════════════════════════════════════════════════════════════════════════ */
function WalletScreen({ onBack, toast }: { onBack: () => void; toast: (m: string) => void }) {
  const [amount, setAmount] = useState('')
  const presets = [99, 199, 499, 999, 1999, 4999]
  const transactions = [
    { id: 1, type: 'debit', label: 'Consultation — Acharya Vikas', amount: 1035, date: 'May 12' },
    { id: 2, type: 'credit', label: 'Wallet Recharge', amount: 1000, date: 'May 10' },
    { id: 3, type: 'debit', label: 'Consultation — Dr. Neha', amount: 600, date: 'Apr 28' },
    { id: 4, type: 'credit', label: 'Welcome Bonus', amount: 50, date: 'Apr 1' },
    { id: 5, type: 'debit', label: 'Ganesh Pooja Booking', amount: 501, date: 'Mar 22' },
    { id: 6, type: 'credit', label: 'Wallet Recharge', amount: 2000, date: 'Mar 20' },
  ]
  return (
    <div className="flex flex-col min-h-dvh animate-fade-in" style={{ background: C.bg }}>
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#3B0808,#7B1F1F,#A0500A)', minHeight: '190px' }}>
        <ConstellationDots />
        <div className="absolute animate-spin-slow" style={{ top: '-30px', right: '-30px', opacity: 0.2 }} aria-hidden="true">
          <MandalaIllustration size={160} opacity={1} />
        </div>
        <PageHeader title="BD Wallet" onBack={onBack} />
        <div className="relative z-10 px-5 pb-6 animate-fade-in-up delay-150">
          <p className="text-sm" style={{ color: 'rgba(255,210,160,0.7)' }}>Available Balance</p>
          <p className="font-display text-4xl text-white mt-1">₹1,250</p>
          <p className="text-xs mt-1" style={{ color: 'rgba(255,210,160,0.6)' }}>Valid forever · No expiry</p>
        </div>
      </div>
      <div className="px-4 pt-5 pb-24 flex flex-col gap-5">
        <PremiumCard className="animate-fade-in-up delay-200">
          <div className="p-5">
            <p className="font-display text-base mb-4" style={{ color: C.text }}>Add Money</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {presets.map(p => (
                <button key={p} onClick={() => setAmount(String(p))} className="py-2.5 rounded-xl text-sm font-semibold border transition-all active:scale-95 focus:outline-none" style={{ background: amount === String(p) ? C.maroon : C.surfaceMuted, color: amount === String(p) ? 'white' : C.text, borderColor: amount === String(p) ? C.maroon : C.border }}>₹{p}</button>
              ))}
            </div>
            <div className="relative mb-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-base" style={{ color: C.textSec }}>₹</span>
              <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter custom amount" className="w-full pl-8 pr-4 py-3.5 rounded-xl text-sm border focus:outline-none" style={{ background: C.surfaceMuted, borderColor: C.border, color: C.text, height: '52px' }} />
            </div>
            <button onClick={() => toast(`Processing ₹${amount || '0'} recharge…`)} className="w-full py-3.5 rounded-xl font-semibold text-white text-sm" style={{ background: 'linear-gradient(135deg,#7B1F1F,#C96B0A)', boxShadow: '0 4px 16px rgba(123,31,31,0.3)', minHeight: '48px' }}>
              Proceed to Pay
            </button>
            <div className="flex justify-center items-center gap-4 mt-3">
              {['UPI', 'Card', 'Net Banking'].map(m => (
                <span key={m} className="text-xs font-medium" style={{ color: C.textSec }}>{m}</span>
              ))}
            </div>
          </div>
        </PremiumCard>
        <div className="animate-fade-in-up delay-300">
          <SectionHeader title="Transaction History" />
          <PremiumCard>
            {transactions.map((tx, i) => (
              <div key={tx.id} className="flex items-center gap-3 px-4 py-3.5" style={{ borderBottom: i < transactions.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: tx.type === 'credit' ? '#DCFCE7' : '#FEE2E2' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={tx.type === 'credit' ? C.success : C.live} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {tx.type === 'credit'
                      ? <><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5,12 12,5 19,12"/></>
                      : <><line x1="12" y1="5" x2="12" y2="19"/><polyline points="5,12 12,19 19,12"/></>
                    }
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate" style={{ color: C.text }}>{tx.label}</p>
                  <p className="text-xs" style={{ color: C.textSec }}>{tx.date}</p>
                </div>
                <p className="font-semibold text-sm" style={{ color: tx.type === 'credit' ? C.success : C.live }}>
                  {tx.type === 'credit' ? '+' : '−'}₹{tx.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </PremiumCard>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   KUNDLI DETAIL SCREEN
══════════════════════════════════════════════════════════════════════════ */
function KundliDetailScreen({ onBack, toast }: { onBack: () => void; toast: (m: string) => void }) {
  const [tab, setTab] = useState<'chart' | 'planets' | 'dasha'>('chart')
  const planets = [
    { name: 'Sun',     house: 1,  sign: 'Taurus',    deg: "14°23'", status: 'Exalted' },
    { name: 'Moon',    house: 3,  sign: 'Cancer',    deg: "8°12'",  status: 'Own Sign' },
    { name: 'Mars',    house: 7,  sign: 'Scorpio',   deg: "2°45'",  status: 'Own Sign' },
    { name: 'Mercury', house: 2,  sign: 'Gemini',    deg: "27°33'", status: 'Own Sign' },
    { name: 'Jupiter', house: 9,  sign: 'Capricorn', deg: "18°07'", status: 'Debilitated' },
    { name: 'Venus',   house: 12, sign: 'Pisces',    deg: "21°55'", status: 'Exalted' },
    { name: 'Saturn',  house: 10, sign: 'Aquarius',  deg: "3°41'",  status: 'Own Sign' },
    { name: 'Rahu',    house: 4,  sign: 'Leo',       deg: "11°22'", status: '' },
    { name: 'Ketu',    house: 10, sign: 'Aquarius',  deg: "11°22'", status: '' },
  ]
  const dashas = [
    { lord: 'Venus',  start: '2014', end: '2034', progress: 55, active: true,  years: 20 },
    { lord: 'Sun',    start: '2034', end: '2040', progress: 0,  active: false, years: 6 },
    { lord: 'Moon',   start: '2040', end: '2050', progress: 0,  active: false, years: 10 },
    { lord: 'Mars',   start: '2050', end: '2057', progress: 0,  active: false, years: 7 },
    { lord: 'Rahu',   start: '2057', end: '2075', progress: 0,  active: false, years: 18 },
  ]
  return (
    <div className="flex flex-col min-h-dvh animate-fade-in" style={{ background: C.bg }}>
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#1A0A00,#3B1A02,#7B3B02)', minHeight: '150px' }}>
        <ConstellationDots />
        <div className="absolute animate-spin-slow" style={{ top: '-40px', right: '-40px', opacity: 0.25 }} aria-hidden="true">
          <ZodiacRingIllustration size={180} />
        </div>
        <PageHeader title="Kundli Detail" onBack={onBack} />
        <div className="relative z-10 px-5 pb-5 animate-fade-in-up delay-150">
          <p className="font-display text-white text-lg">Rahul Mehta</p>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(255,210,160,0.7)' }}>Born: Jan 14, 1990 · 6:42 AM · Mumbai</p>
        </div>
      </div>
      <PremiumTabs tabs={[['chart', 'Birth Chart'], ['planets', 'Planets'], ['dasha', 'Dasha']]} active={tab} onChange={t => setTab(t as typeof tab)} />
      <div className="px-4 pt-4 pb-24">
        {tab === 'chart' && (
          <div className="animate-fade-in-up flex flex-col gap-4">
            <PremiumCard>
              <div className="p-4 flex flex-col items-center">
                <p className="font-display text-base mb-4" style={{ color: C.text }}>North Indian Birth Chart</p>
                <svg width="280" height="280" viewBox="0 0 280 280" style={{ maxWidth: '100%' }}>
                  <rect x="10" y="10" width="260" height="260" fill={C.card} stroke={C.border} strokeWidth="1.5" rx="4" />
                  <polygon points="140,10 270,140 140,270 10,140" fill="none" stroke={C.border} strokeWidth="1.2" />
                  <line x1="10" y1="10" x2="270" y2="270" stroke={C.border} strokeWidth="1" />
                  <line x1="270" y1="10" x2="10" y2="270" stroke={C.border} strokeWidth="1" />
                  {[
                    { x: 140, y: 48,  label: '1  Su', color: C.maroon },
                    { x: 207, y: 75,  label: '2  Me', color: C.maroon },
                    { x: 232, y: 140, label: '3  Mo', color: C.maroon },
                    { x: 207, y: 207, label: '4  Ra', color: '#6B21A8' },
                    { x: 140, y: 232, label: '5',     color: C.textSec },
                    { x: 73,  y: 207, label: '6',     color: C.textSec },
                    { x: 48,  y: 140, label: '7  Ma', color: C.maroon },
                    { x: 73,  y: 75,  label: '8',     color: C.textSec },
                    { x: 140, y: 100, label: '9  Ju', color: C.saffron },
                    { x: 180, y: 140, label: '10 Sa', color: C.maroon },
                    { x: 140, y: 180, label: '11',    color: C.textSec },
                    { x: 100, y: 140, label: '12 Ve', color: C.maroon },
                  ].map(({ x, y, label, color }) => (
                    <text key={label} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="9" fill={color} fontWeight="600">{label}</text>
                  ))}
                  <text x="140" y="30" textAnchor="middle" fontSize="8" fill={C.saffron} fontWeight="700">ASC ♉</text>
                </svg>
                <p className="text-xs mt-2" style={{ color: C.textSec }}>Ascendant: Taurus · Lagna Lord: Venus</p>
              </div>
            </PremiumCard>
            <PremiumCard className="animate-fade-in-up delay-200">
              <div className="p-5">
                <p className="font-display text-base mb-3" style={{ color: C.text }}>Key Predictions</p>
                {[
                  { label: 'Career',       text: 'Strong Saturn in 10th house indicates success in service, government, or structured fields.' },
                  { label: 'Wealth',       text: 'Venus exalted in 12th suggests foreign income or spiritual wealth. 2nd lord Mercury is dignified.' },
                  { label: 'Relationship', text: 'Mars in 7th (own sign) makes you passionate. Choose a partner who values independence.' },
                ].map((p, i) => (
                  <div key={p.label} className="pb-3 mb-3" style={{ borderBottom: i < 2 ? `1px solid ${C.border}` : 'none' }}>
                    <p className="text-xs font-bold mb-1" style={{ color: C.saffron }}>{p.label}</p>
                    <p className="text-xs leading-relaxed" style={{ color: C.text }}>{p.text}</p>
                  </div>
                ))}
              </div>
            </PremiumCard>
          </div>
        )}
        {tab === 'planets' && (
          <PremiumCard className="animate-fade-in-up">
            {planets.map((p, i) => (
              <div key={p.name} className="flex items-center gap-3 px-4 py-3.5" style={{ borderBottom: i < planets.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm" style={{ background: 'linear-gradient(135deg,#FEF3E8,#FAE0C0)', color: C.maroon }}>{p.name.slice(0, 2)}</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: C.text }}>{p.name} <span className="font-normal text-xs" style={{ color: C.textSec }}>in {p.sign}</span></p>
                  <p className="text-xs" style={{ color: C.textSec }}>House {p.house} · {p.deg}</p>
                </div>
                {p.status && <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: p.status === 'Exalted' ? '#DCFCE7' : p.status === 'Debilitated' ? '#FEE2E2' : C.surfaceMuted, color: p.status === 'Exalted' ? C.success : p.status === 'Debilitated' ? C.live : C.textSec }}>{p.status}</span>}
              </div>
            ))}
          </PremiumCard>
        )}
        {tab === 'dasha' && (
          <div className="flex flex-col gap-3 animate-fade-in-up">
            {dashas.map((d, i) => (
              <PremiumCard key={d.lord} className={`animate-fade-in-up delay-${i * 150}`}>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ background: d.active ? 'linear-gradient(135deg,#7B1F1F,#C96B0A)' : C.surfaceMuted, color: d.active ? 'white' : C.textSec }}>{d.lord.slice(0, 2)}</div>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: C.text }}>{d.lord} Mahadasha <span className="font-normal text-xs" style={{ color: C.textSec }}>({d.years} yrs)</span></p>
                        <p className="text-xs" style={{ color: C.textSec }}>{d.start} – {d.end}</p>
                      </div>
                    </div>
                    {d.active && <Badge saffron>Active</Badge>}
                  </div>
                  {d.active && (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1.5" style={{ color: C.textSec }}><span>Progress through dasha</span><span>{d.progress}%</span></div>
                      <div className="w-full h-2 rounded-full" style={{ background: C.border }}>
                        <div className="h-2 rounded-full transition-all" style={{ width: `${d.progress}%`, background: 'linear-gradient(90deg,#7B1F1F,#C96B0A)' }} />
                      </div>
                    </div>
                  )}
                </div>
              </PremiumCard>
            ))}
            <button onClick={() => toast('Full dasha report coming soon…')} className="w-full py-3.5 rounded-2xl text-sm font-semibold mt-1" style={{ background: 'linear-gradient(135deg,#7B1F1F,#C96B0A)', color: 'white', boxShadow: '0 4px 16px rgba(123,31,31,0.3)' }}>
              Download Full Dasha Report
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   ONBOARDING / SIGN IN SCREEN
══════════════════════════════════════════════════════════════════════════ */
function OnboardingScreen({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState<'phone' | 'otp' | 'details'>('phone')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState(['', '', '', ''])
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [birthPlace, setBirthPlace] = useState('')
  const otpRef0 = useRef<HTMLInputElement>(null)
  const otpRef1 = useRef<HTMLInputElement>(null)
  const otpRef2 = useRef<HTMLInputElement>(null)
  const otpRef3 = useRef<HTMLInputElement>(null)
  const otpRefs = [otpRef0, otpRef1, otpRef2, otpRef3]
  const handleOtpChange = (idx: number, val: string) => {
    if (!/^\d*$/.test(val)) return
    const next = [...otp]; next[idx] = val.slice(-1); setOtp(next)
    if (val && idx < 3) otpRefs[idx + 1].current?.focus()
  }
  return (
    <div className="flex flex-col min-h-dvh" style={{ background: C.bg }}>
      <div className="relative overflow-hidden flex flex-col items-center justify-center" style={{ background: 'linear-gradient(160deg,#3B0808,#7B1F1F,#C96B0A)', minHeight: '230px' }}>
        <ConstellationDots />
        <div className="absolute animate-spin-slow" style={{ top: '-50px', right: '-50px', opacity: 0.2 }} aria-hidden="true">
          <ZodiacRingIllustration size={220} />
        </div>
        <div className="absolute animate-spin-reverse" style={{ bottom: '-30px', left: '-30px', color: 'rgba(255,210,140,0.8)' }} aria-hidden="true">
          <MandalaIllustration size={130} opacity={0.18} />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-2 py-10 animate-fade-in-up">
          <div className="animate-float"><SunLogo /></div>
          <p className="font-display text-white text-3xl mt-2 text-center">BD ASTRO</p>
          <p className="text-sm text-center" style={{ color: 'rgba(255,220,160,0.85)' }}>Your spiritual companion</p>
        </div>
      </div>
      <div className="flex-1 px-6 py-8 flex flex-col gap-6" style={{ paddingBottom: 'max(32px, env(safe-area-inset-bottom))' }}>
        {step === 'phone' && (
          <div className="animate-fade-in flex flex-col gap-6">
            <div>
              <h2 className="font-display text-2xl mb-1" style={{ color: C.text }}>Welcome</h2>
              <p className="text-sm" style={{ color: C.textSec }}>Enter your mobile number to continue your spiritual journey</p>
            </div>
            <div>
              <label className="text-xs font-semibold block mb-2" style={{ color: C.textSec }}>Mobile Number</label>
              <div className="flex gap-2">
                <div className="flex items-center justify-center px-3 rounded-xl border flex-shrink-0 text-sm font-semibold" style={{ background: C.surfaceMuted, borderColor: C.border, color: C.text, height: '52px', width: '56px' }}>+91</div>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="98XXXXXXXX" className="flex-1 px-4 rounded-xl border text-base focus:outline-none" style={{ background: C.surfaceMuted, borderColor: C.border, color: C.text, height: '52px' }} />
              </div>
            </div>
            <PrimaryBtn full onClick={() => { if (phone.length === 10) setStep('otp') }}>Send OTP</PrimaryBtn>
            <p className="text-xs text-center" style={{ color: C.textSec }}>By continuing, you agree to our Terms of Service &amp; Privacy Policy</p>
          </div>
        )}
        {step === 'otp' && (
          <div className="animate-fade-in flex flex-col gap-6">
            <div>
              <h2 className="font-display text-2xl mb-1" style={{ color: C.text }}>Verify OTP</h2>
              <p className="text-sm" style={{ color: C.textSec }}>Enter the 4-digit OTP sent to +91 {phone}</p>
            </div>
            <div className="flex gap-3 justify-center">
              {otp.map((d, i) => (
                <input key={i} ref={otpRefs[i]} type="tel" maxLength={1} value={d} onChange={e => handleOtpChange(i, e.target.value)} className="text-center text-2xl font-bold rounded-2xl border focus:outline-none transition-all" style={{ width: '60px', height: '60px', background: C.surfaceMuted, borderColor: d ? C.maroon : C.border, color: C.text, boxShadow: d ? `0 0 0 2px ${C.maroon}33` : 'none' }} />
              ))}
            </div>
            <PrimaryBtn full onClick={() => { if (otp.every(d => d)) setStep('details') }}>Verify &amp; Continue</PrimaryBtn>
            <button onClick={() => setStep('phone')} className="text-xs text-center font-semibold active:opacity-60" style={{ color: C.maroon }}>Change number</button>
          </div>
        )}
        {step === 'details' && (
          <div className="animate-fade-in flex flex-col gap-5">
            <div>
              <h2 className="font-display text-2xl mb-1" style={{ color: C.text }}>Your Details</h2>
              <p className="text-sm" style={{ color: C.textSec }}>We use this to generate your personalised Kundli chart</p>
            </div>
            <div>
              <label className="text-xs font-semibold block mb-2" style={{ color: C.textSec }}>Full Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" className="w-full px-4 rounded-xl border text-sm focus:outline-none" style={{ background: C.surfaceMuted, borderColor: C.border, color: C.text, height: '52px' }} />
            </div>
            <div>
              <label className="text-xs font-semibold block mb-2" style={{ color: C.textSec }}>Date of Birth</label>
              <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="w-full px-4 rounded-xl border text-sm focus:outline-none" style={{ background: C.surfaceMuted, borderColor: C.border, color: C.text, height: '52px' }} />
            </div>
            <div>
              <label className="text-xs font-semibold block mb-2" style={{ color: C.textSec }}>Birth Place</label>
              <input type="text" value={birthPlace} onChange={e => setBirthPlace(e.target.value)} placeholder="City, State" className="w-full px-4 rounded-xl border text-sm focus:outline-none" style={{ background: C.surfaceMuted, borderColor: C.border, color: C.text, height: '52px' }} />
            </div>
            <PrimaryBtn full onClick={onDone}>Create My Kundli &amp; Continue</PrimaryBtn>
          </div>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   ROOT APP — ROUTER
══════════════════════════════════════════════════════════════════════════ */
export default function Home() {
  const [screen, setScreen] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  const showToast = (msg: string) => setToast(msg)

  const nav = (s: string) => {
    setScreen(s)
    setMenuOpen(false)
  }

  const bottomNavId = navItems.some(n => n.id === screen) ? screen : 'home'

  const handleBottomNav = (id: string) => {
    const screenMap: Record<string, string> = { home: 'home', guruji: 'guruji', consult: 'consult', seva: 'seva', profile: 'profile' }
    nav(screenMap[id])
  }

  const renderScreen = () => {
    switch (screen) {
      case 'consult': return <ConsultScreen onBack={() => nav('home')} toast={showToast} />
      case 'ask-guruji': return <AskGurujiScreen onBack={() => nav('home')} toast={showToast} />
      case 'live-darbar': return <LiveDarbarScreen onBack={() => nav('home')} toast={showToast} />
      case 'guruji': return <GurujiScreen onBack={() => nav('home')} onAskGuruji={() => nav('ask-guruji')} onLive={() => nav('live-darbar')} toast={showToast} />
      case 'seva': return <SevaScreen onBack={() => nav('home')} toast={showToast} />
      case 'profile': return <ProfileScreen onBack={() => nav('home')} toast={showToast} onNav={nav} />
      case 'panchang': return <PanchangScreen onBack={() => nav('home')} />
      case 'aarti': return <AartiScreen onBack={() => nav('home')} />
      default: return (
        <>
          <AppHeader onMenu={() => setMenuOpen(true)} onNotification={() => nav('notifications')} />
          <main className="flex-1 overflow-y-auto" >
            <HomeScreen onNav={nav} toast={showToast} />
          </main>
        </>
      )
    }
  }

  const isHome = screen === 'home'
  const isFullscreen = screen === 'live-darbar'


  

  return (
    <div className="min-h-dvh w-full flex flex-col items-center" style={{ background: '#EDE3D5' }}>
      <div className="w-full flex flex-col relative" style={{ maxWidth: '550px', minHeight: '100dvh', background: C.bg,paddingBottom: '80px'  }}>
        {renderScreen()}

        {!isFullscreen && <BottomNav active={bottomNavId} onNav={handleBottomNav} />}

        {isHome && <DrawerMenu open={menuOpen} onClose={() => setMenuOpen(false)} onNav={nav} />}

        {toast && <Toast message={toast} onDone={() => setToast(null)} />}
      </div>
    </div>
  )
}
