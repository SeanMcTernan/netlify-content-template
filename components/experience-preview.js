import Link from 'next/link'
import Company from './company'
import DateComponent from './date'

export default function ExperiencePreview({
  title,
  excerpt,
  company,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {company && <Company name={company.name} picture={company.logo} link={`experience/${slug}`} />}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`experience/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt} <a href={`experience/${slug}`} className="underline hover:text-success duration-200 transition-colors">Read More.</a></p>
    </div>
  )
}
