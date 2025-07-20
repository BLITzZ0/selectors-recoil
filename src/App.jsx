import {RecoilRoot, useRecoilValue, useRecoilState} from "recoil" 
import { jobatom, messagatom, networkatom, notifiactionatom } from "./atoms"
import { totalNotificationSelector } from "./atoms"
// import { useMemo } from "react"
function App(){
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp() {
  const networkNotification = useRecoilValue(networkatom)
  const messagenotification =useRecoilValue(messagatom)
  const totalNotifications = useRecoilValue(notifiactionatom)
  const [jobNotification] = useRecoilState(jobatom)
  const total_Notification_count = useRecoilValue(totalNotificationSelector)
  // UseMemo is one of the way
  // const all = useMemo(()=>{
  //   return networkNotification + messagenotification + totalNotifications + jobNotification
  // },[networkNotification,messagenotification, totalNotifications, jobNotification])

  //we can also use selectors

  return (
    <div>
      <button>Home</button>
      <button>My Network({networkNotification >= 100 ? "99+" : networkNotification})</button>
      <button>Job({jobNotification>=100? "99+":jobNotification})</button>
      <button>Messaging({messagenotification>=100? "99+":messagenotification})</button>
      <button>Notifications({totalNotifications>=100 ? "99+" : totalNotifications})</button>
      <button>Me({total_Notification_count})</button>
    </div>
  )
}


export default App
