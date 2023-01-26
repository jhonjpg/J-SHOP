import { Navigate, Outlet } from "react-router"


const ProtetedRoutes = ({user, children, redirectTo="login"}) => {

    if(!user){

        return <Navigate to={redirectTo}/>



    }


  return <Outlet/>
}

export default ProtetedRoutes