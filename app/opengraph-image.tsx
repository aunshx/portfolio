import { ImageResponse } from "next/og";
import { PROFILE } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${PROFILE.name}, ${PROFILE.role}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0c12",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute", top: -180, left: -120, width: 760, height: 760,
            borderRadius: 9999,
            background: "radial-gradient(circle at 35% 35%, #0091ff, transparent 68%)",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            position: "absolute", top: -240, right: -160, width: 700, height: 700,
            borderRadius: 9999,
            background: "radial-gradient(circle at 55% 45%, #7c5cff, transparent 68%)",
            opacity: 0.45,
          }}
        />

        <div style={{ display: "flex", color: "#626e82", fontSize: 21, letterSpacing: 3 }}>
          {PROFILE.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#e6eaf2",
              fontSize: 62,
              lineHeight: 1.14,
              letterSpacing: -1.6,
              maxWidth: 940,
            }}
          >
            {PROFILE.headline}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              width: 96,
              height: 3,
              background: "#3b9bff",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#8b95a8",
            fontSize: 24,
            letterSpacing: 1,
          }}
        >
          <div style={{ display: "flex" }}>{PROFILE.name}</div>
          <div style={{ display: "flex" }}>
            {PROFILE.role}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
