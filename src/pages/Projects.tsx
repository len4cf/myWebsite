import { Button } from "@/components/ui/button"
import { BsGithub } from "react-icons/bs"
import { TbWorld } from "react-icons/tb"
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"

const Projects = () => {
  const projetos = [
    {
      Nome: "Portfolio",
      Descrição:
        "Esse mesmo portfolio! Foi feito com ReactJS, TailwindCSS, shadcn/ui, MaterialUI, EmailJS e React Router",
      Github: "www.github.com",
      Live: "www.live.com",
      imagem: project1,
    },
    {
      Nome: "Pomodoro Timer",
      Descrição:
        "Esse site foi desenvolvido por HTML, CSS e JavaScript puro. Ele é um timer de pomodoro que ajuda a manter o foco em suas tarefas.",
      Github: "https://github.com/len4cf/pomodoroTimer",
      Live: "https://relogiopomedoro.vercel.app/",
      imagem: project2,
    },
    {
      Nome: "Cinelena",
      Descrição:
        "Esse site foi desenvolvido utilizando ReactJS, Typescript, TailwindCSS, chakra/ui, React Router e The Movie Database API. Esse projeto é um site de cinema que mostra os filmes em cartaz e os filmes que estão em alta no momento, junto com suas informações.",
      Github: "https://github.com/len4cf/cineLena",
      Live: "https://cine-lena.vercel.app/",
      imagem: project3,
    },
    {
      Nome: "Controle Financeiro",
      Descrição:
        "Esse site foi desenvolvido utilizando ReactJS, TailwindCSS. Esse projeto é um site de controle financeiro que ajuda a organizar suas finanças, mostrando seus gastos e ganhos.",
      Github: "https://github.com/len4cf/financialControl",
      Live: "https://financial-control-alpha.vercel.app/",
      imagem: project4,
    },
  ]

  return (
    <div className="flex flex-col items-center w-full mt-[3%] gap-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-left">
        Projetos
      </h1>
      {projetos.map((projeto) => (
        <div className="flex lg:flex-row lg:items-stretch flex-col items-center gap-10 lg:w-[900px] w-[300px] min-h-[200px] border p-5 border-zinc-700 rounded text-center lg:text-left">
          <img src={projeto.imagem} alt="aaa" className="w-60 rounded" />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{projeto.Nome}</h1>
            <p>{projeto.Descrição}</p>
            <div className="flex gap-4 lg:mt-auto">
              <a href={projeto.Live} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="default"
                  className="text-zinc-900 bg-white hover:text-white"
                >
                  Live
                  <TbWorld className="ml-2" size={15} />
                </Button>
              </a>
              <a
                href={projeto.Github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="link" className="font-bold text-white">
                  Github
                  <BsGithub className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
