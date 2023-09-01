import React from 'react'

import {
  Html,
  Text,
  Body,
  Head,
  Tailwind,
  Preview,
  Container,
  Heading,
} from '@react-email/components'

export function TestEmail({ content }: { content: string }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>Test Message</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] rounded border border-solid border-gray-200 p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Test Message
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              {content}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
