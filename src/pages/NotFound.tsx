import { Button } from "@/components/ui/button";
import { IoIosArrowRoundBack } from "react-icons/io";


const NotFoundPage = () => {
    return ( 
        <div className="text-center mt-[5%] flex flex-col items-center gap-10">
            <div>
                <h1 className="text-9xl font-bold"><span className="text-zinc-400">4</span><span className="text-zinc-600">0</span><span className="text-zinc-400">4</span></h1>
                <p>Essa página não existe :(</p>
                <Button className="bg-zinc-900 hover:bg-zinc-800 font-bold mt-3" >
                    <a href="/home" className="flex items-center">
                        <IoIosArrowRoundBack size={30} />
                        Voltar para a página inicial
                    </a>
                    </Button>
            </div>
            <img src="https://assets-global.website-files.com/64c73d04a946980a4476537e/64d454d3773cf65a90f054f6_Coffee.svg" alt="Menina ciborgue correndo" className="w-[400px]" />
        </div>
     );
}
 
export default NotFoundPage;