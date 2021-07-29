import React from 'react'
import { Flex, Link, Text } from '@chakra-ui/react'
import { formatRelative, parseISO } from 'date-fns'

function Comment({ comment, date, username }) {
  return (
    <Flex direction='column' mb={8} color='gray.500'>
      <Text mt={2} color='gray.700'>
        {comment}
      </Text>
      <Text fontSize='sm'>
        <Link isExternal href={`https://github.com/${username}`}>
          {username}
        </Link>{' '}
        –– {formatRelative(parseISO(date), new Date())}
      </Text>
    </Flex>
  )
}

export default Comment
