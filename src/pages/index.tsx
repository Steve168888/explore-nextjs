
import { Inter } from "next/font/google";
import Link from "next/link";




export default function Home() {
  return (
<div>
        <h1>hello world</h1>
       
       <Link href={"/auth/login"}><button >login</button></Link>
       <Link href={"/auth/register"}><button>register</button></Link>
        
</div>
  );
}
