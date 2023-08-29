import { Partner } from 'types/graphql'

import { EmailField, Form, Label, useForm } from '@redwoodjs/forms'

interface Props {
  partner: Partial<Omit<Partner, 'Participants'>>
}

const PartnerForm = ({ partner }: Props) => {
  const formMethods = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // redirect to
    formMethods.reset()
  }

  return (
    <>
      <div className="mb-6 flex items-center gap-5 text-center font-wide uppercase">
        <img src={partner.logo} alt={partner.name} className="max-h-[60px]" />
        invites you to
      </div>

      <div>
        <h1 className="page-title mb-5">
          Register &<br /> Get your{' '}
          <span className="text-chestnutRose">Free</span>
          <br />
          Virtual Ticket
        </h1>
        <h2 className="subheading mb-5">September 27 - 28, 2023</h2>
        <h2 className="subheading mb-8">
          <a
            href="https://redwoodjsconf.com"
            className="text-darkSlateGray"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-steelBlue">or</span> use{' '}
            <span className="text-chestnutRose">{partner.inPersonCode}</span>{' '}
            for{' '}
            <span className="whitespace-nowrap text-chestnutRose">
              {partner.inPersonDiscount}% off
            </span>
            <br />
            an <span className="whitespace-nowrap">in-person ticket</span>
          </a>
        </h2>
        <Form formMethods={formMethods} onSubmit={onSubmit}>
          <div className="virtual-ticket-form relative flex flex-col gap-5 rounded-2xl bg-[#D3D3D3] px-9 pb-7 pt-10">
            <Label name="email" htmlFor="email">
              Enter Your Email Address
            </Label>
            <EmailField
              name="email"
              className="min-h-[48px] border-b-2 border-b-black bg-transparent font-sans focus:border-b-chestnutRose focus:outline-none"
              placeholder=" " // required
              validation={{ required: true }}
            />
            <input type="hidden" name="partnerId" value={partner.id} />
            <button className="w-full rounded-lg bg-steelBlue py-3 font-wide text-white hover:bg-darkSlateGray">
              Yes, please!
            </button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default PartnerForm
