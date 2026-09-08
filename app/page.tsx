"use client"
import { useState, useRef } from "react"
import {
  ArrowUpRight,
  Award,
  Clock,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Phone,
  Check,
  Users,
  Send,
  Menu,
  X,
  Plus,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Home,
  FileText,
  Wallet,
  HeartHandshake,
  Play,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
} from "lucide-react"

const courses = [
  { level: "N5", type: "individual", title: "Beginner Japanese", desc: "Hiragana, katakana, basic grammar, and 100 essential kanji.", image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80", features: ["40 Live Sessions", "12 Weeks Duration", "Small Groups (Max 10)", "Certificate Included"], price: 8500, color: "bg-black" },
  { level: "N4", type: "individual", title: "Elementary Japanese", desc: "Advanced grammar, 200 more kanji, and conversational skills.", image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80", features: ["48 Live Sessions", "14 Weeks Duration", "Small Groups (Max 8)", "Certificate Included"], price: 9500, color: "bg-black" },
  { level: "N3", type: "individual", title: "Intermediate Japanese", desc: "Complex grammar, 350 kanji, and fluent conversation practice.", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", features: ["56 Live Sessions", "16 Weeks Duration", "Small Groups (Max 6)", "Certificate Included"], price: 12000, color: "bg-black" },
  { level: "N2", type: "individual", title: "Advanced Japanese", desc: "Business Japanese, 500+ kanji, and advanced comprehension.", image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80", features: ["64 Live Sessions", "20 Weeks Duration", "Small Groups (Max 5)", "Certificate Included"], price: 15000, featured: true, color: "bg-[#FF3000]" },
  { level: "N5+N4", type: "bundle", title: "Complete Beginner", desc: "Start from scratch and reach intermediate level in one package.", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80", features: ["88 Live Sessions", "26 Weeks Duration", "Small Groups", "2 Certificates"], price: 16000, originalPrice: 18000, color: "bg-[#FF3000]" },
  { level: "N4+N3", type: "bundle", title: "Intermediate Master", desc: "Bridge the gap from elementary to intermediate fluency.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", features: ["104 Live Sessions", "30 Weeks Duration", "Small Groups", "2 Certificates"], price: 19500, originalPrice: 21500, color: "bg-[#FF3000]" },
]

const passers = [
  { name: "Kenji Yamamoto", level: "N2", year: 2024, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Yuki Tanaka", level: "N2", year: 2024, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Sakura Sato", level: "N2", year: 2024, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "Hiroshi Nakamura", level: "N3", year: 2024, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Mei Watanabe", level: "N3", year: 2024, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
  { name: "Takashi Kobayashi", level: "N2", year: 2023, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Akiko Hayashi", level: "N3", year: 2023, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
  { name: "Shinji Suzuki", level: "N2", year: 2023, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
]

const senseis = [
  { name: "Euru Sensei", title: "N5-N4 Sensei", specialty: "Foundation Builder", exp: 12, image: "/images/euru-sensei.png" },
  { name: "Anthony Sensei", title: "N5 Sensei", specialty: "Expert in kanji & reading comprehension", exp: 10, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Jazn Sensei", title: "N5 Sensei", specialty: "Expert in kanji & reading comprehension", exp: 8, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Teejay Sensei", title: "N4-N3 Sensei", specialty: "Expert in kanji & reading comprehension", exp: 6, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Marie Sensei", title: "N4 Sensei", specialty: "Expert in kanji & reading comprehension", exp: 5, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
  { name: "Jhoena Sensei", title: "N4 Sensei", specialty: "Expert in kanji & reading comprehension", exp: 7, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
  { name: "Au Sensei", title: "N3 Sensei", specialty: "Expert in kanji & reading comprehension", exp: 9, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Archee Sensei", title: "N3 Sensei", specialty: "Expert in kanji & reading comprehension", exp: 15, image: "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?w=400&q=80" },
  { name: "Harley Sensei", title: "N2 Sensei", specialty: "Expert in kanji & reading comprehension", exp: 20, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
]

const assistants = [
  { name: "Hannah Sensei", title: "Tech Coordinator", role: "Manages LMS & technical support", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Belen Sensei", title: "Assignment Manager", role: "Handles homework & assessments", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Emille Sensei", title: "Student Support", role: "Student queries & communications", image: "/images/emille-sensei.jpg" },
  { name: "Jareen Sensei", title: "Content Manager", role: "Learning materials & resources", image: "/images/jareen-sensei.jpg" },
]

const partners = [
  "ASJ × GIFU", "NIHONGO PRO", "OFW JAPAN", "KANJI LAB", "JLPT MASTERY", "TOKYO DRIFT", "SAKURA HOUSE", "OSAKA WORKS", "KYOTO CLASS", "HOKKAIDO HUB", "NAGOYA NEXT",
]

const ofwPillars = [
  { icon: Briefcase, title: "Workplace Japanese & Keigo", desc: "Polite speech, factory & office phrases, interview Japanese. Sound natural on day one." },
  { icon: GraduationCap, title: "JLPT → Career Ladder", desc: "N5 daily life → N2 promotion. Map your level to salary + visa tiers." },
  { icon: FileText, title: "Visa & City Hall", desc: "My Number, ward office, contracts — vocabulary for real bureaucratic survival." },
  { icon: Home, title: "Housing & Cost of Living", desc: "Apartments, guarantors, utilities, Gifu–Nagoya commutes decoded." },
  { icon: Wallet, title: "Jobs — Baito to Seishain", desc: "Part-time to full-time: baito lingo, baito→seishain transition, black company avoidance." },
  { icon: HeartHandshake, title: "Community & Lifestyle", desc: "OFW network in Japan, food, homesickness, community events in Gifu." },
]

const reels = [
  { url: "https://www.facebook.com/reel/2077905009760006", label: "N5 Particle は vs が — 60 sec", thumb: "/images/thumbnail132145.png" },
  { url: "https://www.facebook.com/reel/2077905009760006", label: "Kanji Story: 学 — Learn", thumb: "/images/thumbnail132145.png" },
  { url: "https://www.facebook.com/reel/2077905009760006", label: "Keigo in Convenience Store", thumb: "/images/thumbnail132145.png" },
  { url: "https://www.facebook.com/reel/2077905009760006", label: "~zaru wo enai — N2 Grammar", thumb: "/images/thumbnail132145.png" },
  { url: "https://www.facebook.com/reel/2077905009760006", label: "OFW Daily: City Hall Japanese", thumb: "/images/thumbnail132145.png" },
  { url: "https://www.facebook.com/reel/2077905009760006", label: "JLPT Listening Hack", thumb: "/images/thumbnail132145.png" },
]

export default function Page() {
  const [mobile, setMobile] = useState(false)
  const originalBio = [
    "Archee Mogol, the visionary founder of ASJ ACADEMY, brings over 15 years of experience in Japanese language education. Having studied and worked in Japan, Archee Sensei combines traditional teaching methods with modern interactive approaches.",
    "My mission is to make Japanese learning accessible to everyone, everywhere. At ASJ ACADEMY, we don't just teach language – we open doors to culture, opportunity, and global connections.",
  ]
  const jaBio = [
    "ASJアカデミーの創設者、Archee Mogol（アーチー先生）は、日本語教育に15年以上の経験を持つビジョナリーです。日本での留学・就労経験を活かし、伝統的な教授法と現代的なインタラクティブなアプローチを融合させています。",
    "私の使命は、誰もが、どこからでも日本語を学べるようにすることです。ASJアカデミーでは、単に言語を教えるだけでなく、文化や機会、そして世界とのつながりへの扉を開きます。",
  ]
  const [isJa, setIsJa] = useState(false)
  const founderBio = isJa ? jaBio : originalBio
  const carouselRef = useRef<HTMLDivElement>(null)

  const toggleFounder = () => setIsJa((v) => !v)
  const scrollCarousel = (dir: number) => { if (carouselRef.current) carouselRef.current.scrollBy({ left: dir * 360, behavior: "smooth" }) }

  return (
    <div className="min-h-screen bg-white text-black">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-3 focus:text-sm focus:font-black focus:uppercase">Skip to content</a>

      <header className="sticky top-0 z-40 bg-white border-b-4 border-black">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 flex h-16 items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-3 cursor-pointer" aria-label="ASJ Academy home">
            <img src="/images/no-bg-logo.png" alt="ASJ logo" width={40} height={40} className="h-10 w-10 object-cover" />
            <span className="leading-none">
              <span className="block font-black uppercase tracking-tighter text-[18px]">ASJ ACADEMY</span>
              <span className="block font-mono text-[10px] tracking-widest uppercase">Learn Japanese Online</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            <a href="#home" className="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-black hover:text-white uppercase text-sm font-black tracking-wide transition-colors">Home</a>
            <a href="#courses" className="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-black hover:text-white uppercase text-sm font-black tracking-wide transition-colors">Courses</a>
            <a href="#senseis" className="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-black hover:text-white uppercase text-sm font-black tracking-wide transition-colors">Senseis</a>
            <a href="#jlpt-passers" className="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-black hover:text-white uppercase text-sm font-black tracking-wide transition-colors">Passers</a>
            <a href="/placement" className="px-4 py-2 border-2 border-black bg-[#FF3000] text-white uppercase text-sm font-black tracking-wide hover:bg-black transition-colors">Placement</a>
            <a href="#contact" className="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-black hover:text-white uppercase text-sm font-black tracking-wide transition-colors">Contact</a>
            <a href="#contact" className="ml-2 inline-flex h-11 items-center gap-2 bg-black text-white px-6 uppercase text-sm font-black tracking-widest hover:bg-[#FF3000] transition-colors cursor-pointer"> <GraduationCap size={16} strokeWidth={2} /> Student</a>
          </nav>
          <button aria-label={mobile ? "Close menu" : "Open menu"} onClick={() => setMobile(!mobile)} className="lg:hidden h-11 w-11 grid place-items-center border-2 border-black bg-white hover:bg-black hover:text-white transition-colors cursor-pointer">
            {mobile ? <X size={18} strokeWidth={2.5} /> : <Menu size={18} strokeWidth={2.5} />}
          </button>
        </div>
        {mobile && (
          <div className="lg:hidden border-t-4 border-black bg-white">
            <nav className="flex flex-col p-5 gap-2" aria-label="Mobile">
              {[
                ["Home", "#home"],
                ["Courses", "#courses"],
                ["Senseis", "#senseis"],
                ["JLPT Passers", "#jlpt-passers"],
                ["Placement", "/placement"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <a key={l} onClick={() => setMobile(false)} href={h} className="border-2 border-black px-4 py-3 uppercase font-black tracking-widest hover:bg-black hover:text-white transition-colors">{l}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main id="main">
        <section id="home" className="border-b-4 border-black swiss-noise relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">
              <div className="lg:col-span-7 py-10 md:py-14 lg:py-16 lg:pr-10 border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col">
                <h1 className="uppercase font-black tracking-tighter leading-[0.85] text-[44px] sm:text-[64px] lg:text-[84px] xl:text-[96px]">
                  PASS YOUR<br />
                  JLPT EXAM<br />
                  <span className="text-[#FF3000]">WITH ASJ</span><br />
                  ACADEMY
                </h1>
                <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed font-medium border-l-4 border-black pl-4">
                  Learn from expert Senseis and achieve your JLPT goals. From N5 to N2, your journey to fluency starts here. Practical Japanese for real life in Japan.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#courses" className="inline-flex h-14 items-center gap-3 bg-black text-white px-8 uppercase font-black tracking-widest text-sm hover:bg-[#FF3000] transition-colors cursor-pointer">
                    Explore Courses <ArrowUpRight size={18} strokeWidth={2.5} />
                  </a>
                  <a href="/placement" className="inline-flex h-14 items-center bg-white border-2 border-black px-8 uppercase font-black tracking-widest text-sm hover:bg-black hover:text-white transition-colors cursor-pointer">Find your level</a>
                  <a href="#contact" className="inline-flex h-14 items-center bg-white border-2 border-black px-8 uppercase font-black tracking-widest text-sm hover:bg-black hover:text-white transition-colors cursor-pointer">Contact Us</a>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-0 border-2 border-black">
                  {[
                    { n: "350+", l: "Students" },
                    { n: "13", l: "Instructors" },
                    { n: "98%", l: "Pass Rate" },
                  ].map((s, i) => (
                    <div key={s.l} className={`p-6 text-center bg-white group hover:bg-black hover:text-white transition-colors cursor-pointer ${i !== 2 ? "border-r-2 border-black" : ""}`}>
                      <div className="font-black tracking-tighter text-[32px] leading-none group-hover:scale-105 transition-transform">{s.n}</div>
                      <div className="mt-1 font-mono text-[10px] tracking-widest uppercase opacity-60"> {s.l}</div>
                      <Plus size={14} className="mx-auto mt-2 group-hover:rotate-90 transition-transform duration-200" strokeWidth={2.5} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative bg-[#F2F2F2] swiss-grid-pattern flex flex-col">
                <div className="group flex-1 relative min-h-[480px] lg:min-h-[640px] border-black overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=1000&q=80" alt="Japanese classroom cultural scene" width={1000} height={1200} className="absolute inset-0 h-full w-full object-cover object-right grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-300" loading="eager" style={{ objectPosition: "right center" }} />
                  <div className="absolute inset-0 bg-black/10" aria-hidden />
                  <div className="absolute top-6 left-6 bg-white border-2 border-black px-4 py-2 flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#FF3000] animate-pulse" /> <span className="font-mono text-xs tracking-widest uppercase font-black">Trusted by OFWs</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white border-2 border-black p-4 flex items-center justify-between">
                    <div>
                      <div className="font-black uppercase tracking-tighter">N5 — N2 Curriculum</div>
                      <div className="font-mono text-xs tracking-widest uppercase">Particle → ~zaru wo enai</div>
                    </div>
                    <span className="h-10 w-10 grid place-items-center bg-black text-white border-2 border-black"><ArrowUpRight size={16} /></span>
                  </div>
                  <div className="absolute -top-4 -right-4 h-24 w-24 bg-[#FF3000] border-2 border-black hidden lg:grid place-items-center font-black text-white text-3xl leading-none">学</div>
                </div>
                <div className="bg-black text-white px-6 py-4 flex items-center gap-4 border-t-4 border-black">
                  <span className="h-10 w-10 grid place-items-center bg-[#FF3000] border-2 border-white"><BookOpen size={18} strokeWidth={2} /></span>
                  <div className="text-sm leading-tight">
                    <div className="font-black uppercase tracking-widest">20.5K TikTok • 118.5K Likes</div>
                    <div className="font-mono text-xs tracking-widest uppercase opacity-60">@archee_sensei — N5 Grammar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Partners" className="border-b-4 border-black bg-white overflow-hidden">
          <div className="flex items-center border-b-2 border-black bg-black text-white">
            <span className="hidden md:inline-flex font-mono text-xs tracking-widest uppercase font-black px-6 py-3 border-r-2 border-white/20 whitespace-nowrap">Our Partners — 11</span>
            <span className="md:hidden font-mono text-xs tracking-widest uppercase font-black px-4 py-3">Partners</span>
          </div>
          <div className="relative overflow-hidden bg-[#F2F2F2] py-4">
            <div className="flex w-max gap-6 shrink-0 whitespace-nowrap will-change-transform" style={{ animation: "marquee 22s linear infinite" }}>
              {[...partners, ...partners].map((p, i) => (
                <span key={`${p}-${i}`} className="inline-flex shrink-0 whitespace-nowrap w-auto items-center gap-3 font-black uppercase tracking-tighter text-sm border-2 border-black bg-white px-4 py-2">
                  <img src="/images/no-bg-logo.png" alt="" width={20} height={20} className="h-5 w-5 shrink-0 object-cover" aria-hidden />
                  {p}
                </span>
              ))}
            </div>
          </div>
          <style>{`@keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } } @media (prefers-reduced-motion: reduce) { div[aria-label="Partners"] div { animation: none !important } }`}</style>
        </section>

        <section id="founder" className="border-b-4 border-black">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-black pb-6">
              <div>
                <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">02 — FOUNDER</div>
                <h2 className="mt-2 uppercase font-black tracking-tighter leading-none text-[40px] md:text-[56px]">ARCHEE SENSEI</h2>
              </div>
              <button onClick={toggleFounder} className="h-11 inline-flex items-center gap-2 bg-white border-2 border-black px-6 uppercase font-black tracking-widest text-sm hover:bg-black hover:text-white transition-colors cursor-pointer" aria-label={isJa ? "Show English" : "Show Japanese"}>
                <Languages size={16} strokeWidth={2} /> {isJa ? "ENG" : "あ Translate"}
              </button>
            </div>

            <div className="mt-8 grid lg:grid-cols-12 gap-0 border-2 border-black">
              <div className="lg:col-span-5 bg-[#F2F2F2] swiss-dots p-6 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
                <div className="bg-white border-2 border-black p-2">
                  <img src="/images/founder-orig.png" alt="Archee Sensei, founder of ASJ Academy" width={700} height={760} className="h-[440px] w-full object-cover grayscale" loading="lazy" />
                </div>
                <div className="mt-4 bg-black text-white px-4 py-3 flex justify-between items-center">
                  <span className="font-mono text-xs tracking-widest uppercase">Gifu, Japan • 15+ Years</span>
                  <span className="h-6 w-6 grid place-items-center bg-[#FF3000] font-black text-white text-[11px] leading-none">匠</span>
                </div>
              </div>
              <div className="lg:col-span-7 bg-white p-6 md:p-8 flex flex-col">
                <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase font-black"><span className="h-1 w-8 bg-[#FF3000]" /> Our CEO — Objective. Practical. Personal.</div>
                {founderBio.map((p, i) => (
                  <p key={i} className="mt-6 text-[15px] leading-relaxed font-medium max-w-[60ch]">{p}</p>
                ))}
                <div className="mt-8 grid sm:grid-cols-3 gap-0 border-2 border-black">
                  {[
                    { icon: Award, t: "JLPT N1 Certified" },
                    { icon: GraduationCap, t: "Tokyo University Alumni" },
                    { icon: Languages, t: "15+ Years Experience" },
                  ].map((c) => (
                    <div key={c.t} className="flex items-center gap-3 p-4 border-black bg-white hover:bg-black hover:text-white transition-colors [&:not(:last-child)]:border-r-2 border-b-2 sm:border-b-0">
                      <span className="h-8 w-8 grid place-items-center border-2 border-black bg-[#F2F2F2] shrink-0"><c.icon size={14} strokeWidth={2} className="text-[#FF3000]" /></span>
                      <span className="font-black uppercase text-xs tracking-wide leading-tight">{c.t}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Practical Japanese", "JLPT Focus", "For OFWs"].map((k) => (
                    <span key={k} className="border-2 border-black px-3 py-1.5 font-mono text-xs tracking-widest uppercase font-black bg-[#F2F2F2]">{k}</span>
                  ))}
                </div>
                <div className="mt-6 border-2 border-black bg-black text-white p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 grid place-items-center bg-[#FF3000] border-2 border-white shrink-0"><BookOpen size={18} strokeWidth={2} /></span>
                    <div className="leading-tight">
                      <div className="font-black uppercase tracking-widest text-sm">20.5K TikTok • 118.5K Likes</div>
                      <div className="font-mono text-xs tracking-widest uppercase text-white/60">@archee_sensei — N5 Grammar • OFW trusted</div>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a href="https://www.facebook.com/share/1Fa1jL3ScZ/" target="_blank" rel="noreferrer" aria-label="Facebook" className="h-10 w-10 grid place-items-center bg-white text-black border-2 border-white hover:bg-[#FF3000] hover:text-white hover:border-white transition-colors font-black text-sm cursor-pointer">f</a>
                    <a href="https://www.tiktok.com/@archee_sensei?_r=1&_t=ZS-944RWPOgNsL" target="_blank" rel="noreferrer" aria-label="TikTok" className="h-10 w-10 grid place-items-center bg-white text-black border-2 border-white hover:bg-[#FF3000] hover:text-white hover:border-white transition-colors font-black text-sm cursor-pointer">♪</a>
                    <a href="https://youtube.com/@archeesensei5713?si=sUaMT3El4UtsjcTR" target="_blank" rel="noreferrer" aria-label="YouTube" className="h-10 w-10 grid place-items-center bg-white text-black border-2 border-white hover:bg-[#FF3000] hover:text-white hover:border-white transition-colors font-black text-sm cursor-pointer">▶</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ofw" className="border-b-4 border-black bg-[#F2F2F2] swiss-diagonal">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-0 border-2 border-black bg-black">
              <div className="lg:col-span-7 bg-white p-6 md:p-8">
                <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">03 — OFW HUB</div>
                <h2 className="mt-2 uppercase font-black tracking-tighter leading-none text-[32px] md:text-[44px]">JAPAN CAREER<br />SUPPORT & OFW<br /><span className="text-[#FF3000]">LIFESTYLE HUB</span></h2>
                <p className="mt-3 font-medium leading-relaxed max-w-[60ch]">Built for Overseas Filipino Workers living — or planning to live — in Japan. Not textbook Japanese; survival + promotion Japanese. From conbini keigo to seishain interviews.</p>
                <div className="mt-8 grid sm:grid-cols-2 gap-0 border-2 border-black">
                  {ofwPillars.map((p) => (
                    <div key={p.title} className="p-5 border-black bg-white hover:bg-black hover:text-white transition-colors group border-b-2 even:border-r-0 sm:even:border-r-2 sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-child(odd)]:border-r-2 [&:nth-last-child(-n+2)]:border-b-0">
                      <div className="flex items-start gap-3">
                        <span className="h-8 w-8 grid place-items-center border-2 border-black bg-[#FF3000] text-white shrink-0 group-hover:bg-white group-hover:text-black"><p.icon size={14} strokeWidth={2.2} /></span>
                        <div>
                          <div className="font-black uppercase tracking-tighter text-sm leading-none">{p.title}</div>
                          <p className="mt-1 text-sm leading-relaxed opacity-80 font-medium">{p.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#courses" className="inline-flex h-12 items-center gap-2 bg-black text-white border-2 border-black px-6 uppercase font-black tracking-widest text-sm hover:bg-[#FF3000] transition-colors cursor-pointer">See Courses <ArrowUpRight size={16} /></a>
                  <a href="/placement" className="inline-flex h-12 items-center bg-white border-2 border-black px-6 uppercase font-black tracking-widest text-sm hover:bg-black hover:text-white transition-colors cursor-pointer">Take Placement</a>
                </div>
              </div>
              <div className="lg:col-span-5 bg-black text-white p-6 md:p-8 flex flex-col swiss-grid-pattern relative overflow-hidden">
                <div className="border-2 border-white bg-black p-6">
                  <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">Gifu Base • OFW First</div>
                  <div className="mt-3 font-black uppercase tracking-tighter text-2xl leading-none">FROM N5<br />DAILY LIFE<br />TO N2<br />PROMOTION</div>
                  <div className="mt-4 h-2 w-full bg-[#FF3000]" />
                  <ul className="mt-4 space-y-2 font-mono text-xs tracking-widest uppercase font-bold text-white/80">
                    <li className="flex justify-between border-b border-white/20 py-1"><span>N5</span><span className="text-white">Conbini / Train</span></li>
                    <li className="flex justify-between border-b border-white/20 py-1"><span>N4</span><span className="text-white">Baito Keigo</span></li>
                    <li className="flex justify-between border-b border-white/20 py-1"><span>N3</span><span className="text-white">City Hall / Housing</span></li>
                    <li className="flex justify-between py-1"><span>N2</span><span className="text-[#FF3000]">Seishain + Visa</span></li>
                  </ul>
                </div>
                <div className="mt-6 bg-[#FF3000] border-2 border-white p-4 flex items-center gap-3">
                  <span className="h-10 w-10 grid place-items-center bg-black text-white border-2 border-white"><HeartHandshake size={18} /></span>
                  <div className="text-sm leading-tight font-black uppercase tracking-wide">OFW Community • Real lessons<br /><span className="font-mono text-xs tracking-widest opacity-80">Not textbook. Real Japan.</span></div>
                </div>
                <div className="hidden lg:grid absolute -bottom-6 -right-6 h-20 w-20 bg-white border-2 border-black place-items-center font-black text-black text-2xl">語</div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="border-b-4 border-black bg-[#F2F2F2] swiss-diagonal">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
            <div className="max-w-[720px] border-l-4 border-black pl-6">
              <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">04 — PROGRAMS</div>
              <h2 className="mt-2 uppercase font-black tracking-tighter leading-none text-[40px] md:text-[56px]">CHOOSE YOUR PATH</h2>
              <p className="mt-3 font-medium leading-relaxed">Structured courses from beginner to advanced. Select individual levels or bundle packages for best value. All classes private, online, relentless.</p>
              <a href="/placement" className="mt-4 inline-flex h-10 items-center gap-2 bg-white border-2 border-black px-5 uppercase font-black tracking-widest text-xs hover:bg-black hover:text-white transition-colors cursor-pointer">Not sure? Take placement →</a>
            </div>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((c) => (
                <article key={c.level} className={`group bg-white flex flex-col border-2 border-black hover:bg-[#FF3000] hover:text-white transition-colors duration-200 ${c.featured ? "ring-4 ring-[#FF3000] ring-inset" : ""}`}>
                  <div className={`h-2 w-full ${c.color}`} />
                  <div className="relative h-48 overflow-hidden border-b-2 border-black bg-[#F2F2F2]">
                    <img src={c.image} alt={`${c.title} course`} width={800} height={400} loading="lazy" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-200" />
                    <div className="absolute top-3 left-3 bg-white text-black border-2 border-black px-3 py-1 flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest group-hover:bg-white group-hover:text-black group-hover:border-black">
                      <span>{c.type === "bundle" ? "BUNDLE" : "JLPT"}</span><span className="h-3 w-px bg-black" />{c.level}
                    </div>
                    {c.featured && <span className="absolute top-3 right-3 bg-[#FF3000] text-white border-2 border-black px-2 py-1 font-mono text-[10px] font-black uppercase tracking-widest">Featured</span>}
                    {c.type === "bundle" && !c.featured && <span className="absolute top-3 right-3 bg-black text-white border-2 border-black px-2 py-1 font-mono text-[10px] font-black uppercase tracking-widest">Bundle Save</span>}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="uppercase font-black tracking-tighter text-[18px] leading-none">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed font-medium min-h-[40px] opacity-80">{c.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {c.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm font-medium">
                          <span className="h-6 w-6 grid place-items-center border-2 border-black bg-white group-hover:bg-black group-hover:text-white transition-colors shrink-0"><Check size={12} strokeWidth={3} /></span>{f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-baseline gap-2 border-t-2 border-black pt-4">
                      <span className="text-[28px] font-black tracking-tighter">₱{c.price.toLocaleString()}</span>
                      {c.originalPrice && <span className="text-sm line-through opacity-60">₱{c.originalPrice.toLocaleString()}</span>}
                    </div>
                    <a href="#contact" className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 bg-black text-white border-2 border-black uppercase font-black tracking-widest text-sm hover:bg-white hover:text-black transition-colors cursor-pointer">
                      Enroll Now <ArrowUpRight size={16} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="jlpt-passers" className="border-b-4 border-black bg-white">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-black pb-6">
              <div>
                <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">05 — SUCCESS</div>
                <h2 className="mt-2 uppercase font-black tracking-tighter leading-none text-[40px] md:text-[52px]">OUR JLPT CHAMPIONS</h2>
                <p className="mt-2 font-medium">Celebrating students who achieved their Japanese language goals.</p>
              </div>
              <span className="hidden md:inline-flex font-mono text-xs tracking-widest uppercase font-black border-2 border-black px-3 py-1.5">2023 — 2024 Cohort</span>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-black">
              {passers.map((p, i) => (
                <div key={p.name} className={`bg-white p-3 hover:bg-black hover:text-white transition-colors group border-black ${i % 2 === 0 ? "border-r-2" : "md:border-r-2"} border-b-2 [&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-last-child(-n+4)]:border-b-0`}>
                  <div className="aspect-[4/3] overflow-hidden border-2 border-black bg-[#F2F2F2]">
                    <img src={p.image} alt={p.name} width={400} height={300} loading="lazy" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="pt-3">
                    <div className="font-black uppercase tracking-tighter leading-none text-sm">{p.name}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="bg-[#FF3000] text-white border-2 border-black px-2 py-1 font-mono text-[10px] font-black uppercase tracking-widest group-hover:bg-white group-hover:text-black">JLPT {p.level}</span>
                      <span className="font-mono text-xs tracking-widest uppercase opacity-60">{p.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="social" className="border-b-4 border-black bg-black text-white">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-white/20 pb-6">
              <div>
                <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">06 — SOCIAL</div>
                <h2 className="mt-2 uppercase font-black tracking-tighter leading-none text-[36px] md:text-[48px] text-white">VIDEO CLASSROOM<br />CAROUSEL</h2>
                <p className="mt-2 text-white/60 font-medium max-w-[60ch]">Bite-sized lesson previews from our 20K+ TikTok base. Swipe — then enroll. Reels as below (placeholders, repeatable).</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => scrollCarousel(-1)} aria-label="Previous" className="h-11 w-11 grid place-items-center border-2 border-white bg-black hover:bg-white hover:text-black transition-colors cursor-pointer"><ChevronLeft size={18} strokeWidth={2.5} /></button>
                <button onClick={() => scrollCarousel(1)} aria-label="Next" className="h-11 w-11 grid place-items-center border-2 border-white bg-[#FF3000] hover:bg-white hover:text-black transition-colors cursor-pointer"><ChevronRight size={18} strokeWidth={2.5} /></button>
              </div>
            </div>
            <div ref={carouselRef} className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {reels.map((r, i) => (
                <a key={`${r.url}-${i}`} href={r.url} target="_blank" rel="noreferrer" className="snap-start shrink-0 w-[200px] md:w-[240px] bg-white text-black border-2 border-white group hover:bg-[#FF3000] hover:text-white transition-colors">
                  <div className="relative aspect-[9/16] overflow-hidden border-b-2 border-black bg-[#F2F2F2]">
                    <img src={r.thumb} alt={r.label} width={540} height={960} loading="lazy" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <span className="absolute inset-0 grid place-items-center bg-black/30 group-hover:bg-black/10 transition-colors">
                      <span className="h-12 w-12 grid place-items-center bg-white border-2 border-black group-hover:bg-[#FF3000] group-hover:text-white transition-colors"><Play size={18} fill="currentColor" strokeWidth={0} className="ml-0.5" /></span>
                    </span>
                    <span className="absolute top-3 left-3 bg-black text-white border-2 border-white px-2 py-1 font-mono text-[10px] font-black uppercase tracking-widest">Reel • 60s</span>
                  </div>
                  <div className="p-4">
                    <div className="font-black uppercase tracking-tighter text-sm leading-none">{r.label}</div>
                    <span className="mt-3 inline-flex h-8 items-center gap-1.5 border-2 border-black bg-black text-white px-3 font-mono text-xs font-black uppercase tracking-widest group-hover:bg-white group-hover:text-black">Watch <ArrowUpRight size={12} /></span>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t-2 border-white/20 pt-6">
              <span className="font-mono text-xs tracking-widest uppercase font-black text-white">Follow us —</span>
              <a href="https://www.facebook.com/share/1Fa1jL3ScZ/" target="_blank" rel="noreferrer" aria-label="Follow on Facebook" className="h-10 w-10 grid place-items-center bg-white text-black border-2 border-white hover:bg-[#FF3000] hover:text-white hover:border-white transition-colors font-black text-sm cursor-pointer">f</a>
              <a href="https://www.tiktok.com/@archee_sensei?_r=1&_t=ZS-944RWPOgNsL" target="_blank" rel="noreferrer" aria-label="Follow on TikTok" className="h-10 w-10 grid place-items-center bg-white text-black border-2 border-white hover:bg-[#FF3000] hover:text-white hover:border-white transition-colors font-black text-sm cursor-pointer">♪</a>
              <a href="https://youtube.com/@archeesensei5713?si=sUaMT3El4UtsjcTR" target="_blank" rel="noreferrer" aria-label="Follow on YouTube" className="h-10 w-10 grid place-items-center bg-white text-black border-2 border-white hover:bg-[#FF3000] hover:text-white hover:border-white transition-colors font-black text-sm cursor-pointer">▶</a>
              <span className="font-mono text-xs tracking-widest uppercase text-white/50 ml-2 hidden sm:inline">Tap play → opens Reel in new tab</span>
            </div>
          </div>
        </section>

        <section id="senseis" className="border-b-4 border-black bg-[#F2F2F2] swiss-grid-pattern">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
            <div className="max-w-[720px] border-l-4 border-black pl-6 bg-white p-6 border-2 border-black">
              <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">07 — INSTRUCTORS</div>
              <h2 className="mt-2 uppercase font-black tracking-tighter leading-none text-[40px] md:text-[52px]">OUR EXPERT SENSEIS</h2>
              <p className="mt-3 font-medium">Learn from native-level instructors with years of JLPT teaching experience. Neutral, objective, relentless.</p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black bg-black">
              {senseis.map((s) => (
                <article key={s.name} className="bg-white border-black flex flex-col hover:bg-black hover:text-white transition-colors group border-b-2 sm:border-r-2 [&:nth-child(3n)]:sm:border-r-0">
                  <div className="h-64 overflow-hidden border-b-2 border-black">
                    <img src={s.image} alt={s.name} width={400} height={400} loading="lazy" className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-200" />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="font-black uppercase tracking-tighter leading-none">{s.name}</h3>
                    <div className="mt-1 font-mono text-xs tracking-widest uppercase font-black text-[#FF3000] group-hover:text-white">{s.title}</div>
                    <p className="mt-2 text-sm leading-relaxed font-medium opacity-80 min-h-[40px]">{s.specialty}</p>
                    <div className="mt-3 flex gap-2">
                      <span className="inline-flex items-center gap-1.5 border-2 border-black px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-widest bg-[#F2F2F2] text-black group-hover:bg-white"><BadgeCheck size={12} strokeWidth={2} /> JLPT N1</span>
                      <span className="inline-flex items-center gap-1.5 border-2 border-black px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-widest bg-[#F2F2F2] text-black group-hover:bg-white"><Clock size={12} strokeWidth={2} /> {s.exp} Yrs</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="assistants" className="border-b-4 border-black bg-white">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
            <div className="border-b-2 border-black pb-6">
              <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">08 — SUPPORT</div>
              <h2 className="mt-2 uppercase font-black tracking-tighter leading-none text-[40px] md:text-[52px]">THE ASSISTANT SENSEIS</h2>
              <p className="mt-2 font-medium">Dedicated team for technology, assignments, student support — the grid behind the grid.</p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black">
              {assistants.map((a, i) => (
                <div key={a.name} className={`bg-white p-4 hover:bg-[#FF3000] hover:text-white transition-colors group border-black ${i !== 3 ? "border-r-2" : ""} border-b-2 lg:border-b-0`}>
                  <div className="border-2 border-black overflow-hidden">
                    <img src={a.image} alt={a.name} width={400} height={300} loading="lazy" className="h-48 w-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <h3 className="mt-3 font-black uppercase tracking-tighter leading-none text-sm">{a.name}</h3>
                  <div className="font-mono text-[10px] tracking-widest uppercase font-black opacity-60">{a.title}</div>
                  <p className="mt-1 text-sm font-medium opacity-80">{a.role}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border-2 border-black bg-[#F2F2F2] swiss-dots p-6 flex gap-4 items-start">
              <span className="h-8 w-8 grid place-items-center bg-black text-white border-2 border-black shrink-0"><Users size={16} strokeWidth={2} /></span>
              <p className="text-sm leading-relaxed font-medium max-w-[70ch]">Our Assistant Senseis work behind the scenes to ensure smooth learning experience. They manage the LMS, handle assignment submissions, grade quizzes, and provide technical support. They&apos;re your first point of contact for any non-teaching matters.</p>
            </div>
          </div>
        </section>

        <section id="placement-teaser" className="border-b-4 border-black bg-black text-white">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">09 — PLACEMENT</div>
                <h2 className="mt-2 uppercase font-black tracking-tighter leading-none text-[40px] md:text-[52px] text-white">FIND YOUR<br />LEVEL — 60 SEC</h2>
                <p className="mt-3 text-white/70 font-medium leading-relaxed">10 yes/no questions. Instant tier: N5→N2. No overselling. Takes 60 seconds on the dedicated diagnostic portal.</p>
                <div className="mt-6 bg-white text-black border-2 border-white p-6">
                  <div className="font-mono text-xs tracking-widest uppercase font-black">Preview — Tick what you can do</div>
                  <div className="mt-3 divide-y-2 divide-black border-2 border-black">
                    <div className="flex gap-3 p-3 bg-[#F2F2F2] items-center"><span className="h-5 w-5 border-2 border-black bg-white shrink-0" aria-hidden /><span className="text-sm font-black uppercase tracking-tighter">I can read Hiragana & Katakana</span><span className="ml-auto font-mono text-[10px] font-black">N5</span></div>
                    <div className="flex gap-3 p-3 bg-[#F2F2F2] items-center"><span className="h-5 w-5 border-2 border-black bg-white shrink-0" aria-hidden /><span className="text-sm font-black uppercase tracking-tighter">I can use 敬語 basics in baito</span><span className="ml-auto font-mono text-[10px] font-black">N3</span></div>
                    <div className="flex gap-3 p-3 bg-[#F2F2F2] items-center"><span className="h-5 w-5 border-2 border-black bg-white shrink-0" aria-hidden /><span className="text-sm font-black uppercase tracking-tighter">I understand 〜ざるをえない</span><span className="ml-auto font-mono text-[10px] font-black">N2</span></div>
                  </div>
                  <p className="mt-3 font-mono text-xs tracking-widest uppercase opacity-60">+7 more on the portal</p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-white text-black border-2 border-white p-6">
                  <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">DIAGNOSTIC TEASER</div>
                  <div className="mt-2 font-black uppercase tracking-tighter text-2xl leading-none">YOUR TIER —<br />INSTANT</div>
                  <p className="mt-3 text-sm font-medium opacity-70">Answer 10 questions → get exact course: N5 / N4 / N3 / N2 / Bundles. Client-side only, no signup.</p>
                  <a href="/placement" className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 bg-[#FF3000] text-white border-2 border-black uppercase font-black tracking-widest hover:bg-black transition-colors cursor-pointer"><ClipboardCheck size={16} strokeWidth={2.5} /> Start Full Diagnostic — 60s</a>
                  <a href="/DPF/sample-local-pdf.pdf" download className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 bg-black text-white border-2 border-black uppercase font-black tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer"><FileText size={16} strokeWidth={2} /> Download the PDF</a>
                  <div className="mt-4 flex gap-2 items-center"><span className="h-8 w-8 grid place-items-center bg-[#FF3000] border-2 border-black text-white"><GraduationCap size={16} strokeWidth={2} /></span><span className="h-8 w-8 grid place-items-center bg-black text-white border-2 border-black font-black text-sm leading-none">診</span><span className="font-mono text-xs tracking-widest uppercase font-black">10 Qs • No signup • Instant</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#F2F2F2] swiss-grid-pattern">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
            <div className="border-l-4 border-black pl-6">
              <div className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">10 — CONTACT</div>
              <h2 className="mt-2 uppercase font-black tracking-tighter leading-none text-[40px] md:text-[56px]">START YOUR JOURNEY</h2>
              <p className="mt-3 font-medium">Have questions? We&apos;d love to hear from you. Send us a message — objective reply in 24h.</p>
            </div>

            <div className="mt-8 grid lg:grid-cols-12 gap-0 border-2 border-black bg-black">
              <div className="lg:col-span-5 bg-white p-6 md:p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
                <h3 className="uppercase font-black tracking-tighter text-[18px]">CONTACT INFORMATION</h3>
                <div className="mt-6 space-y-0 border-2 border-black divide-y-2 divide-black">
                  <a href="mailto:archeevlog2023@gmail.com" className="flex gap-4 p-4 min-w-0 hover:bg-black hover:text-white transition-colors cursor-pointer group">
                    <span className="h-10 w-10 grid place-items-center border-2 border-black bg-[#F2F2F2] group-hover:bg-white group-hover:text-black shrink-0"><Mail size={16} strokeWidth={2} /></span>
                    <span className="min-w-0 flex-1 overflow-hidden"><span className="block font-mono text-[10px] tracking-widest uppercase font-black opacity-60">Email</span><span className="block font-black uppercase tracking-wide text-[13px] sm:text-sm break-all leading-tight">archeevlog2023@gmail.com</span></span>
                  </a>
                  <a href="tel:+819054923865" className="flex gap-4 p-4 min-w-0 hover:bg-black hover:text-white transition-colors cursor-pointer group">
                    <span className="h-10 w-10 grid place-items-center border-2 border-black bg-[#F2F2F2] group-hover:bg-white group-hover:text-black shrink-0"><Phone size={16} strokeWidth={2} /></span>
                    <span className="min-w-0 flex-1 overflow-hidden"><span className="block font-mono text-[10px] tracking-widest uppercase font-black opacity-60">Phone</span><span className="block font-black uppercase tracking-wide text-sm">+81 90-5492-3865</span></span>
                  </a>
                  <a href="https://maps.app.goo.gl/4BkzWhFpptf6zaVUA" target="_blank" rel="noreferrer" className="flex gap-4 p-4 min-w-0 hover:bg-black hover:text-white transition-colors cursor-pointer group">
                    <span className="h-10 w-10 grid place-items-center border-2 border-black bg-[#F2F2F2] group-hover:bg-white group-hover:text-black shrink-0"><MapPin size={16} strokeWidth={2} /></span>
                    <span className="min-w-0 flex-1 overflow-hidden"><span className="block font-mono text-[10px] tracking-widest uppercase font-black opacity-60">Location</span><span className="block font-black uppercase tracking-wide text-sm">Gifu, Japan</span></span>
                  </a>
                </div>
                <div className="mt-6 flex gap-2">
                  <a href="https://www.facebook.com/share/1Fa1jL3ScZ/" target="_blank" rel="noreferrer" aria-label="Facebook" className="h-11 w-11 grid place-items-center bg-black text-white border-2 border-black hover:bg-[#FF3000] transition-colors font-black text-sm cursor-pointer">f</a>
                  <a href="https://www.tiktok.com/@archee_sensei?_r=1&_t=ZS-944RWPOgNsL" target="_blank" rel="noreferrer" aria-label="TikTok" className="h-11 w-11 grid place-items-center bg-white border-2 border-black hover:bg-black hover:text-white transition-colors font-black text-sm cursor-pointer">♪</a>
                  <a href="https://youtube.com/@archeesensei5713?si=sUaMT3El4UtsjcTR" target="_blank" rel="noreferrer" aria-label="YouTube" className="h-11 w-11 grid place-items-center bg-white border-2 border-black hover:bg-black hover:text-white transition-colors font-black text-sm cursor-pointer">▶</a>
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget as HTMLFormElement); alert(`Message sent!\nName: ${fd.get("name")}\nCourse: ${fd.get("course")}`); (e.target as HTMLFormElement).reset() }} className="lg:col-span-7 bg-white p-6 md:p-8">
                <h3 className="uppercase font-black tracking-tighter text-[18px]">SEND US A MESSAGE</h3>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="font-mono text-xs tracking-widest uppercase font-black">Full Name *</span>
                    <input name="name" required placeholder="Your name" className="mt-1 h-12 w-full border-2 border-black bg-[#F2F2F2] px-4 text-sm font-medium placeholder:text-black/40 focus:bg-white focus:border-[#FF3000] focus:outline-none" />
                  </label>
                  <label className="block">
                    <span className="font-mono text-xs tracking-widest uppercase font-black">Email Address *</span>
                    <input name="email" type="email" required placeholder="your@email.com" className="mt-1 h-12 w-full border-2 border-black bg-[#F2F2F2] px-4 text-sm font-medium placeholder:text-black/40 focus:bg-white focus:border-[#FF3000] focus:outline-none" />
                  </label>
                </div>
                <label className="mt-4 block">
                  <span className="font-mono text-xs tracking-widest uppercase font-black">Interested Course</span>
                  <select name="course" defaultValue="" className="mt-1 h-12 w-full border-2 border-black bg-[#F2F2F2] px-4 text-sm font-medium cursor-pointer focus:bg-white focus:border-[#FF3000] focus:outline-none">
                    <option value="">Select a course</option>
                    <option value="n5">JLPT N5 - Beginner</option>
                    <option value="n4">JLPT N4 - Elementary</option>
                    <option value="n3">JLPT N3 - Intermediate</option>
                    <option value="n2">JLPT N2 - Advanced</option>
                    <option value="bundle-n5n4">Bundle N5+N4</option>
                    <option value="bundle-n4n3">Bundle N4+N3</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label className="mt-4 block">
                  <span className="font-mono text-xs tracking-widest uppercase font-black">Message</span>
                  <textarea name="message" rows={5} placeholder="Tell us about your learning goals..." className="mt-1 min-h-[120px] w-full border-2 border-black bg-[#F2F2F2] p-4 text-sm font-medium placeholder:text-black/40 focus:bg-white focus:border-[#FF3000] focus:outline-none" />
                </label>
                <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 bg-black text-white border-2 border-black uppercase font-black tracking-widest text-sm hover:bg-[#FF3000] transition-colors cursor-pointer">
                  <Send size={16} strokeWidth={2.5} /> Send Message
                </button>
                <p className="mt-3 text-center font-mono text-xs tracking-widest uppercase opacity-60">We&apos;ll reply within 24 hours • No spam</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white border-t-4 border-[#FF3000]">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 py-10">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <img src="/images/no-bg-logo.png" alt="ASJ logo" width={36} height={36} className="h-9 w-9 object-cover border-2 border-white" />
                <span className="font-black uppercase tracking-tighter">ASJ ACADEMY</span>
              </div>
              <p className="mt-3 max-w-[420px] text-sm leading-relaxed text-white/60 font-medium">Your trusted partner in mastering Japanese language online. Join thousands of successful students worldwide. Objective. Precise. Swiss.</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-sm font-medium text-white/70">
                <li><a href="#home" className="hover:text-white hover:underline cursor-pointer">Home</a></li>
                <li><a href="#courses" className="hover:text-white hover:underline cursor-pointer">Courses</a></li>
                <li><a href="#senseis" className="hover:text-white hover:underline cursor-pointer">Senseis</a></li>
                <li><a href="#jlpt-passers" className="hover:text-white hover:underline cursor-pointer">JLPT Passers</a></li>
                <li><a href="#contact" className="hover:text-white hover:underline cursor-pointer">Contact</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">Courses</h4>
              <ul className="mt-3 space-y-2 text-sm font-medium text-white/70">
                <li><a href="#courses" className="hover:text-white cursor-pointer">JLPT N5 - Beginner</a></li>
                <li><a href="#courses" className="hover:text-white cursor-pointer">JLPT N4 - Elementary</a></li>
                <li><a href="#courses" className="hover:text-white cursor-pointer">JLPT N3 - Intermediate</a></li>
                <li><a href="#courses" className="hover:text-white cursor-pointer">JLPT N2 - Advanced</a></li>
                <li><a href="#courses" className="hover:text-white cursor-pointer">Bundle Packages</a></li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h4 className="font-mono text-xs tracking-widest uppercase font-black text-[#FF3000]">Student Portal</h4>
              <ul className="mt-3 space-y-2 text-sm font-medium text-white/70">
                <li><a href="/placement" className="hover:text-white cursor-pointer">Placement Test</a></li>
                <li><a href="#contact" className="hover:text-white cursor-pointer">View Assignments</a></li>
                <li><a href="#contact" className="hover:text-white cursor-pointer">Check Scores</a></li>
                <li><a href="#contact" className="hover:text-white cursor-pointer">Technical Support</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row gap-3 items-center justify-between border-t-2 border-white/20 pt-6 font-mono text-xs tracking-widest uppercase">
            <p className="text-white/60">© 2024 ASJ ACADEMY. All rights reserved.</p>
            <img src="/images/no-bg-logo.png" alt="ASJ Academy logo" width={80} height={32} className="h-8 w-auto object-cover border-2 border-white" />
          </div>
        </div>
      </footer>
    </div>
  )
}
