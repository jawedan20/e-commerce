import { useEffect } from "react"
import { useSelector } from "react-redux"
import firestore from "../services/firestore"


const message = () => {
    const user = useSelector(state => state.user.detail_user)
    useEffect(() => {
        console.log(firestore.getChannelByUser(user.id))
        
    },[])
    return (
        <>
          <div>
              user
          </div>
        </>
    )
}

export default message
