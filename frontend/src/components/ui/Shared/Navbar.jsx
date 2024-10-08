import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button'
import { Avatar } from '../avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { LogOut, User, User2, User2Icon, UserX2 } from 'lucide-react'

const Navbar = () => {
    const user = true;
    return (


        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Pharma <span className='text-[#F83002]'>Flow</span></h1>
                </div>
                <div className='flex item-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home </li>
                        <li>Log in</li>
                        <li>Sign up</li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Button variant="outline">Login</Button>
                                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6}">Sign Up</Button>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-80'>
                                    <div className='flex gap-4 space-y-2'>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>Inventory system</h4>
                                            <p className='text-sm text-muted-foreground'>Inventory system</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col my-2 text-gray-600'>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <User2 />
                                            <Button variant="link">Profile</Button>
                                        </div>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button variant="link">Logout</Button>
                                        </div>
                                    </div>

                                </PopoverContent>
                            </Popover>

                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar
