import React, { useContext } from 'react'
import AvatarContext from '../context/AvatarContext'

const UserAvatar = () => {

  // _______________If we pass single object in the provider 
  // const {name, image} = useContext(AvatarContext)

  //________________Now if we pass nested object we need to destructure it 2 times
  const {user} = useContext(AvatarContext)
  const {name, image} = user


  return (

    <div>
        <h1>UserAvatar</h1>
        <img  className="img" src={image} alt="photo"/>
        <h2>{name}</h2> 
    </div>
  )
}

export default UserAvatar