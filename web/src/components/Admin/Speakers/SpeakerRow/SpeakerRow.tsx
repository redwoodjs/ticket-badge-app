import { useState } from 'react'

import { Partner } from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Icon from 'src/components/Icon/Icon'
import { Constants } from 'src/utils/Constants'

import ButtonWithToolTip from '../../ButtonWithTooltip/ButtonWithTooltip'
import CopyButtonWithTooltip from '../../CopyButtonWithTooltip/CopyButtonWithTooltip'
import LinkWithToolTip from '../../LinkWithTooltip/LinkWithTooltip'
import Modal from '../../Modal/Modal'
import SlideOut from '../../SlideOut/SlideOut'
import SpeakerForm from '../SpeakerForm/SpeakerForm'
import { DELETE_SPEAKER_MUTATION } from '../SpeakerForm/SpeakerMutations'
import { QUERY as SpeakersQuery } from '../SpeakersCell/SpeakersCell'

interface Props {
  speaker: Partner
}

const SpeakerRow = ({ speaker }: Props) => {
  const [isPartnerFormShowing, setIsPartnerFormShowing] = useState(false)
  const [isConfirmDeleteShowing, setIsConfirmDeleteShowing] = useState(false)

  const [deleteSpeaker, deleteSpeakerStatus] = useMutation(
    DELETE_SPEAKER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Speaker deleted!')
      },
      refetchQueries: [{ query: SpeakersQuery }],
    }
  )

  const handleEdit = () => {
    setIsPartnerFormShowing(true)
  }

  const handleDelete = () => {
    setIsConfirmDeleteShowing(true)
  }

  const confirmDeleteSpeaker = () => {
    deleteSpeaker({ variables: { id: speaker.id } })
    setIsConfirmDeleteShowing(false)
  }

  return (
    <>
      <div className="speakers-table min-h-[68px] border-b-1 border-b-gainsboro">
        <div>
          <img
            src={speaker.avatar}
            alt={speaker.name}
            className="max-h-[60px]"
          />
        </div>
        <div>
          <a
            href={`${Constants.BASE_URL}/${speaker.slug}`}
            target="_blank"
            className="font-bold underline hover:no-underline"
            rel="noreferrer"
          >
            {speaker.name}
          </a>
        </div>
        <div>
          <CopyButtonWithTooltip textToCopy={speaker.virtualCode}>
            <span>{speaker.virtualCode}</span>
          </CopyButtonWithTooltip>
        </div>
        <div>
          <CopyButtonWithTooltip textToCopy={speaker.inPersonCode}>
            <span>{speaker.inPersonCode}</span>
          </CopyButtonWithTooltip>
        </div>
        <div>24</div>
        <div className="flex items-center justify-between">
          <CopyButtonWithTooltip
            textToCopy={`${Constants.BASE_URL}/${speaker.slug}`}
            defaultToolTipText="Copy Badge Page URL"
          >
            <Icon id="copy" />
          </CopyButtonWithTooltip>
          <LinkWithToolTip
            href={`${Constants.BASE_URL}/${speaker.slug}`}
            toolTipText="View Badge Page"
          >
            <Icon id="show" />
          </LinkWithToolTip>
          <div>
            <ButtonWithToolTip handleClick={handleEdit} toolTipText="Edit">
              <Icon id="edit" />
            </ButtonWithToolTip>
          </div>
          <div>
            <ButtonWithToolTip handleClick={handleDelete} toolTipText="Delete">
              <Icon id="trash" />
            </ButtonWithToolTip>
          </div>
        </div>
      </div>
      <SlideOut
        isShowing={isPartnerFormShowing}
        handleClose={() => setIsPartnerFormShowing(false)}
      >
        <SpeakerForm
          state="edit"
          speaker={speaker}
          onSubmit={() => setIsPartnerFormShowing(false)}
        />
      </SlideOut>

      <Modal
        isShowing={isConfirmDeleteShowing}
        handleClose={() => setIsConfirmDeleteShowing(false)}
      >
        <div className="center h-full p-10 text-lg">
          <div>
            Are you sure you want to delete{' '}
            <strong className="text-chestnutRose">{speaker.name}</strong>?
            <div className="center mt-5 gap-x-4">
              <button
                onClick={() => setIsConfirmDeleteShowing(false)}
                className="rounded-md bg-gray-200 px-5 py-2 text-base font-bold text-black hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                className="flex items-center gap-x-1 whitespace-nowrap rounded-md bg-chestnutRose px-5 py-2 text-base text-white hover:bg-red-700"
                onClick={confirmDeleteSpeaker}
                disabled={deleteSpeakerStatus.loading}
              >
                <Icon id="trash" />
                Delete It
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SpeakerRow
