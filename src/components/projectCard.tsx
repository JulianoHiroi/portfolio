'use client'

import Image, { StaticImageData } from 'next/image'
import '../app/globals.css'
type ProjectCardProps = {
  title: string
  description: string
  link: string
  imgScreenshot: StaticImageData
  technologies?: string[]
}

export default function ProjectCard({
  title,
  description,
  link,
  imgScreenshot,
  technologies,
}: ProjectCardProps) {
  const handleOnClick = () => {
    console.log('clicked')
  }
  return (
    <div
      onClick={handleOnClick}
      className="lg:blocks flex w-11/12 cursor-pointer  space-x-3 rounded-md p-5 hover:bg-gray-800 hover:bg-opacity-40 hover:shadow-lg"
    >
      <Image
        className="img mr-3 rounded-lg"
        src={imgScreenshot}
        alt={description}
      />
      <div className="flex flex-col">
        <h1 className="mb-4 text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="mt-3 flex">
          {technologies?.map((tech) => (
            <p key={tech} className="m-1 rounded-md bg-gray-800 p-1 text-white">
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
