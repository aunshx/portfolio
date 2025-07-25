import React from 'react'
import { CULTIVISION_LINK } from '../../../resources/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faFire, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Banner = ({ onClick }) => {
  return (
      <div className='fixed bottom-10 right-10 md:right-0 md:left-0 md:max-w-96 mx-auto h-50 flex flex-col items-center justify-center gap-4 border-2 px-8 py-4 rounded-lg border-solid border-brand text-gray-200 bg-[#0F0F0F] fade-up-auto'>
        <div className='w-full flex items-center justify-between gap-2'>
            <div />
            <div>
                <FontAwesomeIcon icon={faFire} color='#FFA500' size='lg' /> <span className='ml-1 text-xl'>NEW RELEASE</span>
            </div>
            <FontAwesomeIcon icon={faClose} color='gray' onClick={onClick} className='hover:text-red-500' />
        </div>
        <div className='text-gray-400 italic'>
            Check it out!
        </div>
          <a href={CULTIVISION_LINK} target='_blank' rel='noreferrer nofollow' className='text-gray-200 border-2 border-solid border-[#3B6C32] px-4 py-4 rounded-lg flex flex-col gap-2 hover:border-brand'>
            <div className='flex items-center justify-center gap-1'>
                <img src="https://i.postimg.cc/8kHRvPgp/cv-logo.png" alt="Cultivision Logo" className='h-6 w-6' />
                <div className='text-lg'>
                    Cultivision
                </div>
            </div>
            <div className='text-sm'>
                Cultivated Meat Analytics
            </div>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
        <div className='text-gray-400 border-[1px] border-solid border-gray-500 px-2 py-2 rounded-lg flex flex-col gap-2 text-sm min-w-10 cursor-pointer hover:border-red-500 hover:text-red-500' onClick={onClick}>
            Close
        </div>
    </div>
  )
}

export default Banner