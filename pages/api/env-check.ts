import type { NextApiRequest, NextApiResponse } from "next";

type EnvCheckResponse = {
  EMBR_SAMPLE_ENV_PROBE: string | null;
  NODE_ENV: string | null;
  PORT: string | null;
  timestamp: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<EnvCheckResponse>,
) {
  res.status(200).json({
    EMBR_SAMPLE_ENV_PROBE: process.env.EMBR_SAMPLE_ENV_PROBE ?? null,
    NODE_ENV: process.env.NODE_ENV ?? null,
    PORT: process.env.PORT ?? null,
    timestamp: new Date().toISOString(),
  });
}
