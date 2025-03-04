import EventInfo from "./EventInfo"
import Tag from "./Tag"

export default function Event({ info }: { info: EventInfo }) {
  const tagComponents = info.tags.map((tag, index) => {
    return (
      <li key={index}>
        <Tag eventKind={tag} />
      </li>
    )
  })

  return (
    <div className="place-self-center bg-gradient-to-br from-blue-950 to-purple-400 w-[408px] h-min-content rounded-[50px] p-5 text-white text-[30px] font-redhat shadow-xl">
      <p>{info.md}</p>
      <p className="font-[1000]">{info.day}, {info.startTime}-{info.endTime}</p>
      <p className="italic">{info.title}</p>
      <p className="italic">{info.location}</p>
      <ul className="flex items-center justify-start flex-wrap mt-3 gap-2">
        {tagComponents}
      </ul>
    </div>
  )
}
