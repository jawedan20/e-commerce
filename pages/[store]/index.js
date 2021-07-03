import { useDispatch } from "react-redux"
import Alert from "../../components/Alert"
import {sendAlert} from '../../actions/AlertActions'
//import From from '../../components/AuthSystem/Location/CreateAdress'
export const index = () => {
    
    const dispatch = useDispatch()
    
    return (
        <>
        <button onClick={() => dispatch(sendAlert("bisa",1))}>click me</button>
        <Alert />
        {/* niceeee bisa */}
        </>
    )
}

export default index
