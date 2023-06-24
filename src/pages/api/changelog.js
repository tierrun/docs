import { getChangelogs } from '@/lib/changelogUtils'

export default function handler(req, res) {
  const { page } = req.query
  const data = getChangelogs(page)

  res.status(200).json(data)
}
