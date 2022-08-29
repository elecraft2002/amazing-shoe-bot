import React from 'react'
import Window from '../window/Window'
import "./shoeDetail.css"
import { useForm } from 'react-hook-form';
import { Convert, Object } from "../../Pages/shoes/upcoming"
import Button from '../button/Button';

interface Detail {
    handleShoeBuy: React.Dispatch<React.SetStateAction<boolean>>,
    shoe?: Object
}

export default function ShoeDetail({ handleShoeBuy, shoe }: Detail) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <Window>
            <Button onClick={() => { handleShoeBuy(false) }}>Close</Button>
            <h2>{shoe?.publishedContent.properties.title}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>First</p>
                <input {...register('firstName')} />
                <p>First</p>
                <input {...register('lastName', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
                <input {...register('age', { pattern: /\d+/ })} />
                {errors.age && <p>Please enter number for age.</p>}
                <input type="submit" />
            </form>
        </Window>
    )
}
