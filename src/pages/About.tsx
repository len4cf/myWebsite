import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';


const About = () => {

    const dataAtual = new Date();
    const dataJulho2023 = new Date(2023, 6);
    const diferencaMeses = (dataAtual.getFullYear() - dataJulho2023.getFullYear()) * 12 +
      (dataAtual.getMonth() - dataJulho2023.getMonth());


    return ( 
        <div className='lg:mx-[20%] mx-[10%] lg:mt-[4%] mt-[10%] h-[150vh]'>
           
                <h1 className='text-4xl font-bold lg:mb-0 mb-[10%]'>Olá, sou a Helena ✌</h1>
                <div className='flex lg:flex-row flex-col justify-between items-center gap-10'>
                    <div className='lg:w-[600px] text-left flex flex-col gap-4 font-thin'>
                        <p>Meu nome é <span className='border-b border-zinc-300'>Helena Carvalho</span></p>
                        <p>Sou uma programadora Front-end com 1 ano de experiência profissional e uma paixão avassaladora pela tecnologia!</p>
                        <p>Ao longo da minha trajetória como entusiasta e programadora front-end, adquiri experiência em metodologias ágeis como Scrum. Estou disponível para contribuir com meus conhecimentos em JS, TS, React, Next.js e Node.js para a sua equipe.</p>
                        <p>Além disso, estou ativamente aprimorando minhas habilidades e expondo elas no meu <span>Github</span></p>
                    </div>
                    <img src="https://assets-global.website-files.com/64c73d04a946980a4476537e/64d454e5665c7e4ace18d43d_Meela%20Pantalones.svg" alt="Menina sentada refletindo" className='lg:w-[500px] w-[200px]' />
                </div>

                <h1 className='text-4xl font-bold'>Carreira</h1>
                <div className='font-thin mt-4'>
                    <h2 className='font-bold'>Estágiaria de Desenvolvimento de Software</h2>
                    <p className='mt-5 mb-2'><span className='border-b'>GlobalSys Soluções em TI</span> • Remoto </p>
                    <p>Jul 2023 - Momento • {diferencaMeses} meses </p>
                    <div className='mt-4'>
                        <p>•Realizar o desenvolvimento de softwares e a manunteção em componentes já
                        existentes utilizando ReactJS</p>
                        <p>• Corrigir bugs no código</p>
                        <p>• Utilizar as ferramentas styled-components e TailwindCSS para criar estilo de forma
                        mais eficiente e flexível</p>
                        <p>• Contato com a metodologia ágil SCRUM.</p>
                        <p>• Auxiliar membros do time de desenvolvimento.</p>
                        <p>• Formular novas soluções e refatoração de páginas existentes</p>
                        <p>• Mantive-me atualizada com as tendências e tecnologias da indústria através de
                        aprendizado contínuo.</p>
                    </div>
                </div>

                <div className='mt-[5%]'>
                    <h1 className='text-4xl font-bold'>Habilidades</h1>
                    <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 2, md: 3 }} padding={4} rowGap={4}>
                        <Grid xs={5} sm={4} className='flex items-center gap-2'>
                                <i className="devicon-react-original lg:text-3xl text-base"></i>
                                <p className="text-base">React</p>
                        </Grid>
                        <Grid xs={5} sm={4} className='flex items-center gap-2'>
                            <i className="devicon-javascript-plain lg:text-3xl text-base"></i>
                            <p className="text-base">Javascript</p>
                        </Grid>
                        <Grid xs={5} sm={4} className='flex items-center gap-2'>
                            <i className="devicon-typescript-plain lg:text-3xl text-base"></i>
                            <p className="text-base">Typescript</p>
                        </Grid>
                        <Grid xs={5} sm={4} className='flex items-center gap-2'>
                            <i className="devicon-tailwindcss-original lg:text-3xl text-base"></i>
                            <p className="text-base">TailwindCSS</p>
                        </Grid>
                        <Grid xs={5} sm={4} className='flex items-center gap-2'>
                            <i className="devicon-nodejs-plain-wordmark lg:text-3xl text-base"></i>
                            <p className="text-base">NodeJS</p>
                        </Grid>
                        <Grid xs={5} sm={4} className='flex items-center gap-2'>
                            <i className="devicon-css3-plain lg:text-3xl text-base"></i>
                            <p className="text-base">CSS3</p>
                        </Grid>
                        <Grid xs={5} sm={4} className='flex items-center gap-2'>
                            <i className="devicon-express-original lg:text-3xl text-base"></i>
                            <p className="text-base">Express</p>
                        </Grid>
                        <Grid xs={5} sm={4} className='flex items-center gap-2'>
                            <i className="devicon-postman-plain lg:text-3xl text-base"></i>
                            <p className="text-base">Postman</p>
                        </Grid>
                        <Grid xs={5} sm={4} className='flex items-center gap-2'>
                            <i className="devicon-postman-plain lg:text-3xl text-base"></i>
                            <p className="text-base">Postman</p>
                        </Grid>
                        <Grid xs={5} sm={4} className='flex items-center gap-2'>
                            <i className="devicon-mongodb-plain lg:text-3xl text-base"></i>
                            <p className="text-base">MongoDB</p>
                        </Grid>
                        <Grid xs={5} sm={4} className='flex items-center gap-2'>
                            <i className="devicon-github-original lg:text-3xl text-base"></i>
                            <p className="text-base">Github</p>
                        </Grid>
                        <Grid xs={5} sm={4} className='flex items-center gap-2'>
                            <i className="devicon-git-plain lg:text-3xl text-base"></i>
                            <p className="text-base">Git</p>
                        </Grid>
                    </Grid>
                </Box>
            </div>

        </div>
     );
}
 
export default About;