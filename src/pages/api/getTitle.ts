import type { NextApiRequest, NextApiResponse } from "next"
import he from "he"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "URL inválida" })
  }

  try {
    const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })
    const html = await response.text()
    const match = html.match(/<title>(.*?)<\/title>/)

    if (match) {
      const rawTitle = match[1]

      const decodedTitle = he.decode(rawTitle)

      return res.status(200).json({ title: decodedTitle })
    } else {
      return res.status(500).json({ error: "Título não encontrado" })
    }
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar título" })
  }
}
