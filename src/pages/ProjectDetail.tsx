import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Github, ExternalLink, Layers } from "lucide-react";
import { getProject, projects } from "../lib/projects";
import { Reveal } from "../components/reveal";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug = "" } = useParams();
  const p = getProject(slug);
  if (!p) return <NotFound />;

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="mt-10 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
          <Reveal>
            <div className="rounded-3xl border border-border bg-surface/60 overflow-hidden">
              <img src={p.cover} alt={`${p.title} cover`} width={768} height={768} className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {p.preview.map((s, i) => (
                <div key={i} className="card-elevate rounded-xl border border-border bg-surface/60 overflow-hidden">
                  <img src={s.src} alt={s.caption} loading="lazy" className="w-full aspect-square object-cover" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="rounded-full border border-pink/40 bg-pink/10 text-pink text-xs font-semibold uppercase tracking-wide px-3 py-1">{p.category}</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground border border-border rounded-full px-2.5 py-1">
                <Calendar className="h-3 w-3" /> {p.year}
              </span>
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-6xl font-bold tracking-tight">{p.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{p.short}</p>

            <div className="mt-7">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Layers className="h-4 w-4 text-pink" /> Tech Stack
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-full border border-border bg-surface-elevated/60 px-3 py-1 text-sm font-mono">{t}</li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
                  <ExternalLink className="h-4 w-4" /> Live site
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-surface transition">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-x-12 gap-y-12">
          <DetailBlock label="Problem" body={p.problem} />
          <DetailBlock label="Solution" body={p.solution} />
          <DetailBlock label="My Role" body={p.role} />
          <div>
            <Label>Challenges</Label>
            <ul className="mt-3 space-y-2.5">
              {p.challenges.map((c) => (
                <li key={c} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pink shrink-0" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {p.demoUrl && (
          <Reveal>
            <div className="mt-20">
              <div className="flex items-center justify-between">
                <Label>Live demo</Label>
                <a href={p.demoUrl} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                  Open in new tab <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="mt-4 rounded-2xl border border-border bg-surface/60 overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-surface-elevated/40">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
                  <span className="ml-3 text-xs font-mono text-muted-foreground truncate">{p.demoUrl}</span>
                </div>
                <iframe src={p.demoUrl} title={`${p.title} live demo`} loading="lazy" className="w-full aspect-video bg-background" />
              </div>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="mt-20">
            <Label>Screenshots</Label>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {p.screenshots.map((s, i) => (
                <figure key={i} className="card-elevate rounded-2xl border border-border bg-surface/60 overflow-hidden">
                  <img src={s.src} alt={s.caption} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                  <figcaption className="px-4 py-3 text-sm text-muted-foreground">{s.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        <NextProject currentSlug={p.slug} />
      </div>
    </div>
  );
}

function DetailBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-pink">
      <span className="h-px w-6 bg-pink" /> {children}
    </div>
  );
}

function NextProject({ currentSlug }: { currentSlug: string }) {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  const next = projects[(idx + 1) % projects.length];
  return (
    <Reveal>
      <Link to={`/projects/${next.slug}`} className="card-elevate group mt-24 flex items-center justify-between rounded-3xl border border-border bg-surface/60 p-7 md:p-9">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Next project</div>
          <div className="mt-2 text-2xl font-semibold">{next.title}</div>
          <div className="mt-1 text-sm text-muted-foreground">{next.short}</div>
        </div>
        <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-pink transition-colors" />
      </Link>
    </Reveal>
  );
}
