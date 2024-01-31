'use client'

import Image, { StaticImageData } from 'next/image'

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
}: ProjectCardProps) {
  const handleOnClick = () => {
    console.log('clicked')
  }
  return (
    <div
      onClick={handleOnClick}
      className="flex w-full space-x-3 rounded-lg border border-transparent  p-5 hover:border-white"
    >
      <Image
        className="h-36  rounded-lg"
        src={imgScreenshot}
        alt={description}
      />
      <div className="flex flex-col">
        <h1 className="mb-4 ml-4 text-2xl">{title}</h1>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  )
}
