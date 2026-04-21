import type { NextApiRequest, NextApiResponse } from "next";

type CacheProbeResponse = {
  renderedAt: string;
  note: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<CacheProbeResponse>,
) {
  res.setHeader("content-type", "application/json");
  res.setHeader(
    "cache-control",
    "public, s-maxage=60, stale-while-revalidate=300",
  );
  res.status(200).json({
    renderedAt: new Date().toISOString(),
    note: "If Front Door is honoring s-maxage, repeated requests within 60s should return the same renderedAt and include an Age header.",
  });
}
