import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Github,
} from "lucide-react";
import NotFound from "../components/NotFound";
import ProjectCard, { Cover, statusStyle } from "../components/ProjectCard";
import { asset } from "../utils/asset";
import { publicProjects as projects } from "../data/projects";

const Block = ({ title, show = true, children }) =>
  show ? (
    <section className="mt-12">
      <h2 className="mb-4 font-display text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  ) : null;

export default function ProjectDetail() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];
  useEffect(() => {
    if (p) document.title = `${p.title} | Ahmed Elshafey`;
  }, [p]);
  if (!p) return <NotFound />; // unpublished, draft, archived or unknown slugs all land here
  const prev = projects[(i - 1 + projects.length) % projects.length],
    next = projects[(i + 1) % projects.length];
  const related = projects
    .filter((r) => r.category === p.category && r.id !== p.id)
    .slice(0, 3);
  const links = [
    [p.githubUrl, Github, "GitHub repository"],
    [p.liveUrl, ExternalLink, "Live demo"],
    [p.documentationUrl, BookOpen, "Documentation"],
  ].filter(([u]) => u);
  const pairs = Math.max(p.challenges?.length || 0, p.solutions?.length || 0);
  return (
    <article className="mx-auto max-w-5xl px-5 pb-20 pt-32 sm:px-8">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-fg"
      >
        <ArrowLeft size={15} aria-hidden="true" /> Back to projects
      </Link>
      <header className="mt-6">
        {p.status && (
          <span className={`rounded-full px-3 py-1 ${statusStyle[p.status]}`}>
            {p.status}
          </span>
        )}{" "}
        <h1 className="mt-3 font-display text-4xl font-bold">{p.title}</h1>
        <p className="mt-4 max-w-2xl text-muted">
          {p.fullDescription || p.shortDescription}
        </p>
      </header>


      <div className="glass mt-8 overflow-hidden">
        <Cover p={p} />
      </div>


      {p.images.length > 1 && (
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {p.images.slice(1).map((im) => (
            <li key={im.src}>
              <img
                src={asset(im.src)}
                alt={im.alt}
                loading="lazy"
                className="glass aspect-[16/10] w-full object-cover object-top"
              />
              {im.kind === "concept" && (
                <p className="mt-1 text-xs text-muted">Conceptual artwork</p>
              )}
            </li>
          ))}
        </ul>
      )}
      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map(([u, I, l]) => (
            <a
              key={l}
              href={u}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <I size={16} aria-hidden="true" />
              {l}
            </a>
          ))}
        </div>
      )}


      <Block title="Technologies">
        <ul className="flex flex-wrap gap-2">
          {p.technologies.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </Block>


      <Block title="Main features">
        <ul className="grid gap-3 sm:grid-cols-2">
          {p.features.map((f) => (
            <li key={f} className="glass p-4 text-sm">
              {f}
            </li>
          ))}
        </ul>
      </Block>


      <Block title="Technical challenges and solutions" show={pairs > 0}>
        <ul className="space-y-3">
          {Array.from({ length: pairs }, (_, n) => (
            <li key={n} className="glass p-4 text-sm">
              <p>
                <strong>Challenge:</strong> {p.challenges?.[n] || "-"}
              </p>
              <p className="mt-1 text-muted">
                <strong className="text-fg">Solution:</strong>{" "}
                {p.solutions?.[n] || "-"}
              </p>
            </li>
          ))}
        </ul>
      </Block>


      <Block
        title="Architecture"
        show={
          !!(
            p.architecture?.length ||
            p.database?.length ||
            p.apiEndpoints?.length
          )
        }
      >
        {p.architecture?.length > 0 && (
          <ol
            className="flex flex-wrap items-center gap-2"
            aria-label="System architecture flow"
          >
            {p.architecture.map((n, k) => (
              <li key={n} className="flex items-center gap-2">
                <span className="glass px-4 py-2 text-sm">{n}</span>
                {k < p.architecture.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="text-muted"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        )}
        {p.database?.length > 0 && (
          <div className="mt-4">
            <h3 className="mb-2 font-medium">Database structure</h3>
            <ul className="space-y-1 text-sm text-muted">
              {p.database.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        )}
        {p.apiEndpoints?.length > 0 && (
          <div className="mt-4 overflow-x-auto">
            <h3 className="mb-2 font-medium">API endpoints</h3>
            <table className="w-full text-left text-sm">
              <tbody>
                {p.apiEndpoints.map((e) => (
                  <tr key={e.method + e.path} className="border-t border-fg/10">
                    <td className="py-2 pr-4 font-mono">{e.method}</td>
                    <td className="pr-4 font-mono">{e.path}</td>
                    <td className="text-muted">{e.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Block>

      <div className="mt-4 mb-2 font-medium border-t border-fg/10 ">
        <a href={ p.GitHubL } >Git_Hub_Link_Project</a>
      </div>


      {projects.length > 1 && (
        <nav
          className="mt-16 grid gap-4 sm:grid-cols-2"
          aria-label="Project navigation"
        >
          <Link
            to={`/projects/${prev.slug}`}
            className="glass p-4 hover:border-fg/30"
          >
            <span className="flex items-center gap-1 text-xs text-muted">
              <ArrowLeft size={14} aria-hidden="true" /> Previous project
            </span>
            <span className="font-display font-semibold">{prev.title}</span>
          </Link>
          <Link
            to={`/projects/${next.slug}`}
            className="glass p-4 text-right hover:border-fg/30"
          >
            <span className="flex items-center justify-end gap-1 text-xs text-muted">
              Next project <ArrowRight size={14} aria-hidden="true" />
            </span>
            <span className="font-display font-semibold">{next.title}</span>
          </Link>
        </nav>
      )}
      <Block title="Related projects" show={related.length > 0}>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((r) => (
            <ProjectCard key={r.id} p={r} />
          ))}
        </div>
      </Block>
    </article>
  );
}
