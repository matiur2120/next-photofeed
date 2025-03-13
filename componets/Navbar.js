import Logo from "./Logo"

export const Navbar = () => {
  return (
    <nav className="bg-gray-500 border-b border-b-gray-200 py-4">
       <div className="container mx-auto flex justify-between items-center">
       <Logo />
       </div>
    </nav>
  )
}
