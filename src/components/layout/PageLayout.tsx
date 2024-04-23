const PageLayout = ({children}) => {
    return ( 
        <div className=" h-full max-w-[100vw] flex flex-col  min-h-screen pt-10 bg-zinc-950">
            {children}
        </div>
     );
}
 
export default PageLayout;