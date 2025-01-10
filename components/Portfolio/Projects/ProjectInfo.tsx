import React, { useMemo } from 'react'
import { Project } from '@/models/project'
import { Technology } from '@/models/technology';
import { getTechnologyByIds } from '@/lib/projects';
import TechnologyBadge from '../Skills/TechnologyBadge';
import { Github, Globe, WholeWord } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function ProjectInfo({ data }: { data: Project }) {
  let technologies: Technology[] = useMemo(
    () => getTechnologyByIds(data.technologies),
    [data._id]
  );

  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold font-inter md:text-[23px] text-[21px]">{data?.name}</h3>
          <h4 className="font-medium md:text-sm text-[12px] uppercase md:opacity-100 opacity-90 text-primary tracking-tight">{data?.niche}</h4>
        </div>
        <div className="flex gap-3">
          <div className='gradient grid items-center rounded-full aspect-square p-[1.5px]'>
            <a target='_blank' href={data?.github} className='bg-black text-white p-1 rounded-full aspect-square flex justify-center items-center'>
              <Github size={18} strokeWidth={1} />
            </a>
          </div>
          <div className='gradient grid items-center rounded-full aspect-square p-[1.5px]'>
            <a target='_blank' href={data?.live} className='bg-black text-white p-1 rounded-full aspect-square flex justify-center items-center'>
              <Globe size={18} strokeWidth={1} />
            </a>
          </div>
        </div>
      </div>
      {data?.description.split('\n').map((text: string, index: number) => (
        <p key={`text-${index + 1}`} className="text-left text-white md:text-[15px] text-[14px] font-light mt-[15px] leading-relaxed">
          {text}
        </p>
      ))}
      <div className='mt-[20px] flex md:gap-4 gap-2 flex-wrap'>
        {technologies?.length > 0 && technologies.map((technology) => (
          <TechnologyBadge key={`technology-${technology}`} technology={technology} />
        ))}
      </div>
    </div>
  )
}
