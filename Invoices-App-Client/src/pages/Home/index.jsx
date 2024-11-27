import HomeHeader from '../../components/HomeHeader'
import { Button } from '@material-tailwind/react'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const goTo = useNavigate()
  const handleClick = useCallback(() => goTo('/register'), [goTo])

  return (
    <section className="w-full flex flex-col items-center">
      <article className="flex flex-col w-full px-3 bg-[#eee] items-center">
        <HomeHeader />
        <div className="w-full flex flex-row py-10 justify-between max-w-[1366px]">
          <div className="flex flex-col text-left tracking-tight lg:max-w-xl">
            <h1 className="font-lato font-extrabold text-5xl text-gray-900 py-4">
              Creating invoices has never been easier!
            </h1>
            <p className="font-lato text-[#616161] font-normal text-lg leading-8 my-6">
              Simplify your invoicing process with a platform designed to save
              you time and keep your business organized. Generate professional
              invoices effortlessly and take the hassle out of managing your
              finances.
            </p>
            <Button
              size="md"
              className="max-w-40 mt-3 font-lato font-semibold"
              onClick={handleClick}
            >
              Start for free
            </Button>
          </div>
          <img
            src="public/illustration.png"
            alt="woman working on her invoices"
            className="max-w-lg"
          />
        </div>
      </article>
      <article className="bg-white w-full flex flex-col px-3 items-center text-center py-10 max-w-[1366px]">
        <h2 className="font-lato font-extrabold text-4xl text-gray-900 max-w-md">
          Manage them with confidence
        </h2>
        <div></div>
      </article>
    </section>
  )
}
