import { useEffect } from 'react'

import { Partner } from 'types/graphql'

import {
  EmailField,
  FieldError,
  Form,
  FormError,
  HiddenField,
  Label,
  useForm,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import useCookie from 'src/hooks/useCookie'

interface Props {
  partner: Partial<Omit<Partner, 'Participants'>>
  participantName?: string
}

const CREATE_PARTICIPANT_MUTATION = gql`
  mutation createParticipantMutation($email: String!, $partnerId: Int!) {
    createParticipant(input: { email: $email, partnerId: $partnerId }) {
      id
      email
    }
  }
`

const ParticipantForm = ({ partner, participantName = '' }: Props) => {
  const formMethods = useForm()
  const [participantIdCookie, updateParticipantIdCookie] =
    useCookie('participantId')
  const [_, updateParticipantEmailCookie] = useCookie('participantEmail')

  // check to see if a cookie exists
  useEffect(() => {
    if (participantIdCookie) {
      navigate(routes.customizeTicket())
    }
  }, [participantIdCookie])

  const [createParticipant, { loading, error }] = useMutation(
    CREATE_PARTICIPANT_MUTATION,
    {
      onCompleted: (data) => {
        if (error) {
          console.error(error)
          toast.error(error.message)
        } else {
          // set a cookie with the participant id inside
          updateParticipantIdCookie(data.createParticipant.id, 30)
          updateParticipantEmailCookie(data.createParticipant.email, 30)
        }
      },
    }
  )

  const onSubmit = (data) => {
    createParticipant({
      variables: {
        email: data.email,
        partnerId: parseInt(data.partnerId),
      },
    })
    formMethods.reset()
  }

  return (
    <>
      <div className="mb-12 flex items-center gap-8 whitespace-nowrap text-center font-wide text-xl uppercase">
        {partner.logo && (
          <>
            <img src={partner.logo} alt={partner.name} className="h-[80px]" />
            {participantName ? `& ${participantName} invite` : 'invites'} you to
          </>
        )}
        {partner.avatar && (
          <>
            <img
              src={partner.avatar}
              alt={partner.name}
              className="aspect-square max-h-[60px] rounded-full object-cover"
            />
            {partner.name}{' '}
            {participantName ? `& ${participantName} invite` : 'invites'} you to
          </>
        )}
        {!partner.avatar && !partner.logo && (
          <span>
            {partner.name}{' '}
            {participantName ? `& ${participantName} invite` : 'invites'} you to
          </span>
        )}
      </div>

      <div>
        <h1 className="page-title mb-5">
          Register & Get your
          <br />
          <span className="text-chestnutRose">Free</span> Virtual Ticket
        </h1>
        <h2 className="subheading mb-7">September 27 - 28, 2023</h2>
        <Form formMethods={formMethods} onSubmit={onSubmit} className="mb-16">
          <div className="virtual-ticket-form relative flex flex-col gap-5 rounded-2xl bg-gray-200 px-9 pb-7 pt-10">
            <Label name="email" htmlFor="email">
              Enter Your Email Address
            </Label>
            <EmailField
              name="email"
              className="min-h-[48px] border-b-2 border-b-black bg-transparent font-sans focus:border-b-chestnutRose focus:outline-none"
              placeholder=" " // required
              validation={{ required: true }}
            />
            <FieldError name="email" className="error-message" />
            {error && (
              <div className="mb-4 font-bold text-red-500">
                <FormError error={error} />
              </div>
            )}
            <HiddenField name="partnerId" value={partner.id} />
            <button
              className="w-full rounded-lg bg-steelBlue py-3 font-wide text-white hover:bg-darkSlateGray"
              disabled={loading}
            >
              Yes, please!
            </button>
          </div>
        </Form>

        {partner.inPersonUrl && (
          <div className="px-10">
            <h2 className="subheading mb-8 ">
              <span className="text-steelBlue">or</span> Use{' '}
              <span className="text-chestnutRose">{partner.inPersonCode}</span>{' '}
              for{' '}
              <span className="whitespace-nowrap text-chestnutRose">
                {partner.inPersonDiscount}% off
              </span>{' '}
              an in-person ticket:{' '}
              <a
                href={partner.inPersonUrl}
                className="my-4 block rounded-md border-2 border-steelBlue py-3 text-center text-base hover:bg-steelBlue hover:text-white"
              >
                register here
              </a>
            </h2>
          </div>
        )}
      </div>
    </>
  )
}

export default ParticipantForm
