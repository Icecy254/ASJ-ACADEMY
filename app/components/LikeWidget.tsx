"use client"
import { useEffect, useState } from "react"
import { X } from "lucide-react"

export function LikeWidget() {
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(9)
  const expiry = new Date("2026-11-20T23:59:59+08:00").getTime()

  useEffect(() => {
    if (Date.now() > expiry) return
    const showTimer = setTimeout(() => {
      setVisible(true)
      setCount(9)
      const interval = setInterval(() => {
        setCount((c) => {
          if (c <= 1) {
            clearInterval(interval)
            return 0
          }
          return c - 1
        })
      }, 1000)
      const hideTimer = setTimeout(() => {
        setVisible(false)
        clearInterval(interval)
      }, 9000)
      const cleanup = () => {
        clearInterval(interval)
        clearTimeout(hideTimer)
      }
      return cleanup
    }, 0)
    return () => clearTimeout(showTimer)
  }, [expiry])

  if (!visible) return null

  const progress = count / 9
  const radius = 46
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - progress)

  return (
    <aside
      role="status"
      aria-live="polite"
      aria-label="Special discount 10 percent off until November 20"
      className="fixed right-4 bottom-4 z-50 w-[340px] max-w-[calc(100vw-32px)]"
    >
      <div className="relative bg-white border-2 border-black shadow-[0_0_0_2px_white] p-5">
        <svg className="pointer-events-none absolute -inset-[3px] h-[calc(100%+6px)] w-[calc(100%+6px)] -z-10" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <rect x="1" y="1" width="98" height="98" rx="0" ry="0" fill="none" stroke="#FF3000" strokeWidth="1.5" strokeDasharray={`${circumference}`} strokeDashoffset={dashOffset} style={{ transition: "stroke-dashoffset 1s linear" }} />
        </svg>
        <div className="absolute -top-3 -left-3 grid h-8 w-8 place-items-center rounded-full bg-black text-white border-2 border-white font-mono text-xs font-black">
          {count}
        </div>
        <svg className="pointer-events-none absolute -top-3 -left-3 h-8 w-8 -rotate-90" viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r={radius * 0.34} fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
          <circle cx="16" cy="16" r={radius * 0.34} fill="none" stroke="#FF3000" strokeWidth="2" strokeLinecap="round" strokeDasharray={circumference * 0.34} strokeDashoffset={dashOffset * 0.34} style={{ transition: "stroke-dashoffset 1s linear" }} />
        </svg>
        <button
          aria-label="Dismiss discount offer"
          onClick={() => setVisible(false)}
          className="absolute right-1.5 top-1.5 grid h-6 w-6 min-h-0 !min-h-0 place-items-center border-2 border-black bg-white hover:bg-black hover:text-white transition-colors"
          style={{ minHeight: 0 }}
        >
          <X size={10} strokeWidth={2.5} />
        </button>
        <div className="pr-6">
          <div className="font-black uppercase tracking-tighter text-sm">10% OFF — N5–N1 Groups</div>
          <div className="font-mono text-[10px] tracking-widest uppercase opacity-60">Special discount</div>
        </div>
        <p className="mt-3 text-sm font-medium leading-relaxed">Special discount for N5–N1 Japanese language group classes — 10% off.</p>
        <div className="mt-2 inline-flex items-center gap-2 border-2 border-black bg-black text-white px-3 py-1 font-mono text-xs tracking-widest uppercase font-black">
          Until Nov 20 • Limited
        </div>
        <a href="https://m.me/archeesensei" target="_blank" rel="noreferrer" onClick={() => setVisible(false)} className="mt-4 flex h-11 w-full items-center justify-center gap-2 bg-black text-white border-2 border-black uppercase font-black tracking-widest text-sm hover:bg-[#FF3000] transition-colors">
          Enroll Now
        </a>
      </div>
    </aside>
  )
}
