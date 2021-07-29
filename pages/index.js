import Head from 'next/head'
import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import Comment from '../components/Comment'

const comments = [
  {
    comment: 'Hi there, cool work, keep it up!',
    username: 'afrieirham',
    date: '2021-07-29T10:16:36Z',
  },
  {
    comment: "hey Rob! this is the best personal site i've come across in a long while.",
    username: 'afrieirham',
    date: '2021-07-23T10:16:36Z',
  },
  {
    comment:
      'I really appreciate your efforts for delivering the such a helpful content, keep it up.',
    username: 'afrieirham',
    date: '2021-05-29T10:16:36Z',
  },
  {
    comment:
      'Stumbled across your content after researching Redis and recognised you from Next Conf. Keep up the good work :)',
    username: 'afrieirham',
    date: '2021-04-29T10:16:36Z',
  },
]

export default function Home() {
  return (
    <Flex w='full' p={2}>
      <Head>
        <title>Guestbook | Afrie Irham</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Flex direction='column' maxW='3xl' w='full' pt={16} mx='auto'>
        <Flex direction='column'>
          <Heading size='xl' fontWeight='bold'>
            Guestbook
          </Heading>
          <Text mt={2} color='gray.500'>
            This guestbook is part of the <Link>"Your First Open-Source Contribution"</Link> article
            on Hashnode by <Link>Afrie Irham</Link>.
          </Text>
        </Flex>
        <Flex direction='column' mt={8}>
          <Heading size='sm' mb={4} color='gray.800'>
            Kind words from people ✨
          </Heading>
          {comments.map((item) => (
            <Comment comment={item.comment} username={item.username} date={item.date} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
