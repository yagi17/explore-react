import { useEffect, useState } from "react"
import "./friends.css"
import Friend from "./friend"
import "./friend"
export default function Friends (){

    const [friends, setFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setFriends(data))
    }
    )

    return (
        <div className="box">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend ={friend}> </Friend> )
                
            }
        </div>
    )
}

/**
 * 1. state to hold data
 * use effect with dependancy array
 * use fetch to load data
 * set loaded data to the state
 */