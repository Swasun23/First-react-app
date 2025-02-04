import Filterdock from '../components/Filterdock'
import Jobcard from '../components/Job-card'
import Topbar from '../components/Topbar'
import jobs from '../components/jobsdata'
import Navbar from '../components/Navbar'
import BottomDrawer from '../components/BottomDrawer'
import Footer from '../components/Footer'

const Mainpage = () => {
  return (
    <div className='bg-gray-100 overflow-hidden lg:text-md'>
        <div className='flex flex-col'>
        <Navbar />
        <main className='flex flex-row relative justify-around sm:justify-between xl:justify-center mx-4 mt-25 '>
            <div className='lg:hidden'>
                <BottomDrawer/>
            </div>
            <div className='hidden lg:block'>
                <Filterdock />
            </div>
            <ul className='grid xl:grid-cols-3 gap-1 s:grid-cols-2 ml-3 s:justify-between justify-items-stretch'>
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
        <div className='mt-5'>
        <Footer/>
        </div>
        
        </div>
    </div>
    
  )
}

export default Mainpage