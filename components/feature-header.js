import Company from './company'
import FeatureTitle from './feature-title'

export default function FeatureHeader({ featureName, company }) {
  return (
    <>
      <FeatureTitle>{featureName}</FeatureTitle>
      <div className="max-w-2xl mx-auto">
        <div className="hidden md:block md:mb-12">
          {company && <Company name={company.name} picture={company.featureGraphic} />}
        </div>
      </div>
    </>
  )
}
