// pages/api/users.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [rows] = await db.query('SELECT * FROM users');
  res.status(200).json(rows);
}
