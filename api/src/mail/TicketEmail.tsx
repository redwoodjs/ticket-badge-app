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
  Hr,
} from '@react-email/components'

interface TicketEmailProps {
  preview: string
  participantID: number
  partnerInPersonCode: string
  partnerInPersonDiscount: number
  partnerInPersonUrl: string
}

export function TicketEmail({
  preview,
  participantID,
  partnerInPersonCode,
  partnerInPersonDiscount,
  partnerInPersonUrl,
}: TicketEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] rounded border border-solid border-gray-200 p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              <img
                src={`${process.env.REDWOOD_ENV_BASE_URL}/images/rw-conf-logo.png`}
                alt="RedwoodJS"
              />
            </Heading>
            <Text className="text-base leading-snug text-black">Hey!</Text>

            <Text className="text-base leading-snug text-black">
              Thank you for registering for RedwoodJS Conf! We&apos;re thrilled
              to have you join us for this exciting event. Your participation
              contributes to making this a memorable and enriching experience
              for everyone involved.
            </Text>

            <Heading as="h3" className="pt-4">
              Conference Details:
            </Heading>
            <Text className="text-base leading-snug text-black">
              🗓 <strong>Dates:</strong> September 27th - 28th, 2023
              <br />⏰ <strong>Time:</strong> 9:00am - 5:15pm (Pacific)
              <br />
              🌐 <strong>Venue:</strong> Virtual Conference
            </Text>

            <Heading as="h3" className="pt-4">
              Here&apos;s what you need to get started:
            </Heading>

            <ol>
              <li className="mb-2 text-base leading-snug text-black">
                <strong>Your Complimentary Ticket:</strong>{' '}
                <a
                  href="https://www.eventbrite.com/e/646238134657/?discount=VIP-COMP"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.eventbrite.com/e/646238134657/?discount=VIP-COMP
                </a>
              </li>
              <li className="text-base leading-snug text-black">
                <strong>Event Schedule:</strong> Curious about the topics and
                speakers?{' '}
                <a href="https://www.redwoodjsconf.com/speakers">
                  Check out the RedwoodJS Conference Website
                </a>
                . We&apos;ll post a more detailed schedule closer to the event.
              </li>
            </ol>

            <Heading as="h3" className="pt-4">
              Save the Date
            </Heading>
            <Text className="text-base leading-snug text-black">
              We don&apos;t want you to miss a moment of this amazing event, so
              we&apos;ve attached an .ics file to this email for you to add the
              conference details to your calendar. Simply download and import it
              into your preferred calendar application.
            </Text>

            <Heading as="h3" className="pt-4">
              Share Your Excitement{' '}
            </Heading>
            <Text className="text-base leading-snug text-black">
              Let the world know you&apos;re attending the RedwoodJS Conference!
              Feel free to use our special &quot;I&apos;m Attending&quot; badge
              and share it on your social media platforms. You can download the
              badge and find share links here:
              <a href={`${process.env.REDWOOD_ENV_BASE_URL}/share`}>
                {process.env.REDWOOD_ENV_BASE_URL}/share.
              </a>
            </Text>

            <Heading as="h3" className="pt-4">
              Invite a Friend
            </Heading>
            <Text className="text-base leading-snug text-black">
              Think someone else would be interested in joining? Use the
              following link to invite your colleagues or friends:
              <a
                href={`${process.env.REDWOOD_ENV_BASE_URL}/invite/${participantID}`}
              >
                {process.env.REDWOOD_ENV_BASE_URL}/invite/{participantID}
              </a>
            </Text>

            <Text className="text-base leading-snug text-black">
              We look forward to virtually seeing you at the RedwoodJS
              Conference!
            </Text>

            <br />

            <Text className="text-base leading-snug text-black">
              <strong>Until then, happy coding!</strong>
              <br />
              Amy Dutton
              <br />
              <em>Lead Maintainer, RedwoodJS Core Team</em>
            </Text>

            <br />

            <Text className="text-base leading-snug text-black">
              <strong>PS If you want to join us in-person</strong>, it’s not too
              late to register! In fact, you can use the code{' '}
              <strong>{partnerInPersonCode}</strong> to get{' '}
              {partnerInPersonDiscount}% off. 🙌{' '}
              <strong>
                <a href={partnerInPersonUrl}>Register Now</a>
              </strong>
              .
            </Text>

            <br />

            <Hr />

            <br />

            <div className="text-center">
              <img
                src={`${process.env.REDWOOD_ENV_BASE_URL}/images/rw-conf-logo.png`}
                width="200"
                alt="RedwoodJS Conference"
                className="mb-5"
              />
              <div>
                <a href="https://twitter.com/redwoodjs" className="mr-5">
                  <img
                    src={`${process.env.REDWOOD_ENV_BASE_URL}/images/twitter.png`}
                    alt="Twitter"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC28N26JtvmJpyD-GD0GOlaQ"
                  className="mr-5"
                >
                  <img
                    src={`${process.env.REDWOOD_ENV_BASE_URL}/images/youtube.png`}
                    alt="YouTube"
                  />
                </a>
                <a href="https://discord.gg/redwoodjs" className="mr-5">
                  <img
                    src={`${process.env.REDWOOD_ENV_BASE_URL}/images/discord.png`}
                    alt="Discord"
                  />
                </a>
                <a href="https://community.redwoodjs.com/">
                  <img
                    src={`${process.env.REDWOOD_ENV_BASE_URL}/images/discourse.png`}
                    alt="Discourse"
                  />
                </a>
              </div>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
