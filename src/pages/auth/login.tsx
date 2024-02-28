import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const LoginPage = () => {
    const {push, query}= useRouter();
    const handlerLogin = () => {
        push("/product")
    }
    return(
        <div className={styles.login}>
            <h1>Login Page</h1>
            <button onClick={() => handlerLogin ()}>Login</button>
            <p> 
                Belum punya akun? Registrasi <Link href={"/auth/register"}><button >disini</button></Link>
            </p>
        </div>
    );
};

export default LoginPage;