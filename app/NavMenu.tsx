import Link from "next/link";

export default function NavMenu() {
    return(
      <nav className="nav">
        <h1 className="nav-header"><Link href={'/'}>Data Structure</Link></h1>
        <ul className="nav-menu">
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/summary'}>Summary</Link>
            </li>
            <li>
                <Link href={'/algorithm'}>Algorithms</Link>
            </li>
            <li>
                <Link href={'/sample'}>Code Sample</Link>
            </li>
            <li>
                <Link href={'/interview'}>Interview Questions</Link>
            </li>
        </ul>
      </nav>  
    );
}