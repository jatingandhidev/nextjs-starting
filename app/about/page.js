import Link from 'next/link'

const About = () => {
  return (
    <div>
      <h1 className="text-7xl">About Page</h1>
      <Link href="/" className="text-2xl">
        home page
      </Link>
    </div>
  )
}
export default About
