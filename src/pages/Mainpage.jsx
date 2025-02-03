import Filterdock from '../components/Filterdock'
import Jobcard from '../components/Job-card'
import Topbar from '../components/Topbar'
import jobs from '../components/jobsdata'

const Mainpage = () => {
  return (
    <div className='bg-gray-100'>
        <Topbar />
        <main className='flex flex-row relative m-auto justify-center mr-75 ml-75 mt-5'>
            <div className='relative'>
                <Filterdock/>
            </div>
            <ul className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 ml-3'>
                {jobs.map((job, index) => (
                    <li key={index}>
                    <Jobcard
                        companyLogo={job.companyLogo}
                        companyName={job.companyName}
                        jobLocation={job.jobLocation}
                        jobRole={job.jobRole}
                        description={job.description}
                        nPositions={job.nPositions}
                        roleType={job.roleType}
                        pay={job.pay}
                    />
                    </li>
                ))}
            </ul>
        </main>
    </div>
    
  )
}

export default Mainpage