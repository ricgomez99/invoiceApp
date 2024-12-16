import HomeHeader from '../../components/HomeHeader/index'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { landingCards } from '../../lib/landingCards'
import SimpleCard from '../../components/SimpleCard/index'
import { infoCardData } from '../../lib/infoCardsData'
import InfoCard from '../../components/InfoCard/index'

export default function HomeScreen() {
  const goTo = useNavigate()
  const handleClick = useCallback(() => goTo('/register'), [goTo])

  return (
    <section className="w-full flex flex-col items-center">
      <article className="flex flex-col w-full px-3 bg-[#eee] items-center">
        <HomeHeader />
        <div className="w-full flex flex-col py-10 justify-between max-w-[1366px] lg:flex-row">
          <div className="flex flex-col text-left tracking-tight lg:max-w-xl">
            <h1 className="font-lato font-extrabold text-5xl text-gray-900 py-4">
              Creating invoices has never been easier!
            </h1>
            <p className="font-lato text-[#616161] font-normal text-lg leading-8 my-4 lg:my-6">
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
            src="/illustration.png"
            alt="woman working on her invoices"
            className="mt-6 max-w-full lg:mt-0 lg:max-w-lg"
          />
        </div>
      </article>
      <article className="bg-white w-full flex flex-col px-3 items-center text-center py-6 max-w-[1366px] lg:py-10">
        <h2 className="font-lato font-extrabold text-4xl text-gray-900 max-w-md py-5">
          Manage them with confidence
        </h2>
        <p className="font-lato font-normal text-base p-2 text-[#616161] max-w-2xl lg:p-5">
          Generate invoices instantly and effortlessly. Take advantage of
          versatile options to ensure accurate data entry. Keep a detailed
          record of the products you have bought or sold, and seamlessly include
          them in your invoices.
        </p>
        <img
          src="/innovate2.png"
          alt="a man having success with his invoices"
          className="max-w-full aspect-square object-cover rounded-xl pt-5 shadow-md lg:max-w-md"
        />
      </article>
      <article className="flex flex-col px-3 py-6 w-full bg-[#eee] justify-center items-center lg:min-h-[680px] lg:py-0">
        <div className="flex flex-col justify-center gap-6 self-center w-full max-w-6xl lg:flex-row">
          {landingCards &&
            landingCards.map((card) => (
              <SimpleCard
                key={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
        </div>
      </article>
      <article className="flex flex-col bg-white px-3 w-full justify-center items-center">
        <div className="flex flex-col py-4 justify-center gap-4 lg:gap-10 lg:max-w-7xl lg:py-20">
          {infoCardData &&
            infoCardData.map((card) => (
              <InfoCard
                key={card.id}
                description={card.description}
                direction={card.direction}
                imageUrl={card.imageUrl}
                altText={card.altText}
              />
            ))}
        </div>
      </article>
    </section>
  )
}
