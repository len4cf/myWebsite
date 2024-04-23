const PageLayout = ({children}) => {
    return ( 
        <div className=" h-full max-w-[100vw] flex flex-col  min-h-screen bg-zinc-950">
            {children}
        </div>
     );
}
 
export default PageLayout;