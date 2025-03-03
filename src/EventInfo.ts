import EventKind from "./EventKind"

type EventInfo = {
  md: string,
  day: string,
  startTime: string,
  endTime: string,
  title: string,
  location: string,
  tags: EventKind[]
}

export default EventInfo
