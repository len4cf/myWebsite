import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const About = () => {
    return ( 
        <div className="lg:m-28 m-4">
            <Box marginBottom={4} display={'flex'} flexDirection={'column'} gap={2}>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">Olá, sou a Helena ✌️</h1>
                <p>Meu nome é Helena Carvalho Ferreira, eu sou uma Engenheira de Software em formação em busca de me tornar uma desenvolvedora full-stack.</p>
            </Box>
            <Box  display={'flex'} flexDirection={'column'} gap={1}>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">Ferramentas</h1>
                <p className="leading-7 [&:not(:first-child)]">Minha stack principal inclui React, TailwindCSS & Typescript (React + Nextjs no front-end e Express/Node.js no back-end).</p>
                <p>Algumas outras tecnologias que possuo conhecimento: </p>
            </Box>

            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={4} rowGap={3}>
                    <Grid xs={4} className='flex items-center gap-2'>
                             <i className="devicon-react-original lg:text-3xl text-base"></i>
                             <p className="text-base">React</p>
                    </Grid>
                    <Grid xs={4} className='flex items-center gap-2'>
                        <i className="devicon-javascript-plain lg:text-3xl text-base"></i>
                        <p className="text-base">Javascript</p>
                    </Grid>
                    <Grid xs={4} className='flex items-center gap-2'>
                        <i className="devicon-typescript-plain lg:text-3xl text-base"></i>
                        <p className="text-base">Typescript</p>
                    </Grid>
                    <Grid xs={4} className='flex items-center gap-2'>
                        <i className="devicon-tailwindcss-original lg:text-3xl text-base"></i>
                        <p className="text-base">TailwindCSS</p>
                    </Grid>
                    <Grid xs={4} className='flex items-center gap-2'>
                        <i className="devicon-nodejs-plain-wordmark lg:text-3xl text-base"></i>
                        <p className="text-base">NodeJS</p>
                    </Grid>
                    <Grid xs={4} className='flex items-center gap-2'>
                        <i className="devicon-css3-plain lg:text-3xl text-base"></i>
                        <p className="text-base">CSS3</p>
                    </Grid>
                    <Grid xs={4} className='flex items-center gap-2'>
                        <i className="devicon-express-original lg:text-3xl text-base"></i>
                        <p className="text-base">Express</p>
                    </Grid>
                    <Grid xs={4} className='flex items-center gap-2'>
                        <i className="devicon-postman-plain lg:text-3xl text-base"></i>
                        <p className="text-base">Postman</p>
                    </Grid>
                    <Grid xs={4} className='flex items-center gap-2'>
                        <i className="devicon-postman-plain lg:text-3xl text-base"></i>
                        <p className="text-base">Postman</p>
                    </Grid>
                    <Grid xs={4} className='flex items-center gap-2'>
                        <i className="devicon-mongodb-plain lg:text-3xl text-base"></i>
                        <p className="text-base">MongoDB</p>
                    </Grid>
                    <Grid xs={4} className='flex items-center gap-2'>
                        <i className="devicon-github-original lg:text-3xl text-base"></i>
                        <p className="text-base">Github</p>
                    </Grid>
                    <Grid xs={4} className='flex items-center gap-2'>
                        <i className="devicon-git-plain lg:text-3xl text-base"></i>
                        <p className="text-base">Git</p>
                    </Grid>
                </Grid>
            </Box>
        </div>
     );
}
 
export default About;