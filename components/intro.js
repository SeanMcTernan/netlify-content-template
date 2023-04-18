import ImageHandler from './contentful-image'

export default function Intro({ unit }) {
  return (
    <>
      <section className="flex-col md:flex-row flex = md:justify-between mt-16 mb-16 md:mb-12">
        <ImageHandler
          src={unit.unitInformation.image.url}
          // layout="fill"
          className="rounded-full"
          width={500}
          height={500}
          alt={"Unit Picture"}
        />
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          Leasing Manager {' '}
          {unit.unitInformation.leasingManagerName} {' '}
          <a
            href={`mailto:${unit.unitInformation.email}`}
            className="underline hover:text-success duration-200 transition-colors"
          >
            {unit.unitInformation.email}
          </a>{' '}
          .
        </h4>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          See on map here {' '}
          <a
            href={unit.url}
            className="underline hover:text-success duration-200 transition-colors"
          >
            here
          </a>{' '}
          .
        </h4>
      </section>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {unit.unitInformation.unitName}
      </h1>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <p>{unit.unitDescription}</p>
      </section>
    </>
  )
}
