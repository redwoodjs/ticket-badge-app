import PartnerCell from 'src/components/Partner/PartnerCell'

type PartnerPageProps = {
  slug: string
}

const PartnerPage = ({ slug }: PartnerPageProps) => {
  return <PartnerCell slug={slug} />
}

export default PartnerPage
