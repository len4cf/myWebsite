import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@chakra-ui/icons";
import { BsGithub } from "react-icons/bs";


const Home = () => {
    return ( 
        <div className='lg:mx-[20%] lg:mt-[4%] mx-10 flex lg:flex-row-reverse flex-col lg:justify-around items-center lg:gap-0 gap-14'>
            <div className="lg:mt-0 mt-[30%]">
                <div>
                <h1 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl">
                Olá ✌
                </h1>
                <p className='text-3xl font-thin mt-4'>Meu nome é <span className='border-b border-zinc-500'>Helena Carvalho</span></p>
                <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-3">
                Desenvolvedora Front-end
                </h4>
                </div>
                <div className="flex gap-5">
                    <Button variant='secondary' className="font-bold mt-4">
                    <a href="/curriculo.pdf" download> Download CV </a>
                    <DownloadIcon className="ml-2" />
                    </Button>
                    <Button variant='link' className="font-bold mt-4 text-white" >
                        <a href="https://github.com/len4cf">
                        Github
                        </a>
                    <BsGithub className="ml-2" />
                    </Button>
                </div>
            </div>
            <img src="https://assets-global.website-files.com/64c73d04a946980a4476537e/64d455276eae71b4f2472b6d_New%20Beginnings.svg" alt="Foto ilustrativa de garota sentada no sofá lendo jornal" className="lg:w-[500px] w-[300px]"/>
        </div>
     );
}
 
export default Home;