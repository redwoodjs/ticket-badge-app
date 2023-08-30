import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import AddButton from 'src/components/Admin/AddButton/AddButton'
import SlideOut from 'src/components/Admin/SlideOut/SlideOut'
import SpeakerForm from 'src/components/Admin/Speakers/SpeakerForm/SpeakerForm'
import SpeakersCell from 'src/components/Admin/Speakers/SpeakersCell'

const SpeakersPage = () => {
  const [isSpeakerFormShowing, setIsSpeakerFormShowing] = useState(false)

  return (
    <>
      <MetaTags title="Speakers" description="Speakers page" />

      <div>
        <div
          className="speakers-table border-b-2 border-b-gainsboro"
          role="columnheader"
        >
          <div />
          <div>Speaker</div>
          <div>virtual</div>
          <div>in-person</div>
          <div>uses</div>
          <div>
            <AddButton
              handleClick={() => setIsSpeakerFormShowing(true)}
              label="Add Speaker"
            />
          </div>
        </div>
        <SpeakersCell />
      </div>

      <SlideOut
        isShowing={isSpeakerFormShowing}
        handleClose={() => setIsSpeakerFormShowing(false)}
      >
        <SpeakerForm
          state="add"
          onSubmit={() => setIsSpeakerFormShowing(false)}
        />
      </SlideOut>
    </>
  )
}

export default SpeakersPage
