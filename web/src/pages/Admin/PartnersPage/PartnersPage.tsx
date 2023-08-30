import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import AddButton from 'src/components/Admin/AddButton/AddButton'
import PartnerForm from 'src/components/Admin/Partners/PartnerForm/PartnerForm'
import PartnersCell from 'src/components/Admin/Partners/PartnersCell'
import SlideOut from 'src/components/Admin/SlideOut/SlideOut'

const PartnersPage = () => {
  const [isPartnerFormShowing, setIsPartnerFormShowing] = useState(false)

  return (
    <>
      <MetaTags title="Partners" description="Partners page" />

      <div>
        <div
          className="partner-table border-b-2 border-b-gainsboro"
          role="columnheader"
        >
          <div />
          <div>Partner</div>
          <div>virtual</div>
          <div>in-person</div>
          <div>uses</div>
          <div>
            <AddButton
              handleClick={() => setIsPartnerFormShowing(true)}
              label="Add Partner"
            />
          </div>
        </div>
        <PartnersCell />
      </div>

      <SlideOut
        isShowing={isPartnerFormShowing}
        handleClose={() => setIsPartnerFormShowing(false)}
      >
        <PartnerForm
          state="add"
          onSubmit={() => setIsPartnerFormShowing(false)}
        />
      </SlideOut>
    </>
  )
}

export default PartnersPage
