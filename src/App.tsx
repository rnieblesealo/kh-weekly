import EventKind from "./EventKind"
import EventStyle from "./EventStyle"
import EventInfo from "./EventInfo"

import events from "./events"

function Tag({ eventKind }: { eventKind: EventKind }) {
  const styles: Record<EventKind, EventStyle> = {
    // NOTE: need [] because EventTag.XXX directly translates to an object
    // objects CANNOT be keys; only strings/symbols
    // so we grab the value of the enum by doing []

    [EventKind.HelloWorld]: { styleStr: "bg-[#5271ff]", fullName: "Hello World" },
    [EventKind.ClassSupport]: { styleStr: "bg-[#7ed957]", fullName: "Class Support" },
    [EventKind.GenBodyMeeting]: { styleStr: "bg-gradient-to-r from-[#ffde59] to-[#ff914d]", fullName: "General Body Meeting" },
    [EventKind.Social]: { styleStr: "bg-[#cb6ce6]", fullName: "Social" },
    [EventKind.TechExp]: { styleStr: "bg-[#dd89bc]", fullName: "Tech Exploration" },
    [EventKind.Sponsorship]: { styleStr: "bg-[#8c52ff]", fullName: "Sponsorship" },
    [EventKind.ProjectLaunch]: { styleStr: "bg-[#64c3ff]", fullName: "Project Launch" },
    [EventKind.Elections]: { styleStr: "bg-gradient-to-r from-[#ff3131] to-[#ff914d]", fullName: "Elections" },
    [EventKind.ProjDemoDay]: { styleStr: "bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9]", fullName: "Project Demo Day" },
    [EventKind.OPS]: { styleStr: "bg-gradient-to-r from-[#ff66c4] to-[#ffde59]", fullName: "Operations" },
    [EventKind.LowCap]: { styleStr: "bg-[#ff3131]", fullName: "Low Capacity" },
  }

  const style = styles[eventKind]

  // NOTE: z-index only works on explicitly positioned elements!

  return (
    <div className={`font-extrabold text-[20px] rounded-full p-1 pl-4 pr-4 relative overflow-hidden ${style.styleStr}`}>
      <div className="top-0 right-0 absolute bg-black w-full h-full opacity-20 z-20" />
      <span className="relative z-20">{style.fullName}</span>
    </div>
  )
}


function Event({ info }: { info: EventInfo }) {
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


function App() {
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

export default App
