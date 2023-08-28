import EditPartnerCell from 'src/components/Partner/EditPartnerCell'

type PartnerPageProps = {
  id: number
}

const EditPartnerPage = ({ id }: PartnerPageProps) => {
  return <EditPartnerCell id={id} />
}

export default EditPartnerPage
