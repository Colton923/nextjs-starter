import { remult } from 'remult';
import { Post } from '../../shared/Post';
import { NextApiRequest, NextApiResponse } from 'next';
interface ReturnType {
  total: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnType>
) {
  const postRepo = remult.repo(Post);
  res.json({
    total: await postRepo.count(),
  });
}
