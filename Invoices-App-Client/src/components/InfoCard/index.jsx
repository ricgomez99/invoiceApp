export default function InfoCard({
  description,
  imageUrl,
  direction,
  altText,
}) {
  console.log(direction)
  return (
    <div
      className={`flex p-3 max-w-lg justify-around items-center rounded-xl shadow-xl gap-5 ${
        direction === 'left' ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <p className="font-lato font-normal text-sm text-[#616161]">
        {description}
      </p>
      <img
        src={imageUrl}
        alt={altText}
        className="rounded-full object-contain max-w-32 lg:max-w-40 aspect-square"
      />
    </div>
  )
}
