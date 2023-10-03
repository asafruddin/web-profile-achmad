import Socials from '@/component/socials'
import SectionText from '../component/section_text'
import Spacer from '../component/spacer'

export default function Home() {
  return (

    <div className="flex h-screen grid grid-cols-9 ...">

      <div className="h-screen grid grid-cols-1 content-between p-5 ...">
        <div className="font-regular">
          <p>Software Engineer</p>
        </div>

        <div className='font-regular'>
          Menu
        </div>

        <Socials />

      </div>


      <div className="col-end-10 col-span-8 flex-grow overflow-y-auto scrollbar-width-none bg-gray-900 font-regular ...">
        <div className="flex-1 col-end-10 col-span-8 ... p-24 grid grid-cols-6" >
          <div className="col-start-1 col-end-4 ...">
            <h1 className="text-8xl">Hi,</h1>
            <h1 className="text-8xl" >I am Achmad</h1>

            <Spacer className='h-36' />

            <p className='text-xl' >{'<Mobile Developer>'}</p>


            <p className='text-lg font-light' >A developer who is interested in more than just code. Developed a learning management system. Coordinated the work of a team of three. Interested in a product that imporves or simplifies life</p>

            <div className='h-16' />

            <div className='grid grid-cols-4 gap-8 ...' >
              <button className='col-start-1 col-end-2 outline outline-offset-2 outline-1 outline-emerald-500 rounded h-12 text-emerald-500 ...' >
                Contact me
              </button>
              <button className='col-start-2 col-end-3 outline outline-offset-2 outline-1 outline-violet-500 rounded h-12 text-violet-500 ...'>
                Download CV
              </button>

            </div>
          </div>



          <div className="col-end-7 col-span-2 ...">
            <img
              className="rounded border-2 border-emerald-500 ..."
              src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="dummy pexels" />

          </div>
        </div>

        <div className='px-24 ...'>

          <div className='flex flex-row text-3xl text-emerald-500'>{'<'}<p className='text-slate-50'>Projects</p> {'>'}</div>


        </div>
      </div>
    </div>
  )
}
