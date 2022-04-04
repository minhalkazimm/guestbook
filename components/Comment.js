import React from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'
import { formatRelative, parseISO } from 'date-fns'

function Comment({ comment }) {
  return (
    <Flex direction='column' mb={8} color='gray.500'>
      <Text mt={2} color='gray.700'>
        {comment.body}
      </Text>
      <Text fontSize='sm'>
        <Link isExternal href={`https://github.com/${comment.username}`}>
          {comment.username}
        </Link>{' '}
        –– {formatRelative(parseISO(comment.date), new Date())}
      </Text>
    </Flex>
  )
}

export default Comment

