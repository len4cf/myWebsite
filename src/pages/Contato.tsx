import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import { Snackbar } from "@mui/material";



const Contato = () => {
    

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
          setOpen(false);
      };

      const handleMessage = () => {
        return open && (name === '' || email === '' || message === '');
    };


    const sendEmail = (e) => {
        e.preventDefault()
    
        if(name === '' || email === '' || message === '') {
          return
        }
    
        const templateParams = {
          from_name: name,
          message: message,
          email: email
        }
    
        emailjs.send("service_jaf2sqm", "template_3f9j2os", templateParams, "Op2MSNOljf_Z2W5wd").then((response) => {
          setName("")
          setEmail("")
          setMessage("")
          setOpen(false)
        }, (err) => {
          console.log("ERRO:", err)
        })
    
      }

    return ( 
        <div className="lg:mx-[20%] lg:mt-[4%]">
            <h1 className="scroll-m-20 text-2xl lg:text-left text-center mt-5 font-extrabold tracking-tight lg:text-5xl mb-10">Vamos conversar?</h1>
            
            <div className="flex w-[200px] gap-4">
                      <a href="https://github.com/len4cf">
                        <Button className="bg-zinc-600 hover:bg-zinc-700 font-bold">
                            Github
                            <i className="devicon-github-original ml-2"></i>
                        </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/helenacarvalhoferreira/">
                          <Button className="bg-blue-800 hover:bg-blue-700 font-bold">
                            LinkedIn
                            <i className="devicon-linkedin-plain ml-2"></i>
                          </Button>
                        </a>
                </div>
            <div className="flex justify-between items-center">
                
                <form className="md:w-[40%] w-[80%] lg:m-0 m-auto flex flex-col gap-4 text-white rounded" onSubmit={sendEmail}>
                    <p className="text-1xl font-bold border-b max-w-max">Me diga quem você é e como posso lhe ajudar:</p>
                    <Input type="text" placeholder="Nome" className="p-6 bg-zinc-800 placeholder:text-white border-none" value={name} onChange={(e) => setName(e.target.value)}/>
                    <Input type="text" placeholder="Email" className="p-6 bg-zinc-800 placeholder:text-white border-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Textarea placeholder="Como posso te ajudar?" className="px-6 resize-none bg-zinc-800 placeholder:text-white border-none" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={180}/>
                    <Button className="bg-zinc-900 hover:bg-zinc-700 font-bold" type="submit" value='Enviar' onClick={handleClick}>Enviar mensagem</Button>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message={handleMessage() ? 'Preencha todos os campos' : 'Mensagem enviada' } />
                </form>
                <img src="https://assets-global.website-files.com/64c73d04a946980a4476537e/64d454faaed374e1f7d11a95_Experiments.svg" alt="Meninas conversando e trabalhando juntas" className="w-[500px]" />
            </div>

        </div>
     );
}
 
export default Contato;