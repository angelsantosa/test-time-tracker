import * as React from "react"

function TimeTrack(params) {
    return <div>
      <input type="text" placeholder="taskName" id="taskName" />
      <input type="text" placeholder="taskTime" id="taskTime" />
      <button>START</button>
      <button>STOP</button>
    </div>
}

export default TimeTrack