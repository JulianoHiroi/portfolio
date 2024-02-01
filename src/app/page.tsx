"use client"

import Image from "next/image";
import FotoPerfil from "../assets/FotoPerfil.jpg";
import { Inconsolata, Lato } from "next/font/google"
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import ButtonHoverBar from "../components/buttonHoverBar";

import Link from "next/link";
import DateCalender from "@/components/DateCalender";
import EventWork from "@/components/eventWork";
//
const inconsolata = Inconsolata({ subsets: ["latin"], weight: "700" });
//
export default function Home() {

  const handleOnSelectSubjet = () => {
    console.log('teste')
  }
  return (
    <main className={" h-screen w-full flex items-center"}>
      <div className="w-1/2 h-3/4 flex justify-start items-center flex-col pl-32 space-y-5">
        <Image src={FotoPerfil} width={150} height={150} alt="Foto de Juliano" className="rounded-full" />
        <div className=" flex  flex-col items-center justify-start">
          <h1 className={inconsolata.className + ' text-6xl mb-5'}>Juliano Hiroi</h1>
          <div className="pr-32 pl-32 mb-32">
            <h2 className={inconsolata.className + " text-xl w-full mt-5 mb-5"}>Desenvolvedor Full Stack Web</h2>
            <p>Aqui deve ser colocado uma descrição básica sobre o que você procura ou uma frase de efeito e não deve se extender muito</p>
          </div>
          <div className="flex space-x-5 items-center text-xl">
            <ButtonHoverBar HandleOnClick={handleOnSelectSubjet} text="Experiência" /> <div className="w-2 h-2 rounded-full bg-white"></div>
            <button onClick={handleOnSelectSubjet} className="hover:text-gray-600">Projetos</button> <div className="w-2 h-2 rounded-full bg-white"></div>
            <button onClick={handleOnSelectSubjet} className="hover:text-gray-600">Sobre mim</button>
          </div>
          <div className="flex space-x-10 mt-10">
            <Link href="https://github.com/JulianoHiroi"> <FaGithub color="white" size={30} className="hover:fill-gray-700 " /> </Link>
            <Link href="https://github.com/JulianoHiroi"> <RiInstagramFill color="white" size={30} className="hover:fill-gray-700 " /> </Link>
            <Link href="https://github.com/JulianoHiroi"> <FaLinkedin color="white" size={30} className="hover:fill-gray-700 " /> </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen overflow-hidden pt-10">
        <div className=" overflow-auto h-full w-11/12">

          <h1 className="text-4xl mb-5 pl-36">Experiência</h1>
          <div className="flex  flex-col space-y-5 text-justify">
            <EventWork title="Nosso Olhar Solidário" Role="Desenvolvedor" dateStart="Jun 2022" dateEnd="Atualmente" Tecnologias={["Typescript", "HTML", "CSS", "React", "Docker", "NodeJs", "Prisma", "MariaDB"]}>
              <p>
                Desenvolvedor do website da Organização Beneficente <a href="https://nossoolharsolidario.com.br/" target="_blank" className="text-blue-600">Nosso Olhar Solidário</a>, atuando em ambas as frentes, <b className="text-neutral-700">front-end</b> e <b>back-end</b>. A função atual compreende a gestão do deploy das aplicações e a manutenção nos servidores utilizados pelo projeto.
              </p>
            </EventWork>
            <EventWork title="Projeto Pack de Baterias com BMS" Role="Bolsista" dateStart="Mai 2023" dateEnd="Ago 2023">
              <p>
                Desenvolvi um software para coleta, armazenamento e visualização de dados obtidos em experimentos com baterias utilizando a comunicação MQTT. Para essa aplicação, empreguei tecnologias como Node-RED, Metabase, MySQL, Mosquitto e Docker. Além disso, criei scripts em Python, utilizando a biblioteca Panda, para a geração de gráficos e planilhas com os dados adquiridos nos experimentos. Essa iniciativa proporcionou uma integração eficiente de ferramentas e tecnologias no contexto da análise de dados experimentais.
              </p>
            </EventWork>
            <EventWork title="Tracsat - Empresa de rastreadores" Role="Estágiario" dateStart="Mai 2020" dateEnd="Nov 2020">
              <p>
                Durante o estágio obrigatório para minha formação em técnico em eletrônica, desempenhei diversas atividades voltadas para a manutenção de rastreadores. Minhas responsabilidades incluíam a realização de testes e cadastros desses dispositivos, bem como a manutenção e criação de planilhas. Além disso, assumi a gestão e organização do estoque de produtos e ferramentas.
              </p>
            </EventWork>
          </div>
          <div>Rede sociais</div>
        </div>
        <div className="w-1/2">
          <div className="w-11/12">
            <ProjectCard
              title="UserSystem"
              description="O projeta abrange todas as etapas do processo de autenticação, desde o registro até a recuperação de senha via e-mail. No desenvolvimento foram aplicados conceitos de segurança, destacando-se a encriptação de dados sensíveis."
              imgScreenshot={UserSystemScreen}
              link="https://usersystem-web-app-p2bi.vercel.app/"
              technologies={['React', 'Node', 'MongoDB']}
            />
          </div>

        </div>
    </main >
  );
}
