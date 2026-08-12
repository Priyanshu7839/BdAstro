export const COLORS = {
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
} as const

export const astrologers = [
  { id: 1, name: 'Acharya Vikas Shastri', expertise: 'Vedic Astrologer', experience: '18 yrs', rating: 4.9, reviews: '2.3K', price: 45, status: 'online' as const, lang: 'Hindi, English', img: 'https://images.unsplash.com/photo-1762795297480-ffb95d283b7f?w=200&h=240&fit=crop&auto=format' },
  { id: 2, name: 'Dr. Neha Trivedi', expertise: 'Jyotish, Vastu, Numerology', experience: '12 yrs', rating: 4.8, reviews: '1.8K', price: 40, status: 'online' as const, lang: 'Hindi, Gujarati', img: 'https://images.unsplash.com/photo-1543934776-32d1cc654abb?w=200&h=240&fit=crop&auto=format' },
  { id: 3, name: 'Pt. Aditya Shukla', expertise: 'Vedic Astrology, Kundli Analysis', experience: '22 yrs', rating: 4.9, reviews: '1.2K', price: 35, status: 'online' as const, lang: 'Hindi, English', img: 'https://images.unsplash.com/photo-1762795297479-d92588f24f7e?w=200&h=240&fit=crop&auto=format' },
  { id: 4, name: 'Pandit Ramesh Joshi', expertise: 'Prashna Kundli, Muhurta', experience: '15 yrs', rating: 4.7, reviews: '980', price: 50, status: 'busy' as const, lang: 'Hindi, Marathi', img: 'https://images.unsplash.com/photo-1762795297387-b0b88a635aa6?w=200&h=240&fit=crop&auto=format' },
  { id: 5, name: 'Jyotishi Kavita Sharma', expertise: 'Tarot, Numerology', experience: '9 yrs', rating: 4.6, reviews: '750', price: 30, status: 'online' as const, lang: 'Hindi, English', img: 'https://images.unsplash.com/photo-1762795297240-946fbb9f4584?w=200&h=240&fit=crop&auto=format' },
  { id: 6, name: 'Guru Pradeep Das', expertise: 'Lal Kitab, Vastu', experience: '25 yrs', rating: 4.8, reviews: '3.1K', price: 60, status: 'offline' as const, lang: 'Hindi, Bengali', img: 'https://images.unsplash.com/photo-1543934776-32d1cc654abb?w=200&h=240&fit=crop&auto=format' },
]

export type Astrologer = typeof astrologers[0]

export const gurujiAnswers = [
  { id: 1, q: 'When will I get a good job?', a: 'Saturn is entering your 10th house in November — career doors open then. Focus on skills now, not shortcuts.', date: 'May 10, 2025', asker: 'Rahul M.' },
  { id: 2, q: 'Should I invest in property this year?', a: 'Jupiter favors property in the second half of 2025. Wait until after Diwali for the best muhurta.', date: 'May 8, 2025', asker: 'Priya S.' },
  { id: 3, q: 'My marriage is facing difficulties. What to do?', a: 'Venus and Mars are in opposition in your chart. Perform Shukra pooja on Fridays for 21 weeks.', date: 'May 5, 2025', asker: 'Amit T.' },
]

export const gurujiSchedule = [
  { id: 1, title: 'Live Darbar', date: 'May 23, 2025', time: '8:00 PM – 9:30 PM', type: 'live' },
  { id: 2, title: 'Satsang & Q&A', date: 'May 25, 2025', time: '7:00 PM – 8:00 PM', type: 'online' },
  { id: 3, title: 'Purnima Special Puja', date: 'May 23, 2025', time: '5:00 AM – 6:00 AM', type: 'puja' },
]

export const pujas = [
  { id: 1, name: 'Ganesh Pooja', desc: 'Remove obstacles and attract auspicious energy', price: 501, duration: '45 min', img: 'https://images.unsplash.com/photo-1772346823487-2ae1e2409c01?w=300&h=200&fit=crop&auto=format' },
  { id: 2, name: 'Navgraha Shanti', desc: 'Pacify all nine planetary influences', price: 1100, duration: '90 min', img: 'https://images.unsplash.com/photo-1774751345322-300b2984254b?w=300&h=200&fit=crop&auto=format' },
  { id: 3, name: 'Lakshmi Pooja', desc: 'Invite prosperity and abundance', price: 751, duration: '60 min', img: 'https://images.unsplash.com/photo-1774751403526-39d30322e51b?w=300&h=200&fit=crop&auto=format' },
  { id: 4, name: 'Mahamrityunjaya Jaap', desc: 'For health, protection, and long life', price: 2100, duration: '120 min', img: 'https://images.unsplash.com/photo-1772346823487-2ae1e2409c01?w=300&h=200&fit=crop&auto=format' },
]

export type Puja = typeof pujas[0]

export const donationCauses = [
  { id: 1, name: 'Annadanam', desc: 'Feed the needy — daily langar at the ashram', raised: 84200, goal: 100000, suggested: 501 },
  { id: 2, name: 'Gau Seva', desc: 'Care for cows at our gaushala', raised: 52000, goal: 75000, suggested: 251 },
  { id: 3, name: 'Vidya Daan', desc: 'Sponsor education for underprivileged children', raised: 31000, goal: 50000, suggested: 1001 },
]

export const consultationHistory = [
  { id: 1, astrologer: 'Acharya Vikas Shastri', type: 'Chat', date: 'May 12, 2025', duration: '23 min', topic: 'Career & Finance', amount: 1035 },
  { id: 2, astrologer: 'Dr. Neha Trivedi', type: 'Call', date: 'Apr 28, 2025', duration: '15 min', topic: 'Relationship', amount: 600 },
  { id: 3, astrologer: 'Pt. Aditya Shukla', type: 'Chat', date: 'Apr 10, 2025', duration: '31 min', topic: 'Kundli Reading', amount: 1085 },
]

export const panchangData = {
  today: { tithi: 'Ashtami', nakshatra: 'Rohini', yoga: 'Shiva', karana: 'Kaulava', sunrise: '5:42 AM', sunset: '7:18 PM', moonrise: '12:34 PM', moonset: '1:08 AM', rahuKaal: '7:30 AM – 9:00 AM' },
  weekDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  dates: [
    { d: 19, tithi: 'Panchami' }, { d: 20, tithi: 'Shashthi' }, { d: 21, tithi: 'Saptami' },
    { d: 22, tithi: 'Ashtami', today: true }, { d: 23, tithi: 'Navami', event: 'Purnima Puja' },
    { d: 24, tithi: 'Dashami' }, { d: 25, tithi: 'Ekadashi' },
  ],
}

export const bhajans = [
  { id: 1, title: 'Jai Ganesh Deva', artist: 'Anuradha Paudwal', duration: '5:42', category: 'Ganesh', img: 'https://images.unsplash.com/photo-1772346823487-2ae1e2409c01?w=120&h=120&fit=crop&auto=format' },
  { id: 2, title: 'Hanuman Chalisa', artist: 'Gulshan Kumar', duration: '7:18', category: 'Hanuman', img: 'https://images.unsplash.com/photo-1774751345322-300b2984254b?w=120&h=120&fit=crop&auto=format' },
  { id: 3, title: 'Om Jai Jagdish Hare', artist: 'Lata Mangeshkar', duration: '4:55', category: 'Vishnu', img: 'https://images.unsplash.com/photo-1762795297387-b0b88a635aa6?w=120&h=120&fit=crop&auto=format' },
  { id: 4, title: 'Shiv Tandav Stotram', artist: 'Ravi Shankar', duration: '8:12', category: 'Shiva', img: 'https://images.unsplash.com/photo-1774751403526-39d30322e51b?w=120&h=120&fit=crop&auto=format' },
  { id: 5, title: 'Durga Chalisa', artist: 'Narendra Chanchal', duration: '6:30', category: 'Durga', img: 'https://images.unsplash.com/photo-1772346823487-2ae1e2409c01?w=120&h=120&fit=crop&auto=format' },
  { id: 6, title: 'Lakshmi Aarti', artist: 'Anuradha Paudwal', duration: '3:48', category: 'Lakshmi', img: 'https://images.unsplash.com/photo-1774751345322-300b2984254b?w=120&h=120&fit=crop&auto=format' },
]

export type Bhajan = typeof bhajans[0]

export const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'guruji', label: 'Guruji', path: '/guruji' },
  { id: 'consult', label: 'Consult', path: '/consult' },
  { id: 'seva', label: 'Seva', path: '/seva' },
  { id: 'profile', label: 'Profile', path: '/profile' },
]
