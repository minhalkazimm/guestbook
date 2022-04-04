import Head from 'next/head'
import { Flex, Heading, Link, Text } from '@chakra-ui/react'

import Comment from '../components/Comment'
import { getAllComments } from '../util/getAllComments'

export default function Home({ comments }) {
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
            This guestbook is part of the "
            <Link isExternal href='' textDecoration='underline' _hover={{ color: 'blue.500' }}>
              Your First Open-Source Contribution
            </Link>
            " article on Hashnode by <Link>Afrie Irham</Link>.
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

export const getStaticProps = async () => {
  const comments = await getAllComments()

  return {
    props: { comments },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - Every second
    revalidate: 1,
  }
}

