import FeaturePreview from './feature-preview'

export default function FeatureList({ features }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {features.map((feature) => (
          <FeaturePreview
            key={feature.slug}
            featureName={feature.featureName}
            featureGraphic={feature.featureGraphic}
            slug={feature.slug}
            excerpt={feature.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
