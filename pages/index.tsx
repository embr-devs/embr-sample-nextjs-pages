import Link from "next/link";
import type { GetServerSideProps } from "next";
import { useState } from "react";

type Props = {
  renderedAt: string;
  nonce: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      renderedAt: new Date().toISOString(),
      nonce: Math.random().toString(36).slice(2, 10),
    },
  };
};

export default function Home({ renderedAt, nonce }: Props) {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <h1>Embr × Next.js (Pages Router)</h1>
      <p>
        This page uses <code>getServerSideProps</code> — Next.js runs it on
        every request. Refresh and watch the timestamp + nonce change; that's
        proof Embr is executing the Node.js runtime per request.
      </p>

      <section style={card}>
        <h2>Request-time SSR</h2>
        <p>
          <strong>Rendered at:</strong> <code>{renderedAt}</code>
        </p>
        <p>
          <strong>Nonce:</strong> <code>{nonce}</code>
        </p>
      </section>

      <section style={card}>
        <h2>Hydration canary</h2>
        <button
          onClick={() => setClicks((c) => c + 1)}
          style={{
            background: "#3a7bd5",
            color: "white",
            border: 0,
            borderRadius: 6,
            padding: "0.5rem 1rem",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Clicks: {clicks}
        </button>
      </section>

      <section style={card}>
        <h2>Explore</h2>
        <ul>
          <li>
            <Link href="/isr">/isr</Link> — ISR via{" "}
            <code>getStaticProps + revalidate = 30</code>
          </li>
          <li>
            <Link href="/api/health">/api/health</Link> — Embr health check
            target
          </li>
        </ul>
      </section>
    </>
  );
}

const card: React.CSSProperties = {
  background: "#141821",
  border: "1px solid #232936",
  borderRadius: 10,
  padding: "1rem 1.25rem",
  margin: "1rem 0",
};
