import Company from './company'

export default function ExperiencePreview({
  excerpt,
  company,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {company && <Company name={company.name} picture={company.logo} link={`experience/${slug}`} />}
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt} <a href={`experience/${slug}`} className="underline hover:text-success duration-200 transition-colors">Read More.</a></p>
    </div>
  )
}
