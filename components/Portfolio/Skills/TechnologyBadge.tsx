import React from 'react'
import { Button } from '../../ui/button'
import { Technology } from '@/models/technology'

export default function TechnologyBadge({technology}:{technology: Technology}) {
    return (
        <div className='gradient inline-block rounded-[21px] p-[1.5px]'>
            <Button className='font-extralight bg-black text-white rounded-[21px] text-[12px] py-0 pl-[6px] h-full'>
                <img src={technology?.logo} className='w-[30px] aspect-square rounded-full' alt="" />
                {technology?.name}
            </Button>
        </div>
    )
}
