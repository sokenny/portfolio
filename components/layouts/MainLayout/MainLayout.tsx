import Nav from "@/components/modules/Nav/Nav";

const MainLayout:React.FC<{children:React.ReactNode}> = ({children}) => {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}

export default MainLayout;