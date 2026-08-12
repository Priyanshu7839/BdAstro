import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { COLORS as C } from '@/data/constants'

const ToastCtx = createContext<(msg: string) => void>(() => {})

export function useToast() {
  return useContext(ToastCtx)
}

function ToastMsg({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2600)
    return () => clearTimeout(t)
  }, [message, onDone])
  return (
    <div
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full text-sm font-medium text-white shadow-lg animate-fade-in whitespace-nowrap"
      style={{ background: C.maroonDark }}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  )
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<string | null>(null)
  const showToast = (msg: string) => setToast(msg)
  return (
    <ToastCtx.Provider value={showToast}>
      {children}
      {toast && <ToastMsg message={toast} onDone={() => setToast(null)} />}
    </ToastCtx.Provider>
  )
}
