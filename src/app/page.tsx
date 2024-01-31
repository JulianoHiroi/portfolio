import Image from 'next/image'
import FotoPerfil from '../assets/FotoPerfil.jpg'
import { Inconsolata, Lato } from 'next/font/google'
import ProjectCard from '@/components/projectCard'
import UserSystemScreen from '../assets/usersystem_tela.png'
//
const inconsolata = Inconsolata({ subsets: ['latin'] })
export default function Home() {
  return (
    <main
      className={inconsolata.className + ' flex h-screen w-full items-center'}
    >
      <div className="flex h-3/4 w-1/2 flex-col items-center justify-start space-y-5 pl-20">
        <Image
          src={FotoPerfil}
          width={150}
          height={150}
          alt="Foto de Juliano"
          className="rounded-full"
        />
        <div className=" flex  flex-col items-center justify-start">
          <h1 className={inconsolata.className + ' text-6xl'}>Juliano Hiroi</h1>
          <h2 className={inconsolata.className + ' mb-5 mt-5 w-full text-xl'}>
            Desenvolvedor Full Stack Web
          </h2>
          <p>
            Aqui deve ser colocado uma descrição básica sobre o que você procura
            ou uma frase de efeito e não deve se extender muito
          </p>
          <div>
            <button>Tópico 1</button>
            <button>Topico 2</button>
            <button>Tópico 3</button>
            <button>Topico 4</button>
          </div>
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
          />
        </div>
      </div>
    </main>
  )
}
