import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        background: "#0b0d12",
        color: "#e7ecf3",
        minHeight: "100vh",
        margin: 0,
        padding: "2rem",
      }}
    >
      <main style={{ maxWidth: 820, margin: "0 auto" }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
