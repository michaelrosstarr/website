import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffdc58",
          border: "5px solid #000",
          color: "#000",
          fontSize: 30,
          fontWeight: 900,
          fontFamily: "sans-serif",
        }}
      >
        MT
      </div>
    ),
    size,
  )
}
