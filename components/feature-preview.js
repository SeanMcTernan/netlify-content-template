import Company from './company'

export default function FeaturePreview({
  excerpt,
  featureName,
  featureGraphic,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {featureName && <Company featureName={featureName} picture={featureGraphic} link={`experience/${slug}`} />}
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt} <a href={`experience/${slug}`} className="underline hover:text-success duration-200 transition-colors">Read More.</a></p>
    </div>
  )
}
