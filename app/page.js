
import Link from "next/link";

export default function Home() {
 let linkStyles = "underline text-cyan-600 hover:text-cyan-300";
 
  return (
  <main>
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <ul>
      <li><Link href="./week-2/" className={linkStyles}> Week 2 Assignment</Link></li>
      <li><Link href="./week-3/" className={linkStyles}> Week 3 Assignment</Link></li>
      <li><Link href="./week-4/functions/" className={linkStyles}> Week 4 Assignment</Link></li>
      <li><Link href="./week-4/simple-counter/" className={linkStyles}> Week 4 Assignment</Link></li>
      <li><Link href="./week-4/advanced-counter/" className={linkStyles}> Week 4 Assignment</Link></li>
    </ul>
   
    
  </main>
  
 );
}
