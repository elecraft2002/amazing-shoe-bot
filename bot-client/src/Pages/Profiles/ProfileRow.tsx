import React, { useState } from 'react'
import { Socket } from 'socket.io-client'
import Button from '../../components/button/Button'
import Profile from './profile/Profile'
import ProfileInterface from "./ProfileInterface"

interface ProfileRowInterface {
    profile: ProfileInterface,
    socket: Socket,
    setLoadingState: React.Dispatch<React.SetStateAction<boolean>>,
    handleSetProfiles: React.SetStateAction<any>
}
export default function ProfileRow({ profile, socket, setLoadingState, handleSetProfiles }: ProfileRowInterface) {
    const [isProfileOpenned, handleProfileOpen] = useState(false)

    console.log()
    return (
        <>
            <div>
                <h2>{profile.data.profileName}</h2>
                <Button onClick={() => { handleProfileOpen(true) }}>Edit</Button>
            </div>
            {isProfileOpenned ? <Profile id={profile.id} data={profile.data} setLoadingState={setLoadingState} socket={socket} handleProfileOpen={handleProfileOpen} handleSetProfiles={handleSetProfiles} /> : null}
        </>
    )
}
