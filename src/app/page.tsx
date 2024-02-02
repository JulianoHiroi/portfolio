'use client'

import './globals.css'

import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import FotoPerfil from '../assets/FotoPerfil.jpg'
import UserSystemScreen from '@/assets/usersystem_tela.png'
import TaskToDoScreen from '@/assets/tasktodo_tela.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

import ButtonHoverBar from '../components/buttonHoverBar'
import EventWork from '@/components/eventWork'
import ProjectCard from '@/components/projectCard'

const inter = Inter({ subsets: ['latin'], weight: '500' })
const interTitle = Inter({ subsets: ['latin'], weight: '700' })

export default function Home() {
  const handleOnSelectSubjet = () => {
    console.log('teste')
  }
  return (
    <main className={inter.className + ' flex h-screen w-full items-center '}>
      <div className="flex h-3/4 w-1/2 flex-col items-center justify-start space-y-5 pl-32">
        <Image
          src={FotoPerfil}
          width={150}
          height={150}
          alt="Foto de Juliano"
          className="rounded-full"
        />
        <div className=" flex  flex-col items-center justify-start">
          <h1
            className={interTitle.className + ' mb-5 text-6xl tracking-tight'}
          >
            Juliano Hiroi
          </h1>
          <div className="mb-12">
            <h2 className=" mb-5 mt-5 w-full text-xl font-bold tracking-tight">
              Desenvolvedor Full Stack Web
            </h2>
            <p className="w-3/5">
              Aqui deve ser colocado uma descrição básica sobre o que você
              procura ou u
            </p>
          </div>
          <div className="flex items-center space-x-5 text-xl">
            <ButtonHoverBar
              HandleOnClick={handleOnSelectSubjet}
              text="Experiência"
            />{' '}
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <button
              onClick={handleOnSelectSubjet}
              className="hover:text-gray-600"
            >
              Projetos
            </button>{' '}
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <button
              onClick={handleOnSelectSubjet}
              className="hover:text-gray-600"
            >
              Sobre mim
            </button>
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
        </div>
      </div>
      <div className="scrollable h-screen w-1/2  overflow-hidden overflow-y-auto overflow-x-hidden">
        <h1 className="mb-10 mt-10 pl-36 text-4xl">Experiência</h1>
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
              , atuando em ambas as frentes, <b>front-end</b> e <b>back-end</b>.
              A função atual compreende a gestão do <b>deploy</b> das aplicações
              e a manutenção nos <b>servidores</b> utilizados pelo projeto.
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
          <h1 className=" mb-5 mt-10 pl-36 text-4xl">Projetos</h1>
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
              <b>a recuperação de senha via e-mail</b>. No desenvolvimento foram
              aplicados conceitos de
              <b>segurança</b>, destacando-se a <b>encriptação</b> de dados
              sensíveis.
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
              considerado &#39;completo&#39;, sendo de <b>
                grande aprendizado
              </b>{' '}
              no meu percurso como <b>desenvolvedor web</b>.
            </p>
          </ProjectCard>
        </div>
      </div>
    </main>
  )
}
