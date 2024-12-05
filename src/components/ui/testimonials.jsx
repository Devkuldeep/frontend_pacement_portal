import React from 'react'

const Testimonials = () => {
  return (
    
        <div className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Read trusted reviews from our students and recruiters
    </h2>

    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <img
            alt="Student 1"
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover"
          />

          <div>
            <div className="flex justify-center gap-0.5 text-green-500">
              {/* Star icons here */}
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-900">Paul Starr, Graduate</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          "The placement support at this portal has been a game-changer. With personalized guidance and an extensive list of job opportunities, I secured my dream job within weeks of signing up. I truly recommend this platform to every student looking to kickstart their career!"
        </p>
      </blockquote>

      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <img
            alt="Student 2"
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover"
          />

          <div>
            <div className="flex justify-center gap-0.5 text-green-500">
              {/* Star icons here */}
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-900">Rachel Thomas, Software Engineer</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          "The platform helped me connect with top companies in the tech industry. The interview preparation resources, mock interviews, and career advice were incredibly valuable. I am now employed with a leading tech firm thanks to this portal!"
        </p>
      </blockquote>

      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <img
            alt="Recruiter 1"
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-14 rounded-full object-cover"
          />

          <div>
            <div className="flex justify-center gap-0.5 text-green-500">
              {/* Star icons here */}
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-900">Anna Peterson, HR Manager</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          "As a recruiter, I have found the candidates from this portal to be well-prepared and highly motivated. It’s a fantastic platform for companies seeking top talent. The interface is user-friendly, and it has helped us hire some amazing individuals."
        </p>
      </blockquote>

    </div>
  </div>
</div>
  )
}

export default Testimonials
