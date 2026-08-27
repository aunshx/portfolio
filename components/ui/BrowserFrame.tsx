import Image from "next/image";

/**
 * Frames a screenshot in browser chrome so projects read as running products
 * rather than as flat images.
 */
export default function BrowserFrame({
  src,
  alt,
  domain,
  priority = false,
  sizes,
}: {
  src: string;
  alt: string;
  domain?: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <div className="browser-frame">
      <div className="browser-bar">
        <span aria-hidden="true" className="browser-dots">
          <span />
          <span />
          <span />
        </span>
        {domain && <span className="browser-url">{domain}</span>}
      </div>
      <div className="browser-view">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          // Screenshots are full of fine text that re-encoding turns to
          // mush, so the source file is served as-is.
          unoptimized
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
