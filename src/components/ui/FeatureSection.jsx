import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Easy Application Process',
    description:
      'Submit your applications with just a few clicks. Our streamlined process ensures you can apply to multiple companies efficiently.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure Data Protection',
    description: 'Your personal information and academic records are protected with enterprise-grade security protocols.',
    icon: LockClosedIcon,
  },
  {
    name: 'Real-time Updates',
    description: 'Get instant notifications about new job postings, interview schedules, and placement updates.',
    icon: ServerIcon,
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Seamless Placements</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Your Gateway to Career Success
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our placement portal connects talented students with leading employers, streamlining the recruitment process
                and helping you land your dream job with ease.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative lg:pt-8">
            <div className="hidden lg:block">
              <div className="absolute inset-0 transform-gpu -translate-x-1/2 -translate-y-1/2 rotate-12 bg-gradient-to-br from-[#ff80b5] to-[#9089fc] rounded-md w-96 h-96" />
              <div className="absolute inset-0 transform-gpu -translate-x-1/2 -translate-y-1/2 rotate-12 bg-gradient-to-br from-[#ff80b5] to-[#9089fc] rounded-md w-96 h-96" />
            </div>
            <div className="relative bg-gradient-to-br from-[#ff80b5] to-[#9089fc] rounded-md p-8">
              <img src="" alt="Feature" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
