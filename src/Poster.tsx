import Event from "./Event"
import events from "./events"

export default function Poster() {
  const displayedEvents = events.map((info, index) => {
    return (
      <li key={index}>
        <Event info={info} />
      </li>
    )
  })

  return (
    <div className="bg-gradient-to-br from-blue-950 to-purple-400 w-[1080px] h-[1350px] relative">
      <img
        src="tech.svg"
        width="400"
        className="absolute left-15 scale-130 rotate-90 brightness-0 invert opacity-100 hue-rotate-[0] hidden"
        style={{ textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
      />
      <div className="p-15 z-[999] relative">
        <div className="mb-20">
          <h1
            className="text-7xl font-redhat text-white mb-5"
            style={{ textShadow: "0px 0px 10px rgba(255, 255, 255, 0.9)" }}
          >
            EVENTS THIS<br />WEEK
          </h1>
          <h2 className="text-5xl font-redhat text-purple-200 mb-5">WEEK 02/17-02/22</h2>
        </div>
        <ul className="grid grid-cols-2 gap-8 w-min-content">
          {displayedEvents}
        </ul>
      </div>
      <div className="mb-5 absolute bottom-10 right-15 flex items-end justify-center flex-col">
        <h2 className="text-4xl font-redhat text-white text-right font-extrabold italic">We can't wait to see <br /> you there!</h2>
        <div className="w-[30%] border-2 border-white mt-5" />
      </div>
    </div>
  )
}
