import Image from "next/image"
import Link from "next/link"
const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 max-w-fit-content cursor-pointer">
        <Image src="/vercel.svg" alt="logo" width={30} height={30} />
        <span className="font-semibold text-2xl text-purple-400">Photo Feed</span>
    </Link>
  )
}

export default Logo