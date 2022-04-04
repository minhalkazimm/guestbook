import fs from 'fs'
import path from 'path'
import { compareDesc, parseISO } from 'date-fns'

export const getAllComments = async () => {
  const guestbookDirectory = path.resolve('.', 'public', 'sign-here')
  const fileNames = fs.readdirSync(guestbookDirectory)

  const commentsPromise = fileNames.map(async (fileName) => {
    const commentDirectory = path.resolve(guestbookDirectory, fileName)
    const rawComment = await fs.promises.readFile(commentDirectory, 'utf-8')

    const username = fileName.split('.')[0]

    return { ...JSON.parse(rawComment), username }
  })

  const comments = await Promise.all(commentsPromise)
  const sortedComments = comments.sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)))

  return sortedComments
}

