import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";
import LoginViews from "@/views/auth/Login";

const LoginPage = () => {
   
    return(
        <>
            <LoginViews/>
        </>
    );
};

export default LoginPage;