import "./Container.scss";
import useFetch from "../../hooks/useFetch";

import Cards from "../Cards/Cards"

export default function Container() {
  const { data } = useFetch("api/users");

  return (
    <div>
    Container
    {data && data.map((user)=>{ 
      return <Cards key={user._id} user = {user}/> 
    })}   
    </div>
  )
}
