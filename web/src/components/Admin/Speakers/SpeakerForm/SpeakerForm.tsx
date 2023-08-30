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

import { QUERY as SpeakersQuery } from 'src/components/Admin/Speakers/SpeakersCell'
import Icon from 'src/components/Icon/Icon'
import { today } from 'src/helpers/DateHelpers'

import UploadField from '../../Form/Upload/UploadField'

import {
  CREATE_SPEAKER_MUTATION,
  DELETE_SPEAKER_MUTATION,
  UPDATE_SPEAKER_MUTATION,
} from './SpeakerMutations'

interface Props {
  state: 'add' | 'edit'
  speaker?: Partner
  onSubmit?: () => void
}

const SpeakerForm = ({ speaker, state, onSubmit }: Props) => {
  const [avatar, setAvatar] = useState(speaker?.avatar || '')

  const [createSpeaker, createSpeakerStatus] = useMutation(
    CREATE_SPEAKER_MUTATION,
    {
      onCompleted: () => {
        if (createSpeakerStatus.error) {
          toast.error(createSpeakerStatus.error.message)
        } else {
          toast.success('Speaker added!')
        }
      },
      refetchQueries: [{ query: SpeakersQuery }],
    }
  )

  const [updateSpeaker, updateSpeakerStatus] = useMutation(
    UPDATE_SPEAKER_MUTATION,
    {
      onCompleted: () => {
        if (updateSpeakerStatus.error) {
          toast.error(updateSpeakerStatus.error.message)
        } else {
          toast.success('Speaker updated!')
        }
      },
      refetchQueries: [{ query: SpeakersQuery }],
    }
  )

  const [deleteSpeaker, deleteSpeakerStatus] = useMutation(
    DELETE_SPEAKER_MUTATION,
    {
      onCompleted: () => {
        if (deleteSpeakerStatus.error) {
          toast.error(deleteSpeakerStatus.error.message)
        } else {
          toast.success('Speaker deleted!')
        }
      },
      refetchQueries: [{ query: SpeakersQuery }],
    }
  )

  const handleSubmit = (data) => {
    console.log({ data })

    // add a speaker (partner)
    if (state === 'add') {
      createSpeaker({ variables: { avatar, ...data } })
    } // edit speaker (partner)
    else {
      const { id, ...rest } = data
      updateSpeaker({
        variables: { id: parseInt(id), input: { avatar, ...rest } },
      })
    }

    onSubmit()
  }

  const handleUpload = (filename: string) => {
    setAvatar(filename)
  }

  const handleDelete = () => {
    deleteSpeaker({ variables: { id: speaker.id } })
    onSubmit()
  }

  return (
    <>
      <div>
        <h1 className="mb-8 font-condensed text-6xl uppercase text-white">
          {state} a Speaker
        </h1>
        <Form onSubmit={handleSubmit}>
          <FormError />
          <div className="field">
            <Label name="name" htmlFor="name" className="text-white">
              Speaker*
            </Label>
            <TextField
              name="name"
              defaultValue={speaker?.name && speaker.name}
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
              defaultValue={speaker?.slug && speaker.slug}
              errorClassName="error"
              validation={{ required: true }}
            />
            <FieldError name="slug" className="error-message" />
          </div>

          <div className="field">
            <Label name="avatar" htmlFor="avatar" className="text-white">
              Avatar
            </Label>
            <UploadField
              name="avatar"
              defaultValue={avatar}
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
              defaultValue={speaker?.virtualCode && speaker.virtualCode}
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
              defaultValue={speaker?.virtualDiscount && speaker.virtualDiscount}
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
                speaker?.virtualEndDate ? speaker.virtualEndDate : today()
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
              defaultValue={speaker?.inPersonCode && speaker.inPersonCode}
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
              defaultValue={
                speaker?.inPersonDiscount && speaker.inPersonDiscount
              }
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
                speaker?.inPersonEndDate ? speaker.inPersonEndDate : today()
              }
            />
            <Icon id="calendar" />
          </div>

          {state === 'add' ? (
            <button
              className="flex w-full items-center justify-center gap-x-3 bg-steelBlue px-3 py-4 font-bold text-white hover:bg-darkSlateGray"
              name="submit"
              disabled={createSpeakerStatus.loading}
            >
              <Icon id="check" />
              Add a Speaker
            </button>
          ) : (
            <div className="flex items-center gap-x-4">
              <HiddenField name="id" value={speaker?.id && speaker.id} />
              <button
                className="mx-auto flex w-full items-center justify-start gap-x-3 text-center font-bold text-red-400 underline hover:no-underline"
                onClick={handleDelete}
                disabled={deleteSpeakerStatus.loading}
              >
                <Icon id="trash" />
                Delete
              </button>
              <button
                className="center w-full gap-x-3 whitespace-nowrap bg-steelBlue px-3 py-4 font-bold text-white hover:bg-darkSlateGray"
                name="submit"
                disabled={updateSpeakerStatus.loading}
              >
                <Icon id="plus-only" />
                Update Speaker
              </button>
            </div>
          )}
        </Form>
      </div>
    </>
  )
}

export default SpeakerForm
