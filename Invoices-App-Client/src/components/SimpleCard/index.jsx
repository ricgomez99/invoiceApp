export default function SimpleCard({ title, description }) {
  return (
    <div className="flex flex-col p-4 rounded-xl bg-white text-left shadow-md lg:max-w-80">
      <h4 className="font-lato font-bold text-lg text-text-gray-900 pb-3">
        {title}
      </h4>
      <p className="font-lato font-normal text-sm text-[#616161] pb-3">
        {description}
      </p>
    </div>
  )
}
