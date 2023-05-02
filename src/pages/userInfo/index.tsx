import React , {useEffect , useState , useContext} from 'react'
import { userIdCon } from '@/context/userIdContext'
import axios from 'axios'
export default function Index() {
    const {userId} = useContext(userIdCon)
    const [userData, setUserData] = useState({})
    useEffect(() => {
        getUserData()
    },[])
    const getUserData = () => {
        axios.get(`http://localhost:8000/api/user/${userId}`).then((res) => setUserData(res.data.result))
    }
    console.log(userData);
    
  return (
    <div>Index</div>
  )
}
