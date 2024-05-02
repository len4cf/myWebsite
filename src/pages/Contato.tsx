import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import { Box, Snackbar } from "@mui/material";
import { FaCheck } from "react-icons/fa";



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
            <h1 className="scroll-m-20 text-2xl lg:text-left text-center mt-5 font-extrabold tracking-tight lg:text-5xl mb-10">Entre em contato comigo</h1>
            <div className="flex justify-between">
                <form className="md:w-[40%] w-[80%] lg:m-0 m-auto flex flex-col gap-4 text-white rounded" onSubmit={sendEmail}>
                    <Input type="text" placeholder="Nome" className="p-6 bg-zinc-800 placeholder:text-white border-none" value={name} onChange={(e) => setName(e.target.value)}/>
                    <Input type="text" placeholder="Email" className="p-6 bg-zinc-800 placeholder:text-white border-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Textarea placeholder="Como posso te ajudar?" className="px-6 resize-none bg-zinc-800 placeholder:text-white border-none" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={180}/>
                    <Button className="bg-zinc-900 hover:bg-zinc-700 font-bold" type="submit" value='Enviar' onClick={handleClick}>Enviar mensagem</Button>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message={handleMessage() ? 'Preencha todos os campos' : 'Mensagem enviada' } />
                </form>
                <div className="flex flex-col w-[200px] gap-4">
                    <Button className="bg-zinc-600 hover:bg-zinc-700 font-bold">
                        <a href="https://github.com/len4cf">
                            Github
                            <i className="devicon-github-original ml-2"></i>
                        </a>
                        </Button>
                    <Button className="bg-blue-800 hover:bg-blue-700 font-bold">
                        <a href="https://www.linkedin.com/in/helenacarvalhoferreira/">
                            LinkedIn
                            <i className="devicon-linkedin-plain ml-2"></i>
                        </a>
                        </Button>
                </div>
            </div>
        </div>
     );
}
 
export default Contato;