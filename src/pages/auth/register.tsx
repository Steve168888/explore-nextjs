import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.css";

const RegisterPage = () => {
    const {push, query}= useRouter();
    const handlerLogin = () => {
        push("/product")
    }
    return(
        <div className={styles.register}>
            <h1>Register Page</h1>
            <button onClick={() => handlerLogin ()}>Login</button>
            <p>
                Sudah punya akun? Login <Link href={"/auth/login"}><button >disini</button></Link>
            </p>
        </div>
    );
};

export default RegisterPage;