import React from 'react'
import { Button } from '../../ui/button'

export default function Technology({ technology, description }: { technology: string, description: string }) {
    return (
        <div className='gradient inline-block rounded-[21px] p-[1px]'>
            <Button className='bg-black font-extralight text-white rounded-[21px] text-[12px]'>
                {technology}
                </Button>
        </div>
    )
}
