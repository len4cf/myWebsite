import { Button } from '@/components/ui/button';
import pngPic from '../assets/pngPic.png';
import { BsGithub } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';


const Projects = () => {

    const projetos = [
        {
            "Nome": "Projeto1",
            "Descrição": "Lorem",
            "Github": "www.github.com",
            "Live": "www.live.com"
        },
        {
            "Nome": "Projeto2",
            "Descrição": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Github": "www.github.com",
            "Live": "www.live.com"
        },
        {
            "Nome": "Projeto3",
            "Descrição": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Github": "www.github.com",
            "Live": "www.live.com"
        },
    ];
    
    return ( 
        <div className="flex flex-col items-center w-full mt-[3%] gap-5">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-left">Projetos</h1>
            {projetos.map((projeto) => (
                <div className='flex lg:flex-row lg:items-stretch flex-col items-center gap-10 lg:w-[700px] w-[300px] min-h-[200px] border p-5 border-zinc-700 rounded text-center lg:text-left'>
                    <img src={pngPic} alt="" className='w-60 rounded'/>
                    <div className="flex flex-col gap-2">
                        <h1>{projeto.Nome}</h1>
                        <p>{projeto.Descrição}</p>
                        <div className='flex gap-4 lg:mt-auto'>
                            <Button variant='default' className='text-zinc-900 bg-white hover:text-white'>
                                Live
                                <TbWorld className='ml-2' size={15}/>
                            </Button>
                            <Button variant='link' className="font-bold text-white" >
                                <a href={projeto.Github}>
                                Github
                                </a>
                            <BsGithub className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            
            ))}
            
        </div>
     );
}
 
export default Projects;