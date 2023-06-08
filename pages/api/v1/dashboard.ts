import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  data: {
    totalRevenues: number;
    totalTransactions: number;
    totalLikes: number;
    totalUsers: number;
  };
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Dummy data
  const dummyData = {
    totalRevenues: Math.round(Math.random() * 1000000),
    totalTransactions: Math.round(Math.random() * 10000),
    totalLikes: Math.round(Math.random() * 10000),
    totalUsers: Math.round(Math.random() * 1000),
  };

  res.status(200).json({
    success: true,
    data: dummyData,
  });
}
