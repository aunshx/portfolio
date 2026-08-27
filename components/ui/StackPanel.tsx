const LAYERS = [
  { name: "Client", tech: "React · Next.js · TypeScript", tone: "1" },
  { name: "API", tech: "FastAPI · Node · GraphQL", tone: "2" },
  { name: "Data", tech: "PostgreSQL · PostGIS · Redis", tone: "3" },
  { name: "Infra", tech: "Docker · CI/CD · AWS", tone: "4" },
];

/**
 * The stack as a live diagram. A request pulse runs down the spine and each
 * layer lights as it passes.
 *
 * Server component: pure CSS keyframes on transform and opacity, so it is
 * composited on the GPU. No JavaScript, no requestAnimationFrame.
 */
export default function StackPanel() {
  return (
    <div className="stack-panel" aria-hidden="true">
      <div className="stack-panel-bar">
        <span className="stack-dots">
          <span />
          <span />
          <span />
        </span>
        <span className="stack-panel-title">request path</span>
        <span className="stack-panel-status">200 OK</span>
      </div>

      <div className="stack-panel-body">
        <span className="stack-spine" />
        <span className="stack-pulse" />

        {LAYERS.map((l, i) => (
          <div
            key={l.name}
            className="stack-layer"
            data-tone={l.tone}
            style={{ animationDelay: `${i * 0.55}s` }}
          >
            <span className="stack-node" />
            <span className="stack-name">{l.name}</span>
            <span className="stack-tech">{l.tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
