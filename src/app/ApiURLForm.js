import React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ApiURLForm = ({ setApiURL }) => {
    const { register, handleSubmit, reset } = useForm()

    return (
        <form>
            <div className="flex">
                <Input
                    {...register("apiURL")}
                    placeholder='Insert your api url'
                    onBlur={(e) => setApiURL(e.target.value)}
                />
            </div>
        </form>
    )
}

export default ApiURLForm