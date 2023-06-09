import markdownStyles from './markdown-styles.module.css'


export default function FeatureBody({ description }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        {description}
      </div>
    </div>
  )
}
