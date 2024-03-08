import { Link } from "react-router-dom"

function Header() {
  return (
    <>
        <Link to={"/"}><h1 className="text-5xl text-center py-2 font-bold border-b-4">Modern Walk</h1></Link>
    </>
  )
}

export default Header