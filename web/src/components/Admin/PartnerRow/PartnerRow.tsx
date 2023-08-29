import { useState } from 'react'

import { Partner } from 'types/graphql'

import Icon from 'src/components/Icon/Icon'
import { Constants } from 'src/utils/Constants'

import ButtonWithToolTip from '../ButtonWithTooltip/ButtonWithTooltip'
import CopyButtonWithTooltip from '../CopyButtonWithTooltip/CopyButtonWithTooltip'
import LinkWithToolTip from '../LinkWithTooltip/LinkWithTooltip'
import Modal from '../Modal/Modal'
import PartnerForm from '../PartnerForm/PartnerForm'
import SlideOut from '../SlideOut/SlideOut'

interface Props {
  partner: Partial<Omit<Partner, 'Participants'>>
}

const PartnerRow = ({ partner }: Props) => {
  const [isPartnerFormShowing, setIsPartnerFormShowing] = useState(false)
  const [confirmDeleteShowing, isConfirmDeleteShowing] = useState(false)

  const handleDelete = () => {
    isConfirmDeleteShowing(true)
  }

  const handleEdit = () => {
    setIsPartnerFormShowing(true)
  }

  return (
    <>
      <div className="partner-table min-h-[68px] border-b-1 border-b-gainsboro">
        <div>
          <img src={partner.logo} alt={partner.name} />
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
        <PartnerForm state="edit" partner={partner} />
      </SlideOut>

      <Modal
        isShowing={confirmDeleteShowing}
        handleClose={() => isConfirmDeleteShowing(false)}
      >
        Stuff
      </Modal>
    </>
  )
}

export default PartnerRow
