import type { GetStaticProps } from "next";

type Props = {
  generatedAt: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      generatedAt: new Date().toISOString(),
    },
    revalidate: 30,
  };
};

export default function IsrPage({ generatedAt }: Props) {
  return (
    <>
      <h1>ISR (getStaticProps + revalidate = 30s)</h1>
      <p>
        Refresh within 30 seconds and the timestamp stays the same. After
        30 s, the next request triggers background regeneration and
        subsequent requests see a fresh timestamp.
      </p>
      <p>
        <strong>Generated at:</strong> <code>{generatedAt}</code>
      </p>
      <p>
        If the timestamp resets more often than every 30 s, the microVM
        probably recycled (cold start) or ISR's filesystem cache isn't
        persisted across restarts on Embr.
      </p>
    </>
  );
}
