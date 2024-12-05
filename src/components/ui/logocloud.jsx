const companies = [
    {
        imgSrc: "https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        name: "Company Name",
        description: "Branding / Signage"
    },

    {
        imgSrc: "https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        name: "Company Name",
        description: "Branding / Signage"
    }, {
        imgSrc: "https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        name: "Company Name",
        description: "Branding / Signage"
    }, {
        imgSrc: "https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        name: "Company Name",
        description: "Branding / Signage"
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        name: "Company Name",
        description: "Branding / Signage"
    },
    // Add more company objects as needed
];

function CompanyCard({ imgSrc, name, description }) {
    return (
        <div>
            <img
                alt=""
                src={imgSrc}
                className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
            />
            <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                <strong className="font-medium">{name}</strong>
                <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
                <p className="mt-0.5 opacity-50 sm:mt-0">{description}</p>
            </div>
        </div>
    );
}

export default function LogoUniversities() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg/8 font-semibold text-gray-900">
                    Trusted by the world’s most innovative teams
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {companies.map((company, index) => (
                        <CompanyCard
                            key={index}
                            imgSrc={company.imgSrc}
                            name={company.name}
                            description={company.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
