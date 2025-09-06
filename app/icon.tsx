import { ImageResponse } from "next/og";

// Konfigurasi route
export const runtime = "edge";

// Konfigurasi gambar
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Hasilkan Ikon
export default function Icon() {
  return new ImageResponse(
    (
      // Container utama dengan background gradien dari SVG Anda
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
        }}
      >
        {/* Path untuk huruf 'G' dari SVG Anda */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 30C35 25.5817 38.5817 22 43 22H57C61.4183 22 65 25.5817 65 30V35H57V30H43V70H57V60H50V52H65V70C65 74.4183 61.4183 78 57 78H43C38.5817 78 35 74.4183 35 70V30Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    // Opsi ImageResponse
    {
      ...size,
    }
  );
}
