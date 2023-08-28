import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

import type { EditPartnerById, UpdatePartnerInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormPartner = NonNullable<EditPartnerById['partner']>

interface PartnerFormProps {
  partner?: EditPartnerById['partner']
  onSave: (data: UpdatePartnerInput, id?: FormPartner['id']) => void
  error: RWGqlError
  loading: boolean
}

const PartnerForm = (props: PartnerFormProps) => {
  const onSubmit = (data: FormPartner) => {
    props.onSave(data, props?.partner?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPartner> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.partner?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>

        <TextField
          name="slug"
          defaultValue={props.partner?.slug}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="logo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Logo
        </Label>

        <TextField
          name="logo"
          defaultValue={props.partner?.logo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="logo" className="rw-field-error" />

        <Label
          name="code"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Code
        </Label>

        <TextField
          name="code"
          defaultValue={props.partner?.code}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="code" className="rw-field-error" />

        <Label
          name="discount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Discount
        </Label>

        <NumberField
          name="discount"
          defaultValue={props.partner?.discount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="discount" className="rw-field-error" />

        <Label
          name="endDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End date
        </Label>

        <DatetimeLocalField
          name="endDate"
          defaultValue={formatDatetime(props.partner?.endDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="endDate" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PartnerForm
