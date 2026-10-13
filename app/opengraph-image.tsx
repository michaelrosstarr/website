import { ImageResponse } from "next/og"

import { projects, site } from "@/lib/data"

export const alt = `${site.name}, aka ${site.alias}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#fff7e8",
          color: "#000",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "8px 20px",
            border: "4px solid #000",
            boxShadow: "6px 6px 0 0 #000",
            background: "#ff8fc7",
            fontSize: 32,
            fontWeight: 700,
            transform: "rotate(-2deg)",
          }}
        >
          aka {site.alias}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 900, lineHeight: 1 }}>Hey, I&apos;m</div>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginTop: 16,
              padding: "8px 24px",
              border: "4px solid #000",
              boxShadow: "10px 10px 0 0 #000",
              background: "#ffdc58",
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            {site.name}
          </div>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {projects.map((project) => (
            <div
              key={project.slug}
              style={{
                display: "flex",
                padding: "10px 20px",
                border: "4px solid #000",
                background: "#fff",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              {project.name}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
