import { useState } from 'react'

import { Partner } from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ButtonWithToolTip from 'src/components/Admin/ButtonWithTooltip/ButtonWithTooltip'
import CopyButtonWithTooltip from 'src/components/Admin/CopyButtonWithTooltip/CopyButtonWithTooltip'
import LinkWithToolTip from 'src/components/Admin/LinkWithTooltip/LinkWithTooltip'
import Modal from 'src/components/Admin/Modal/Modal'
import PartnerForm from 'src/components/Admin/Partners/PartnerForm/PartnerForm'
import { DELETE_PARTNER_MUTATION } from 'src/components/Admin/Partners/PartnerForm/PartnerMutations'
import { QUERY as PartnersQuery } from 'src/components/Admin/Partners/PartnersCell/PartnersCell'
import SlideOut from 'src/components/Admin/SlideOut/SlideOut'
import Icon from 'src/components/Icon/Icon'
import { Constants } from 'src/utils/Constants'

interface Props {
  partner: Partial<Omit<Partner, 'Participants'>>
}

const PartnerRow = ({ partner }: Props) => {
  const [isPartnerFormShowing, setIsPartnerFormShowing] = useState(false)
  const [isConfirmDeleteShowing, setIsConfirmDeleteShowing] = useState(false)

  const [deletePartner, deletePartnerStatus] = useMutation(
    DELETE_PARTNER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Partner deleted!')
      },
      refetchQueries: [{ query: PartnersQuery }],
    }
  )

  const handleDelete = () => {
    setIsConfirmDeleteShowing(true)
  }

  const handleEdit = () => {
    setIsPartnerFormShowing(true)
  }

  const confirmDeletePartner = () => {
    deletePartner({ variables: { id: partner.id } })
    setIsConfirmDeleteShowing(false)
  }

  return (
    <>
      <div className="partner-table min-h-[68px] border-b-1 border-b-gainsboro">
        <div>
          {partner.logo && <img src={partner.logo} alt={partner.name} />}
        </div>
        <div>
          <a
            href={`${Constants.BASE_URL}/${partner.slug}`}
            target="_blank"
            className="font-bold underline hover:no-underline"
            rel="noreferrer"
          >
            {partner.name}
          </a>
        </div>
        <div>
          <CopyButtonWithTooltip textToCopy={partner.virtualCode}>
            <span>{partner.virtualCode}</span>
          </CopyButtonWithTooltip>
        </div>
        <div>
          <CopyButtonWithTooltip textToCopy={partner.inPersonCode}>
            <span>{partner.inPersonCode}</span>
          </CopyButtonWithTooltip>
        </div>
        <div>24</div>
        <div className="flex items-center justify-between">
          <CopyButtonWithTooltip
            textToCopy={`${Constants.BASE_URL}/${partner.slug}`}
            defaultToolTipText="Copy Badge Page URL"
          >
            <Icon id="copy" />
          </CopyButtonWithTooltip>
          <LinkWithToolTip
            href={`${Constants.BASE_URL}/${partner.slug}`}
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
        <PartnerForm
          state="edit"
          partner={partner}
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
            <strong className="text-chestnutRose">{partner.name}</strong>?
            <div className="center mt-5 gap-x-4">
              <button
                onClick={() => setIsConfirmDeleteShowing(false)}
                className="rounded-md bg-gray-200 px-5 py-2 text-base font-bold text-black hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                className="flex items-center gap-x-1 whitespace-nowrap rounded-md bg-chestnutRose px-5 py-2 text-base text-white hover:bg-red-700"
                onClick={confirmDeletePartner}
                disabled={deletePartnerStatus.loading}
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

export default PartnerRow
