function EventTag() {
  return (
    <span className="font-extrabold text-[20px] bg-red-500 rounded-full p-1 pl-4 pr-4">
      Tag
    </span>
  )
}

function Event() {
  return (
    <div className="place-self-center bg-purple-900 w-[408px] h-min-content rounded-[50px] p-5 text-white text-[30px] font-redhat">
      <p>02-17</p>
      <p className="font-[1000]">MON, 5:30-6:30PM:</p>
      <p className="italic">Operations Meeting</p>
      <p className="italic">ENG1 0327</p>
      <div className="flex items-center justify-start flex-wrap">
        <EventTag />
        <EventTag />
        <EventTag />
        <EventTag />
        <EventTag />
        <EventTag />
      </div>
    </div>
  )
}

function App() {


  return (
    <>
      <div className="bg-purple-800 w-[1080px] h-[1350px] p-15">
        <div className="mb-20">
          <h1 className="text-6xl font-redhat text-white mb-5">EVENTS THIS<br />WEEK</h1>
          <h2 className="text-4xl font-redhat text-white mb-5">WEEK 02/17-02/22</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 w-min-content">
          <Event />
          <Event />
          <Event />
        </div>
        <h2 className="text-4xl font-redhat text-white mb-5">We can't wait to see you there!</h2>
      </div>
    </>
  )
}

export default App
