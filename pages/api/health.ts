import type { NextApiRequest, NextApiResponse } from "next";

type HealthResponse = {
  status: "ok";
  uptimeSeconds: number;
  timestamp: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<HealthResponse>,
) {
  res.status(200).json({
    status: "ok",
    uptimeSeconds: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
  });
}
