
import { Socket } from 'socket.io-client'
import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import Profile from './profile/Profile'
import { v4 } from 'uuid';
import ProfileRow from './ProfileRow';
import ProfileInterface, { Data } from "./ProfileInterface"

interface ProfilesInterface {
    socket: Socket,
    setLoadingState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Profiles({ socket, setLoadingState }: ProfilesInterface) {

    const [isNewProfileOpenned, handleNewProfileOpen] = useState(false)
    const [profiles, handleSetProfiles] = useState<ProfileInterface[]>()

    useEffect(() => {
        socket.emit("loadUserData", "profiles")
        setLoadingState(true)
    }, [])
    socket.on("loadedUserData-profiles", (response: ProfileInterface[]) => {
        handleSetProfiles(response)
        console.log(profiles)
        setLoadingState(false)
    })
    return (
        <div>
            <Button onClick={() => {
                handleNewProfileOpen(true)
            }} >Create new profile</Button>
            <h1>Profiles</h1>
            <ul>
                {profiles ? profiles.map((profile: ProfileInterface) => {
                    return <ProfileRow profile={profile} setLoadingState={setLoadingState} socket={socket} key={profile.id} handleSetProfiles={handleSetProfiles} />
                }) : null}
            </ul>
            {isNewProfileOpenned ? <Profile handleProfileOpen={handleNewProfileOpen} socket={socket} id={v4()} setLoadingState={setLoadingState} handleSetProfiles={handleSetProfiles} /> : null}
        </div>
    )
}