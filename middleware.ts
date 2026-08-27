import { NextResponse, type NextRequest } from "next/server";

/**
 * Hostname short-links. These replace the two Netlify edge functions —
 * consolidating them here also fixes thesis-redirect, which was never
 * registered in netlify.toml's [[edge_functions]] block.
 */
const THESIS_PDF =
  "https://drive.google.com/file/d/16OJgNEtry66OZOVhmm6F2xEvsaN8kYtj/view";

export function middleware(request: NextRequest) {
  const host = request.nextUrl.hostname.toLowerCase();
  const { pathname, search } = request.nextUrl;

  switch (host) {
    case "tldr.aun.sh":
      return NextResponse.redirect("https://aun.sh/tldr", 302);

    // Path and query are preserved so deep links into the demo survive.
    case "demo.aun.sh":
      return NextResponse.redirect(
        `https://visaverify.netlify.app${pathname}${search}`,
        302,
      );

    case "visaverify.aun.sh":
      return NextResponse.redirect("https://visaverify.netlify.app", 302);

    case "thesis.aun.sh":
      return NextResponse.redirect(THESIS_PDF, 302);

    default:
      return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
