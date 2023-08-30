import { useState } from 'react'

import { Partner } from 'types/graphql'

import {
  DateField,
  FieldError,
  Form,
  FormError,
  HiddenField,
  Label,
  NumberField,
  TextField,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY as PartnersQuery } from 'src/components/Admin/Partners/PartnersCell'
import Icon from 'src/components/Icon/Icon'
import { today } from 'src/helpers/DateHelpers'

import UploadField from '../../Form/Upload/UploadField'

import {
  CREATE_PARTNER_MUTATION,
  DELETE_PARTNER_MUTATION,
  UPDATE_PARTNER_MUTATION,
} from './PartnerMutations'

interface Props {
  partner?: Partial<Omit<Partner, 'Participants'>>
  state: 'add' | 'edit'
  onSubmit?: () => void
}

const PartnerForm = ({ partner, state, onSubmit = () => {} }: Props) => {
  const [logo, setLogo] = useState<string>('')

  const [createPartner, createPartnerStatus] = useMutation(
    CREATE_PARTNER_MUTATION,
    {
      onCompleted: () => {
        if (createPartnerStatus.error) {
          toast.error(createPartnerStatus.error.message)
        } else {
          toast.success('Partner added!')
        }
      },
      refetchQueries: [{ query: PartnersQuery }],
    }
  )

  const [updatePartner, updatePartnerStatus] = useMutation(
    UPDATE_PARTNER_MUTATION,
    {
      onCompleted: () => {
        if (updatePartnerStatus.error) {
          toast.error(createPartnerStatus.error.message)
        } else {
          toast.success('Partner updated!')
        }
      },
      refetchQueries: [{ query: PartnersQuery }],
    }
  )

  const [deletePartner, deletePartnerStatus] = useMutation(
    DELETE_PARTNER_MUTATION,
    {
      onCompleted: () => {
        if (deletePartnerStatus.error) {
          toast.error(deletePartnerStatus.error.message)
        } else {
          toast.success('Partner deleted!')
        }
      },
      refetchQueries: [{ query: PartnersQuery }],
    }
  )

  const handleUpload = (fileName: string) => {
    setLogo(fileName)
  }

  const handleSubmit = (data) => {
    console.log({ data })

    // add speaker
    if (state === 'add') {
      createPartner({ variables: { ...data, logo } })
    }
    // edit speaker
    else {
      // TODO: REMOVE THE IMAGE FROM CLOUDINARY IF THERE WAS AN IMAGE PREVIOUSLY
      // TODO: MOVE THE IMAGE TO A PERMANENT LOCATION

      const { id, ...rest } = data
      updatePartner({
        variables: { id: parseInt(id), input: { ...rest, logo } },
      })
    }

    onSubmit()
  }

  const handleDelete = () => {
    deletePartner({ variables: { id: partner.id } })
    onSubmit()
  }

  return (
    <div>
      <h1 className="mb-8 font-condensed text-6xl uppercase text-white">
        {state} a Partner
      </h1>
      <Form onSubmit={handleSubmit}>
        <FormError />
        <div className="field">
          <Label name="name" htmlFor="name" className="text-white">
            Partner*
          </Label>
          <TextField
            name="name"
            defaultValue={partner?.name && partner.name}
            errorClassName="error"
            validation={{ required: true }}
          />
          <FieldError name="name" className="error-message" />
        </div>

        <div className="field">
          <Label name="slug" htmlFor="slug" className="text-white">
            Slug*
          </Label>
          <TextField
            name="slug"
            defaultValue={partner?.slug && partner.slug}
            errorClassName="error"
            validation={{ required: true }}
          />
          <FieldError name="slug" className="error-message" />
        </div>

        <div className="field">
          <Label name="logo" htmlFor="logo" className="text-white">
            Logo
          </Label>
          <UploadField
            name="logo"
            defaultValue={partner?.logo && partner.logo}
            onChange={handleUpload}
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
          />
        </div>

        <div className="field">
          <Label
            name="virtualDiscount"
            htmlFor="virtualDiscount"
            className="text-white"
          >
            Virtual % Discounted
          </Label>
          <NumberField
            name="virtualDiscount"
            defaultValue={partner?.virtualDiscount && partner.virtualDiscount}
            errorClassName="input error"
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
            disabled={createPartnerStatus.loading}
          >
            <Icon id="check" />
            Add a Partner
          </button>
        ) : (
          <div className="flex items-center gap-x-4">
            <HiddenField name="id" value={partner?.id && partner.id} />
            <button
              className="mx-auto flex w-full items-center justify-start gap-x-3 text-center font-bold text-red-400 underline hover:no-underline"
              onClick={handleDelete}
              disabled={deletePartnerStatus.loading}
            >
              <Icon id="trash" />
              Delete
            </button>
            <button
              className="center w-full gap-x-3 whitespace-nowrap bg-steelBlue px-3 py-4 font-bold text-white hover:bg-darkSlateGray"
              name="submit"
              disabled={updatePartnerStatus.loading}
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
