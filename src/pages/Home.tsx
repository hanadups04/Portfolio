import { Link } from "react-router-dom";
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Globe,
  Code2, Database, Wrench, Layers, Sparkles, Cpu
} from "lucide-react";
// import portrait from "../assets/portrait.jpg";
import { projects } from "../lib/projects";
import { Reveal, CountUp } from "../components/reveal";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
// import samplepicture from "../assets/samplepicture.png";
import samplepicture1 from "../assets/samplepicture1.png";
// import sampleportrait from "../assets/sampleportrait.png";
import { GitHubCalendar } from "react-github-calendar";
import Resume from "../assets/DUPLON_RESUME_SE.pdf";
import { useEffect } from "react";


const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["PHP", "REST"],
  Database: ["Supabase", "PostgreSQL", "Firebase", "NoSQL", "SQL"],
  // Tools: ["Github", "Docker", "Vercel", "Cloudflare", "Figma", "Linear"],
  Tools: ["Github", "Vercel", "Cloudflare", "Postman", "Figma"],
};

const services = [
  { icon: Globe, title: "Web Development", body: "Building responsive, scalable, and quality web applications." },
  // { icon: Smartphone, title: "Mobile Development", body: "Cross-platform apps with React Native and Expo, shipped to App Store and Play Store with care for performance." },
];

const experience = [
  { role: "Software Quality Assurance Tester Intern", org: "LBC Express Inc.", period: "2025 - 2026", body: "Tested LBC's App revamp and website enhancements, documented and reported bugs." },
  { role: "Data Analyst Intern", org: "LBC Express Inc.", period: "2025 - 2026", body: "Created dashboards using Microsoft Power BI to analyze LBC's competitors performance in terms of pricing and social media standing." },
];

// const caseStudies = [
//   {
//     name: "PulseGrid Analytics",
//     goal: "Cut dashboard p95 load to under 1s on 200M+ event datasets.",
//     problem: "Cold cache loads were 8–12s. Customers were churning to faster competitors.",
//     architecture: "ClickHouse columnar store with materialized rollups, fronted by a query planner that rewrites flexible queries against pre-aggregations. Streaming ingest via Kafka.",
//     challenges: "Reusing rollups without losing query flexibility. Predictable write costs at 40k events/sec. Making the dashboard feel instant despite remote queries.",
//     lessons: "Aggressive pre-aggregation pays off, but only if the query layer is smart enough to pick the right rollup. Investing in a thin query planner saved months of one-off optimization.",
//   },
//   {
//     name: "Stride",
//     goal: "Build a run tracker that motivates casual runners with narrative, not metrics.",
//     problem: "Existing trackers feel like spreadsheets. Drop-off after week 2 was the norm.",
//     architecture: "React Native + Expo app, Supabase for auth and sync, Reanimated for procedural recap animations. HealthKit / Health Connect bridges for data.",
//     challenges: "Smooth procedural animation on low-end Android. Background sync without draining battery. Onboarding without permission fatigue.",
//     lessons: "Respecting the device and the user always wins over feature density. Procedural illustration is a real differentiator and worth the engineering tax.",
//   },
// ];

const certifications = [
  { name: "Database IT Specialist — Certiport", issuer: "Certiport", year: "2024", badge: cert1 },
  { name: "Cybersecurity Specialist - Certiport", issuer: "Certiport", year: "2026", badge: cert2 },
  // { name: "Cum Laude", issuer: "NU - Dasmarinas", year: "Class of 2026", badge: cert2 },
];

const learning = [
  { name: "Next.js", note: "Building a project using Next.js" },
  { name: "Arpeps", note: "Currently developing Arpeps" },
  { name: "Typscript", note: "Currently learning typescript" },
];

export default function Home() {

   useEffect(() => {
    const logVisit = async () => {
      await fetch("https://fbakfyzpwfpgemczounp.supabase.co/functions/v1/log-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          screensize: `${window.screen.width}x${window.screen.height}`,
        }),
      });
    };

    logVisit();
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <GitHub />
        <Services />
        <Stats />
        <About />
        <Skills />
        <Projects />
        {/* <CaseStudies /> */}
        <Experience />
        <Certifications />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <span className="h-2 w-2 rounded-full bg-pink animate-pulse-glow" />
          hannah.duplon
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#case-studies" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium rounded-full bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition">
          Let's talk <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function PortraitCard() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div aria-hidden className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.21_350/0.35),transparent_70%)] blur-2xl" />
      <div className="absolute -top-4 -left-4 z-20 flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 backdrop-blur px-3 py-1.5 shadow-lg animate-float">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-pink/70 animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-pink" />
        </span>
        <span className="text-xs font-medium">Available for work</span>
      </div>
      <div className="absolute -top-2 -right-3 z-20 grid place-items-center h-12 w-12 rounded-2xl border border-border/60 bg-surface-elevated/80 backdrop-blur shadow-xl animate-float" style={{ animationDelay: "1.2s" }}>
        <Code2 className="h-5 w-5 text-pink" />
      </div>
      <div className="absolute -bottom-4 -left-3 z-20 grid place-items-center h-12 w-12 rounded-2xl border border-border/60 bg-surface-elevated/80 backdrop-blur shadow-xl animate-float" style={{ animationDelay: "0.6s" }}>
        <Cpu className="h-5 w-5 text-accent" />
      </div>
      <div className="relative rounded-[2rem] border border-border/70 bg-surface-elevated p-3 glow-pink overflow-hidden">
        <div className="absolute inset-0 pointer-events-none rounded-[2rem] bg-gradient-to-br from-pink/10 via-transparent to-accent/10" />
        <img src={samplepicture1} alt="Portrait of Alex Rivera" width={768} height={768} className="rounded-[1.5rem] w-full aspect-square object-cover" />
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 backdrop-blur px-4 py-3">
              <div>
                <div className="text-sm font-medium">
                  Hannah Rea Duplon
                </div>
                <div className="text-xs text-muted-foreground">
                  Full Stack · Remote
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-primary-soft">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                Available
              </div>
            </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3 py-1 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-pink" /> Web Developer · Remote
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
            Building software that <span className="text-gradient-pink">solves real-world problems.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            I'm Hannah — a full-stack engineer focused on web applications. I create side projects that solve real-world problems while exploring new technologies and delivering fast, accessible, and intuitive user experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
              View selected work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-5 py-2.5 text-sm font-medium hover:bg-surface transition">
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mendez, Cavite</span>
            <a href="https://github.com/hanadups04" className="flex items-center gap-2 hover:text-foreground"><Github className="h-4 w-4" /> github</a>
            <a href="www.linkedin.com/in/hannah-duplon-54a155276" className="flex items-center gap-2 hover:text-foreground"><Linkedin className="h-4 w-4" /> linkedin</a>
          </div>
        </Reveal>
        <Reveal delay={150}><PortraitCard /></Reveal>
      </div>
    </section>
  );
}

function GitHub() {
  return(
    <div className="mx-auto max-w-6xl flex justify-center">
      <GitHubCalendar 
      username="hanadups04"
      colorScheme="dark"
      theme={{
        light: [
          "oklch(0.97 0 0)",          
          "oklch(0.92 0.06 350)",     
          "oklch(0.84 0.12 350)",     
          "oklch(0.72 0.21 350)",     
          "oklch(0.60 0.25 350)",     
        ],
        dark: [
          "oklch(0.24 0.02 350)",     
          "oklch(0.40 0.08 350)",
          "oklch(0.55 0.14 350)",
          "oklch(0.72 0.21 350)",     
          "oklch(0.82 0.24 350)",     
        ],
      }}
      blockSize={15}
      blockMargin={4}
      fontSize={14} />
   </div>
  );
}

function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal><SectionLabel>What I do</SectionLabel></Reveal>
      <Reveal delay={80}><h2 className="text-3xl md:text-4xl font-bold mt-3 max-w-2xl">A focused practice across two surfaces.</h2></Reveal>
      <div className="mt-10 grid md:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <article className="card-elevate group relative rounded-2xl border border-border bg-surface/60 p-7 h-full">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-surface-elevated border border-border">
                <s.icon className="h-5 w-5 text-pink" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: 1, label: "Years building" },
    { value: 2, suffix: "", label: "Shipped projects" },
    { value: 0, suffix: "", label: "Days until last commit on Github" },
    // { value: 100, suffix: "", label: "Sleepless Nights" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <Reveal>
        <div className="rounded-3xl border border-border bg-surface/60 backdrop-blur grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
          {items.map((it) => (
            <div key={it.label} className="px-6 py-8">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient-pink">
                <CountUp value={it.value} suffix={it.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{it.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal><SectionLabel>About</SectionLabel></Reveal>
      <div className="mt-3 grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Engineer-first.<br/><span className="text-gradient-pink">Designer-curious.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>I'm Hannah — a full-stack developer passionate about building modern web applications that solve real-world problems. I enjoy turning ideas into functional, user-friendly products while exploring new technologies and continuously improving my skills</p>
            {/* <p>Outside of code, I read a lot of design history, run too slowly, and tinker with illustration in Procreate.</p> */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={Resume} download="DUPLON_RESUME_SE.pdf" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a href="mailto:duplonhannah08@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-surface transition">Email me</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { key: "Frontend", icon: Layers },
    { key: "Backend", icon: Code2 },
    { key: "Database", icon: Database },
    { key: "Tools", icon: Wrench },
  ] as const;
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal><SectionLabel>Technical skills</SectionLabel></Reveal>
      <Reveal delay={80}><h2 className="text-3xl md:text-4xl font-bold mt-3">The stack I reach for.</h2></Reveal>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {groups.map((g, i) => (
          <Reveal key={g.key} delay={i * 80}>
            <div className="card-elevate rounded-2xl border border-border bg-surface/60 p-6 h-full">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <g.icon className="h-4 w-4 text-pink" /> {g.key}
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills[g.key].map((s) => (
                  <li key={s} className="text-sm rounded-md border border-border bg-surface-elevated/60 px-2.5 py-1 font-mono">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <Reveal><SectionLabel>Featured projects</SectionLabel></Reveal>
          <Reveal delay={80}><h2 className="text-3xl md:text-4xl font-bold mt-3">Selected work.</h2></Reveal>
        </div>
        <Reveal delay={120}>
          <a href="https://github.com/hanadups04" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            More on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 100}>
            <Link to={`/projects/${p.slug}`} className="card-elevate group block rounded-3xl border border-border bg-surface/60 overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <img src={p.cover} alt={`${p.title} cover`} width={768} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-pink/90 text-primary-foreground text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1">{p.category}</span>
                </div>
                <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground bg-background/60 backdrop-blur rounded-full px-2 py-0.5">{p.year}</div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-pink transition-colors" />
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// function CaseStudies() {
//   return (
//     <section id="case-studies" className="mx-auto max-w-6xl px-6 py-20">
//       <Reveal><SectionLabel>Case studies</SectionLabel></Reveal>
//       <Reveal delay={80}><h2 className="text-3xl md:text-4xl font-bold mt-3">Deeper dives.</h2></Reveal>
//       <div className="mt-10 space-y-5">
//         {caseStudies.map((c, i) => (
//           <Reveal key={c.name} delay={i * 100}>
//             <article className="card-elevate rounded-3xl border border-border bg-surface/60 p-7 md:p-9">
//               <div className="flex items-center justify-between flex-wrap gap-2">
//                 <h3 className="text-2xl font-semibold">{c.name}</h3>
//                 <span className="text-xs font-mono text-muted-foreground">CASE STUDY</span>
//               </div>
//               <div className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-6">
//                 <Field label="Goal" body={c.goal} />
//                 <Field label="Problem" body={c.problem} />
//                 <Field label="Architecture" body={c.architecture} />
//                 <Field label="Challenges" body={c.challenges} />
//                 <div className="md:col-span-2"><Field label="Lessons learned" body={c.lessons} /></div>
//               </div>
//             </article>
//           </Reveal>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Field({ label, body }: { label: string; body: string }) {
//   return (
//     <div>
//       <div className="text-xs font-mono uppercase tracking-wider text-pink">{label}</div>
//       <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
//     </div>
//   );
// }

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <Reveal><SectionLabel>Experience</SectionLabel></Reveal>
      <Reveal delay={80}><h2 className="text-3xl md:text-4xl font-bold mt-3">Where I've worked.</h2></Reveal>
      <ol className="mt-10 relative border-l border-border ml-3">
        {experience.map((e, i) => (
          <Reveal key={e.role} delay={i * 100}>
            <li className="relative pl-8 pb-10">
              <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-pink ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-lg font-semibold">{e.role}</h3>
                <span className="text-pink">·</span>
                <span className="text-foreground">{e.org}</span>
                <span className="ml-auto text-xs font-mono text-muted-foreground">{e.period}</span>
              </div>
              <p className="mt-2 text-muted-foreground leading-relaxed">{e.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Certifications() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal><SectionLabel>Certifications and Achievements</SectionLabel></Reveal>
      <Reveal delay={80}><h2 className="text-3xl md:text-4xl font-bold mt-3">Credentials.</h2></Reveal>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 80}>
            <div className="card-elevate group flex h-full flex-col items-center rounded-2xl border border-border bg-surface/60 p-6 text-center">
              <div className="relative flex h-40 w-40 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-pink/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={c.badge} alt={`${c.name} badge`} loading="lazy" className="relative h-full w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-transform group-hover:scale-105" />
              </div>
              <div className="mt-5 font-semibold leading-snug">{c.name}</div>
              <div className="mt-1.5 text-sm text-muted-foreground">{c.issuer} · {c.year}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Learning() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal><SectionLabel>Currently learning</SectionLabel></Reveal>
      <Reveal delay={80}><h2 className="text-3xl md:text-4xl font-bold mt-3">What's open in my tabs.</h2></Reveal>
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {learning.map((l, i) => (
          <Reveal key={l.name} delay={i * 100}>
            <div className="card-elevate rounded-2xl border border-border bg-surface/60 p-6 h-full">
              <div className="text-xs font-mono uppercase tracking-wider text-pink">In progress</div>
              <h3 className="mt-3 text-lg font-semibold">{l.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-10 md:p-16">
          <div aria-hidden className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-pink/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              Let's build <span className="text-gradient-pink">something good.</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I'm taking on a small number of projects through 2026. If you have something in mind — a product, a rebuild, or just a conversation — I'd love to hear about it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:duplonhannah08@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
                <Mail className="h-4 w-4" /> duplonhannah08@gmail.com
              </a>
              {/* <a href="https://twitter.com" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-surface transition">
                <Send className="h-4 w-4" /> @hannahduplon
              </a> */}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Hannah Duplon. Developer.</div>
        <div className="flex items-center gap-5">
          <a href="https://github.com" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
          <a href="https://linkedin.com" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:hello@example.com" className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-pink">
      <span className="h-px w-6 bg-pink" /> {children}
    </div>
  );
}
