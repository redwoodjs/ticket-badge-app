import { Partner } from 'types/graphql'

import {
  DateField,
  Form,
  Label,
  NumberField,
  TextField,
} from '@redwoodjs/forms'

import Icon from 'src/components/Icon/Icon'

interface Props {
  partner: Partial<Omit<Partner, 'Participants'>>
  state: 'add' | 'edit'
}

const PartnerForm = ({ partner, state }: Props) => {
  const handleSubmit = (data) => {
    // add partner
    // if (state === 'add') {
    // }
    //   // edit partner
    // else {
    // }
  }

  const today = () => {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
    const yyyy = today.getFullYear()
    return `${yyyy}-${mm}-${dd}`
  }

  return (
    <div>
      <h1 className="mb-8 font-condensed text-6xl uppercase text-white">
        {state} a Partner
      </h1>
      <Form onSubmit={handleSubmit}>
        <div className="field">
          <Label name="name" htmlFor="name" className="text-white">
            Partner
          </Label>
          <TextField
            name="name"
            defaultValue={partner?.name && partner.name}
            errorClassName="input error"
            validation={{ required: true }}
          />
        </div>

        <div className="field">
          <Label
            name="virtualCode"
            htmlFor="virtualCode"
            className="text-white"
          >
            Virtual Code
          </Label>
          <TextField
            name="virtualCode"
            defaultValue={partner?.virtualCode && partner.virtualCode}
            errorClassName="input error"
            validation={{ required: true }}
          />
        </div>

        <div className="field">
          <Label name="partner" htmlFor="partner" className="text-white">
            Virtual % Discounted
          </Label>
          <NumberField
            name="partner"
            defaultValue={partner?.virtualDiscount && partner.virtualDiscount}
            errorClassName="input error"
            validation={{ required: true }}
          />
        </div>

        <div className="field text-white">
          <Label
            name="virtualEndDate"
            htmlFor="virtualEndDate"
            className="text-white"
          >
            Virtual End Date
          </Label>
          <DateField
            name="virtualEndDate"
            defaultValue={
              partner?.virtualEndDate ? partner.virtualEndDate : today()
            }
          />
          <Icon id="calendar" />
        </div>

        <div className="field">
          <Label
            name="inPersonCode"
            htmlFor="inPersonCode"
            className="text-white"
          >
            In Person Code
          </Label>
          <TextField
            name="inPersonCode"
            defaultValue={partner?.inPersonCode && partner.inPersonCode}
          />
        </div>

        <div className="field">
          <Label
            name="inPersonDiscount"
            htmlFor="inPersonDiscount"
            className="text-white"
          >
            In Person % Discounted
          </Label>
          <NumberField
            name="inPersonDiscount"
            defaultValue={partner?.inPersonDiscount && partner.inPersonDiscount}
          />
        </div>

        <div className="field text-white">
          <Label
            name="inPersonEndDate"
            htmlFor="inPersonEndDate"
            className="text-white"
          >
            In Person End Date
          </Label>
          <DateField
            name="inPersonEndDate"
            defaultValue={
              partner?.inPersonEndDate ? partner.inPersonEndDate : today()
            }
          />
          <Icon id="calendar" />
        </div>

        {state === 'add' ? (
          <button
            className="flex w-full items-center justify-center gap-x-3 bg-steelBlue px-3 py-4 font-bold text-white hover:bg-darkSlateGray"
            name="submit"
            value="add"
          >
            <Icon id="check" />
            Add a Partner
          </button>
        ) : (
          <div className="flex items-center gap-x-4">
            <input type="hidden" name="id" value={partner?.id && partner.id} />
            <button className="mx-auto flex w-full items-center justify-start gap-x-3 text-center font-bold text-red-400 underline hover:no-underline">
              <Icon id="trash" />
              Delete
            </button>
            <button
              className="center w-full gap-x-3 bg-steelBlue px-3 py-4 font-bold text-white hover:bg-darkSlateGray"
              name="submit"
              value="edit"
            >
              <Icon id="plus-only" />
              Update Partner
            </button>
          </div>
        )}
      </Form>
    </div>
  )
}

export default PartnerForm
