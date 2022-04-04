import fs from 'fs'
import path from 'path'

export const getAllComments = async () => {
  const guestbookDirectory = path.resolve('.', 'public', 'sign-here')
  const fileNames = fs.readdirSync(guestbookDirectory)

  const commentsPromise = fileNames.map(async (username) => {
    const commentDirectory = path.resolve(guestbookDirectory, username)
    const rawComment = await fs.promises.readFile(commentDirectory, 'utf-8')

    return JSON.parse(rawComment)
  })

  const comments = await Promise.all(commentsPromise)

  return comments
}

