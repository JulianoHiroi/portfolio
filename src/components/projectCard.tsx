'use client'

import Image, { StaticImageData } from 'next/image'
import '../app/globals.css'
import IconFoward from './iconFoward'

type ProjectCardProps = {
  title: string
  link: string
  imgScreenshot: StaticImageData
  technologies?: string[]
  children: React.ReactNode
}

export default function ProjectCard({
  title,
  link,
  imgScreenshot,
  technologies,
  children,
}: ProjectCardProps) {
  const handleOnClick = () => {
    window.open(link, '_blank')
  }
  return (
    <div
      onClick={handleOnClick}
      className="lg:blocks flex w-full cursor-pointer  space-x-3 rounded-md p-5 hover:bg-gray-800 hover:bg-opacity-40 "
    >
      <Image className="img mr-3 rounded-lg" src={imgScreenshot} alt={link} />
      <div className="boardProject flex flex-col">
        <div className="relative flex w-fit">
          <h2 className="titleProject mb-4 text-2xl">{title}</h2>
          <div className="iconProject op-0 absolute -right-7">
            <IconFoward />
          </div>
        </div>
        {children}
        <li className="mt-2 flex flex-wrap items-start items-end space-x-1  space-y-1 text-sm">
          {technologies &&
            technologies.map((technologies) => {
              return (
                <ul
                  key={technologies}
                  className={'h-8 rounded-md bg-gray-800 p-1 text-white'}
                >
                  <p>{technologies}</p>
                </ul>
              )
            })}
        </li>
      </div>
    </div>
  )
}
