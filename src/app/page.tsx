'use client'

import './globals.css'

import fs from 'fs'
import path from 'path'

import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import FotoPerfil from '../assets/FotoPerfil.jpg'
import UserSystemScreen from '@/assets/usersystem_tela.png'
import TaskToDoScreen from '@/assets/tasktodo_tela.png'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

import ButtonHoverBar from '../components/buttonHoverBar'
import EventWork from '@/components/eventWork'
import ProjectCard from '@/components/projectCard'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'], weight: '500' })
const interTitle = Inter({ subsets: ['latin'], weight: '700' })

export default function Home() {
  const [pdfData, setPdfData] = useState('')

  useEffect(() => {
    const fetchPdfData = async () => {
      try {
        // Faz a requisição para obter a string base64 do arquivo de texto

        const response = await fetch('/Curriculo_base64.txt')
        const base64String = await response.text()
        setPdfData(base64String)
      } catch (error) {
        console.error('Erro ao obter a string base64 do arquivo:', error)
      }
    }

    fetchPdfData()
  }, [])
  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownload = () => {
    try {
      // Criar um link temporário para download
      const link = document.createElement('a')
      link.href = `data:application/pdf;base64,${pdfData}`
      link.download = 'Curriculo_Juliano_Hiroi.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Erro ao baixar o arquivo PDF:', error)
    }
  }

  return (
    <main
      className={
        inter.className +
        '  lg flex w-full flex-col items-center justify-center lg:flex-row'
      }
    >
      <div className=" flex w-full flex-col items-center justify-start space-y-5 md:pl-5 lg:h-3/4 lg:w-1/2">
        <div className=" mt-12  flex flex-col items-center justify-center sm:ml-5 lg:mt-0">
          <Image
            src={FotoPerfil}
            width={150}
            height={150}
            alt="Foto de Juliano"
            className="rounded-full"
          />
          <h1
            className={
              interTitle.className +
              '  mb-5 text-5xl tracking-tight sm:text-6xl'
            }
          >
            Juliano Hiroi
          </h1>
          <div className="ml-2 sm:ml-0">
            <h2 className=" mb-5 mt-5 w-full text-2xl font-bold tracking-tight">
              Desenvolvedor Full Stack Web
            </h2>

            <p className="w-11/12 text-lg text-gray-500 sm:w-4/5">
              Desenvolvo sites e aplicações web com foco em <b>usabilidade</b> e{' '}
              <b>performance</b>.
            </p>
          </div>
          <div className=" mt-12 hidden items-center space-x-5 text-xl lg:flex">
            <ButtonHoverBar
              scrollToSection={scrollToSection}
              text="Sobre Mim"
              id="Sobre"
            />{' '}
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <ButtonHoverBar
              scrollToSection={scrollToSection}
              text="Experiência"
              id="Experiência"
            />{' '}
            <div className="h-2 w-2 rounded-full bg-white "></div>
            <ButtonHoverBar
              scrollToSection={scrollToSection}
              text="Projetos"
              id="Projetos"
            />{' '}
          </div>

          <div className="mt-10 flex space-x-10">
            <Link href="https://github.com/JulianoHiroi">
              {' '}
              <FaGithub
                color="white"
                size={30}
                className="hover:fill-gray-700 "
              />{' '}
            </Link>
            <Link href="https://github.com/JulianoHiroi">
              {' '}
              <RiInstagramFill
                color="white"
                size={30}
                className="hover:fill-gray-700 "
              />{' '}
            </Link>
            <Link href="https://github.com/JulianoHiroi">
              {' '}
              <FaLinkedin
                color="white"
                size={30}
                className="hover:fill-gray-700 "
              />{' '}
            </Link>
          </div>
          <button onClick={handleDownload} className=" button-bar mt-5">
            <div className="flex space-x-2 hover:text-gray-300">
              <p className="text-xl">Currículo</p> <FaFileDownload size={20} />
            </div>
            <span className="button-bar-span"></span>
          </button>
        </div>
      </div>
      <div className=" md: flex h-screen w-full items-start justify-center lg:w-1/2 lg:justify-start lg:overflow-y-auto">
        <div className="divMaster w-11/12">
          <div className="pt-24" id="Sobre">
            <p className="about-text  indent-8">
              Sou Juliano Hiroi, desenvolvedor web full stack. Atualmente curso
              Sistemas de Informação na Universidade Tecnologica Federal do
              Paraná. Meu interesse por programação começou em 2019, quando
              comecei a estudar <b>Linguagem C</b> durante meu técnico em
              Eletrônica. Desde então, me apaixonei pela área e busco me
              aprimorar nas diversas áreas de programação.
            </p>
          </div>
          <h1 className="mb-10 pt-10 text-4xl sm:pl-36" id="Experiência">
            Experiência
          </h1>
          <div className="flex  flex-col space-y-10">
            <EventWork
              title="Nosso Olhar Solidário"
              Role="Voluntário"
              dateStart="Jun 2022"
              dateEnd="Atualmente"
              Tecnologias={[
                'Typescript',
                'HTML',
                'CSS',
                'React',
                'Docker',
                'NodeJs',
                'Prisma',
                'MariaDB',
              ]}
            >
              <p className="text-gray-400">
                Desenvolvedor na Organização Beneficente{' '}
                <a
                  href="https://nossoolharsolidario.com.br/"
                  target="_blank"
                  className="text-blue-600"
                  rel="noreferrer"
                >
                  Nosso Olhar Solidário
                </a>
                , atuando em ambas as frentes, <b>front-end</b> e{' '}
                <b>back-end</b>. A função atual compreende a gestão do{' '}
                <b>deploy</b> das aplicações e a manutenção nos{' '}
                <b>servidores</b> utilizados pelo projeto.
              </p>
            </EventWork>
            <EventWork
              title="Projeto Pack de Baterias com BMS"
              Role="Bolsista"
              dateStart="Mai 2023"
              dateEnd="Ago 2023"
              Tecnologias={[
                'Python',
                'Pandas',
                'MQTT',
                'Docker',
                ' MySQL',
                'Node-RED',
                'Mosquitto',
              ]}
            >
              <p className="text-gray-400">
                Desenvolvi um{' '}
                <b>software para coleta, armazenamento e visualização </b>
                de dados obtidos em experimentos com baterias utilizando a
                comunicação <b>MQTT</b>.Criei scripts em <b>Python</b> para a
                geração de gráficos e planilhas com os dados adquiridos.
              </p>
            </EventWork>
            <EventWork
              title="Tracsat - Empresa de rastreadores"
              Role="Estágiario"
              dateStart="Mai 2020"
              dateEnd="Nov 2020"
              Tecnologias={['Excel', 'Eletrônica', 'Gestão']}
            >
              <p className="text-gray-400">
                Fui responsável pela <b>manutenção</b> de rastreadores,que
                incluíam a realização de testes e cadastros desses dispositivos,
                bem como a manutenção e <b>criação de planilhas</b>. Além disso,
                assumi a <b>gestão e organização do estoque de produtos </b>e
                ferramentas.
              </p>
            </EventWork>
          </div>
          <div>
            <h1 className=" mb-7 pt-10 text-4xl sm:pl-36" id="Projetos">
              Projetos
            </h1>
            <ProjectCard
              title="UserSystem"
              imgScreenshot={UserSystemScreen}
              link="https://usersystem-web-app-p2bi.vercel.app/"
              technologies={[
                'NextJs',
                'Typescript',
                'NodeJs',
                'TailwindCSS',
                'PostgresSQL',
                'Prisma',
                'Arquitetura Hexagonal',
                'Express',
              ]}
            >
              <p className="text-gray-400">
                O projeta abrange todas as etapas do processo de{' '}
                <b>autenticação</b>, desde o registro até{' '}
                <b>a recuperação de senha via e-mail</b>. No desenvolvimento
                foram aplicados conceitos de <b>segurança</b>, destacando-se a{' '}
                <b>encriptação</b> de dados sensíveis.
              </p>
            </ProjectCard>
            <ProjectCard
              title="TaskToDo"
              imgScreenshot={TaskToDoScreen}
              link="https://github.com/JulianoHiroi/tasktodo"
              technologies={[
                'React',
                'Javascript',
                'HTML',
                'CSS',
                'Express',
                'NodeJs',
              ]}
            >
              <p className="text-gray-400">
                O TaskToDo é um <b>sistema de gerenciamento </b>de tarefas
                simples. Este projeto marcou como <b>meu primeiro site </b>
                considerado &#39;completo&#39;, sendo de{' '}
                <b>grande aprendizado</b> no meu percurso como{' '}
                <b>desenvolvedor web</b>.
              </p>
            </ProjectCard>
          </div>
          <p className="mb-6 mt-10 h-20 indent-8 text-sm text-gray-600 sm:mb-0 lg:w-5/6">
            Esse Portfólio foi construído com{' '}
            <b className="text-gray-400">NextJs</b> e{' '}
            <b className="text-gray-400">TailwindCSS</b>. O seu layout foi
            inspirado no projeto de{' '}
            <a
              href="https://brittanychiang.com/"
              target="_blank"
              className="text-blue-600"
              rel="noreferrer"
            >
              {' '}
              Brittaney Chiang
            </a>
            . Foi codificado usando{' '}
            <b className="text-gray-400">Visual Studio Code</b>.
          </p>
        </div>
      </div>
    </main>
  )
}
