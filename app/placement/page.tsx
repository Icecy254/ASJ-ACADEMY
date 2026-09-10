"use client"
import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Check, Plus, GraduationCap, ClipboardCheck, FileText } from "lucide-react"

const questions = [
  { id: "q1", text: "I can read Hiragana & Katakana without hesitation", tier: "N5" },
  { id: "q2", text: "I know ~100 kanji (日、月、人、大...)", tier: "N5" },
  { id: "q3", text: "I understand particles は・が・を・に・で", tier: "N5" },
  { id: "q4", text: "I can make past tense & て-form", tier: "N4" },
  { id: "q5", text: "I know ~300 kanji and can read simple manga", tier: "N4" },
  { id: "q6", text: "I understand ~たことがある / 〜なければならない", tier: "N4" },
  { id: "q7", text: "I can use 敬語 (keigo) basics in baito", tier: "N3" },
  { id: "q8", text: "I know ~650 kanji and understand ~そうだ / 〜らしい", tier: "N3" },
  { id: "q9", text: "I understand 〜ざるをえない / 〜わけではない (N2 grammar)", tier: "N2" },
  { id: "q10", text: "I can read news and passive/causative fluently", tier: "N2" },
]

function recommend(score: number) {
  if (score <= 2) return { level: "N5 — Beginner Japanese", price: "₱8,500", desc: "Start with Hiragana/Katakana → N5 foundation." }
  if (score <= 4) return { level: "N4 — Elementary", price: "₱9,500", desc: "You have N5, push to N4 grammar + 200 kanji." }
  if (score <= 6) return { level: "N3 — Intermediate", price: "₱12,000", desc: "N4 done — bridge to N3 fluent conversation." }
  if (score <= 8) return { level: "N2 — Advanced", price: "₱15,000", desc: "N3 solid — attack business Japanese & 500+ kanji." }
  return { level: "N2 Advanced / Bundle N4+N3", price: "₱15,000+", desc: "Strong — finish N2 or bundle for mastery." }
}

export default function PlacementPage() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)
  const score = Object.values(answers).filter(Boolean).length
  const result = recommend(score)
  const toggle = (id: string) => setAnswers((a) => ({ ...a, [id]: !a[id] }))

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-40 bg-white border-b-4 border-black">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/no-bg-logo.png" alt="ASJ logo" width={40} height={40} className="h-10 w-10 object-cover" />
            <span className="font-black uppercase tracking-tighter">ASJ ACADEMY</span>
          </Link>
          <Link href="/" className="hidden md:inline-flex h-11 items-center border-2 border-black px-6 uppercase font-black tracking-widest text-sm hover:bg-black hover:text-white transition-colors">← Home</Link>
        </div>
      </header>

      <main>
        <section className="border-b-4 border-black">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-12 md:py-16">
            <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">PLACEMENT — DIAGNOSTIC</div>
            <h1 className="mt-2 uppercase font-black tracking-tighter leading-none text-[40px] md:text-[64px]">JLPT PLACEMENT<br /><span className="text-[#FF3000]">& DIAGNOSTIC</span> PORTAL</h1>
            <p className="mt-3 max-w-[60ch] font-medium">Check what you already know. We convert your score to the exact tier you need — no overselling. 10 yes/no. Takes 60 seconds.</p>
            <div className="mt-6 inline-flex items-center gap-2 border-2 border-black bg-[#F2F2F2] px-4 py-2 font-mono text-xs tracking-widest uppercase font-black"><ClipboardCheck size={14} /> 10 Questions • Instant Result</div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-10">
          <div className="grid lg:grid-cols-12 gap-0 border-2 border-black">
            <div className="lg:col-span-8 bg-white p-6 md:p-8">
              <h2 className="uppercase font-black tracking-tighter text-xl">SELF-CHECK — Tick what you can do</h2>
              <div className="mt-6 divide-y-2 divide-black border-2 border-black">
                {questions.map((q) => (
                  <label key={q.id} className={`flex gap-4 p-4 cursor-pointer hover:bg-black hover:text-white transition-colors ${answers[q.id] ? "bg-black text-white" : "bg-white"}`}>
                    <input type="checkbox" checked={!!answers[q.id]} onChange={() => toggle(q.id)} className="mt-1 h-5 w-5 accent-[#FF3000] shrink-0" />
                    <span className="flex-1">
                      <span className="block font-black uppercase tracking-tighter text-sm">{q.text}</span>
                      <span className="font-mono text-xs tracking-widest uppercase opacity-60">{q.tier} • {q.id}</span>
                    </span>
                    <span className={`h-6 w-6 grid place-items-center border-2 border-black shrink-0 ${answers[q.id] ? "bg-[#FF3000] text-white" : "bg-[#F2F2F2]"}`}>{answers[q.id] && <Check size={12} strokeWidth={3} />}</span>
                  </label>
                ))}
              </div>
              <button onClick={() => setSubmitted(true)} className="mt-6 w-full h-12 bg-[#FF3000] text-white border-2 border-black uppercase font-black tracking-widest hover:bg-black transition-colors cursor-pointer">
                See my level — {score}/10
              </button>
              {!submitted && <p className="mt-2 font-mono text-xs tracking-widest uppercase opacity-60">Tick honestly. We recommend the lowest tier you haven&apos;t mastered.</p>}
            </div>

            <div className="lg:col-span-4 bg-black text-white p-6 md:p-8 border-t-2 lg:border-t-0 lg:border-l-2 border-black flex flex-col">
              <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">YOUR RESULT</div>
              {submitted ? (
                <>
                  <div className="mt-3 border-2 border-white bg-black p-6">
                    <div className="font-black uppercase tracking-tighter text-2xl leading-none">{result.level}</div>
                    <div className="mt-2 font-mono text-sm tracking-widest uppercase text-[#FF3000]">{result.price}</div>
                    <p className="mt-3 text-white/70 text-sm leading-relaxed font-medium">{result.desc}</p>
                    <div className="mt-4 h-2 w-full bg-[#FF3000]" />
                    <div className="mt-4 font-mono text-xs tracking-widest uppercase">Score: {score}/10 • {score <= 2 ? "N5" : score <= 4 ? "N4" : score <= 6 ? "N3" : "N2"} track</div>
                  </div>
                  <Link href="/#courses" className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 bg-white text-black border-2 border-white uppercase font-black tracking-widest hover:bg-[#FF3000] hover:text-white hover:border-white transition-colors">Go to Courses <ArrowUpRight size={16} /></Link>
                  <Link href="/#contact" className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 bg-transparent text-white border-2 border-white uppercase font-black tracking-widest hover:bg-white hover:text-black transition-colors">Contact to Enroll</Link>
                  <a href="/DPF/sample-local-pdf.pdf" download className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 bg-white text-black border-2 border-black uppercase font-black tracking-widest hover:bg-black hover:text-white transition-colors"><FileText size={16} strokeWidth={2} /> Download the PDF</a>
                </>
              ) : (
                <div className="mt-6 border-2 border-white/20 p-6 bg-white/5">
                  <div className="font-black uppercase tracking-tighter">Tick & Submit</div>
                  <p className="mt-2 text-white/60 text-sm">Your tier appears here. No data leaves your device — client-side only.</p>
                  <div className="mt-4 flex gap-2">
                    <span className="h-8 w-8 grid place-items-center bg-[#FF3000] border-2 border-white"><GraduationCap size={16} /></span>
                    <span className="h-8 w-8 grid place-items-center bg-white text-black border-2 border-white"><Plus size={16} /></span>
                  </div>
                </div>
              )}
              <div className="mt-auto pt-8" />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="inline-flex h-11 items-center border-2 border-black px-6 uppercase font-black tracking-widest text-sm hover:bg-black hover:text-white transition-colors">← Back Home</Link>
            <Link href="/#courses" className="inline-flex h-11 items-center bg-black text-white px-6 uppercase font-black tracking-widest text-sm hover:bg-[#FF3000] transition-colors">View All Courses</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
