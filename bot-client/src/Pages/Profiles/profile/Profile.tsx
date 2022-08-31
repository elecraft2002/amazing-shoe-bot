import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../../components/button/Button'
import Window from '../../../components/window/Window'
import "./profile.css"
import { Socket } from 'socket.io-client'
import saveData from '../../../functions/saveData'
import { Data } from "../ProfileInterface"



interface ProfileInterface {
    handleProfileOpen: React.Dispatch<React.SetStateAction<boolean>>,
    socket: Socket,
    id: string;
    data?: Data
    setLoadingState: React.Dispatch<React.SetStateAction<boolean>>
    handleSetProfiles: React.SetStateAction<any>
}

export default function Profile({ handleProfileOpen, socket, id, data, setLoadingState, handleSetProfiles }: ProfileInterface) {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => {
        handleProfileOpen(false)
        saveData(data, id, "profiles", socket, setLoadingState)
    };

    const handleRemove = () => {
        handleProfileOpen(false)
        setLoadingState(true)
        socket.emit("removeUserData", { type: "profiles", id })
    }


    return (
        <Window>
            <Button onClick={() => {
                handleProfileOpen(false)
            }}>Close</Button>
            <div >Profile</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex'>
                    <div>
                        <h2>Payment type</h2>
                        <p>Profile Name</p>
                        <input defaultValue={data?.profileName} {...register('profileName', { required: true })} placeholder={"Profile Name"} /><br />
                        <p>Phone Number</p>
                        <input defaultValue={data?.phoneNumber} {...register('phoneNumber', { required: true })} placeholder={"Phone Number"} /><br />
                        <p>Card Number</p>
                        <input defaultValue={data?.cardNumber} {...register('cardNumber', { required: true })} placeholder={"Card Number"} /><br />
                        <p>Expire Date</p>
                        <input defaultValue={data?.expireDate} {...register('expireDate', { required: true })} placeholder={"Expire Date"} /><br />
                        <p>CVV</p>
                        <input defaultValue={data?.cvv} {...register('cvv', { required: true })} placeholder={"CVV"} /><br />
                    </div>
                    <div>
                        <h2>Shipping details</h2>
                        <p>First Name</p>
                        <input defaultValue={data?.firstName} {...register('firstName', { required: true })} placeholder={"First Name"} /><br />
                        <p>Last Name</p>
                        <input defaultValue={data?.lastName} {...register('lastName', { required: true })} placeholder={"Last Name"} /><br />
                        <p>Adress1</p>
                        <input defaultValue={data?.adress1} {...register('adress1', { required: true })} placeholder={"Adress1"} /><br />
                        <p>Country</p>
                        <input defaultValue={data?.country} {...register('country', { required: true })} placeholder={"Country"} /><br />
                        <p>City</p>
                        <input defaultValue={data?.city} {...register('city', { required: true })} placeholder={"City"} /><br />
                        <p>Zip Code</p>
                        <input defaultValue={data?.zipCode} {...register('zipCode', { required: true })} placeholder={"Zip Code"} /><br />

                    </div>
                </div>
                <input type="submit" />
                <Button onClick={handleRemove}>Remove</Button>
            </form>
        </Window>
    )
}
