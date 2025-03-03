import EventInfo from "./EventInfo"
import EventKind from "./EventKind"

const events: EventInfo[] = [
  {
    md: "02-17",
    day: "MON",
    startTime: "5:30PM",
    endTime: "6:30PM",
    title: "Operations Meeting",
    location: "ENG1 0327",
    tags: [EventKind.OPS]
  },
  {
    md: "02-18",
    day: "TUE",
    startTime: "5:30PM",
    endTime: "6:30PM",
    title: "Operations Meeting",
    location: "ENG1 0327",
    tags: [EventKind.Social, EventKind.LowCap]
  },
  {
    md: "02-19",
    day: "WED",
    startTime: "5:30PM",
    endTime: "6:30PM",
    title: "Bazingaaa!",
    location: "yo mama hou5",
    tags: [
      EventKind.Social,
      EventKind.LowCap,
      EventKind.GenBodyMeeting,
      EventKind.ProjDemoDay,
      EventKind.ClassSupport
    ]
  }
]

export default events
