import { getBlogs } from '@/lib/blogUtils'

export default function handler(req, res) {
  const { page } = req.query
  const data = getBlogs(page)

  res.status(200).json(data)
}
