'use client'

import Image, { StaticImageData } from 'next/image'
import '../app/globals.css'

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
      className="lg:blocks flex w-full cursor-pointer  space-x-3 rounded-md p-5 hover:bg-gray-800 hover:bg-opacity-40 hover:shadow-lg"
    >
      <Image className="img mr-3 rounded-lg" src={imgScreenshot} alt={link} />
      <div className="flex flex-col">
        <h2 className="mb-4 text-2xl">{title}</h2>
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
