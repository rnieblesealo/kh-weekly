import EventKind from "./EventKind"
import EventStyle from "./EventStyle"

export default function Tag({ eventKind }: { eventKind: EventKind }) {
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

