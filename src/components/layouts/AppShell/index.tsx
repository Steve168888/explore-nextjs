import { useRouter } from "next/router";
import Navbar from "../navbar"
import path from "path";

type AppShellProps = {
    children: React.ReactNode;
}
const disableNavbar = ["/auth/login", "auth/register"];
const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    
    return(
        <main>
            {!disableNavbar.includes(pathname) && <Navbar/>}
            <Navbar/>
            {children}
            
        </main>
    );
};

export default AppShell;