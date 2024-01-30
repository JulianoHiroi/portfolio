import Image from "next/image";
import FotoPerfil from "../assets/FotoPerfil.jpg";
import { Inconsolata, Lato } from "next/font/google"

//
const inconsolata = Inconsolata({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={inconsolata.className + " h-screen w-full flex items-center"}>
      <div className="w-1/2 h-3/4 flex justify-start items-center flex-col pl-20 space-y-5">
        <Image src={FotoPerfil} width={150} height={150} alt="Foto de Juliano" className="rounded-full" />
        <div className=" flex  flex-col items-center justify-start">
          <h1 className={inconsolata.className + ' text-6xl'}>Juliano Hiroi</h1>
          <h2 className={inconsolata.className + " text-xl w-full mt-5 mb-5"}>Desenvolvedor Full Stack Web</h2>
          <p>Aqui deve ser colocado uma descrição básica sobre o que você procura ou uma frase de efeito e não deve se extender muito</p>
          <div>
            <button>Tópico 1</button>
            <button>Topico 2</button>
            <button>Tópico 3</button>
            <button>Topico 4</button>
          </div>
        </div>
        <div>
          Rede sociais
        </div>

      </div>
      <div >
        <div ></div>
      </div>
    </main>
  );
}
