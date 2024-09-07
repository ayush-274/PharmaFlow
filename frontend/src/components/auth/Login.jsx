import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Login = () => {
    // const [input, setInput] = useState({
    //     email:"",
    //     password:"",
    //     role:""
    // });

    // const changeEventHandler=(e) =>{
    //     setInput({...input,[e.target.name]: e.target.value});
    // }

    // const submitHandler = async (e) =>{
    //     e.preventDefault();
    //     console.log(input)
    // }
    return (

        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form  className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>
                    <div className='my-2'>
                        <Label>E-Mail</Label>
                        <Input
                            type="email"
                            // value={input.email}
                            // name="email"
                            // onChange={changeEventHandler}
                            placeholder="Enter your E-Mail" />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            // value={input.password}
                            // name="password"
                            // onChange={changeEventHandler}
                            placeholder="Enter your password" />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className='flex items-center gap-4 my-5'>
                            <div className="flex items-center space-x-2">
                                <Input
                                type="radio"
                                name="role"
                                // value="manufacturer"
                                // checked={input.role === 'manufacturer'}
                                // onChange={changeEventHandler}
                                className='cursor-pointer'
                                />
                                <Label htmlFor="r1">Manufacturer</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="role"
                                // value="distributor"
                                // checked={input.role === 'distributor'}
                                // onChange={changeEventHandler}
                                className='cursor-pointer'
                                />
                                <Label htmlFor="r2">Distributor</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="role"
                                // value="chemist"
                                // checked={input.role === 'chemist'}
                                // onChange={changeEventHandler}
                                className='cursor-pointer'
                                />
                                <Label htmlFor="r3">Chemist</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <Button type="submit" className='w-full my-4'>Login</Button>
                    <span>Don't have an account? <Link to="/register" className='text-blue-600'>Register</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login