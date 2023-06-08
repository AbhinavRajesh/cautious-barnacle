import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  data: {
    totalRevenues: string;
    totalTransactions: string;
    totalLikes: string;
    totalUsers: string;
  };
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Dummy data
  const dummyData = {
    totalRevenues:
      "$" + Math.round(Math.random() * 1000000).toLocaleString("en-US"),
    totalTransactions: Math.round(Math.random() * 10000).toLocaleString(
      "en-US"
    ),
    totalLikes: Math.round(Math.random() * 10000).toLocaleString("en-US"),
    totalUsers: Math.round(Math.random() * 1000).toLocaleString("en-US"),
  };

  res.status(200).json({
    success: true,
    data: dummyData,
  });
}
