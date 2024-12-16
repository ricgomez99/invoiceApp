import Navbar from '../Navbar'

export default function AuthLayout({ children }) {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <article className="w-full flex flex-col items-center justify-center gap-10 lg:flex-row lg:max-w-7xl pt-8">
        {children}
      </article>
    </section>
  )
}
