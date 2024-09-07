import React from 'react';
import { Button } from "@/components/ui/button"; // Adjust the path according to your setup
import { cn } from "@/lib/utils"; // Utility function for conditional classes

const HeroSection = () => {
    return (
        <section className="relative text-gray-800 py-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://www.acctrue.com/upload/cn/image/2022-12/col57/1669967897589.jpg"
                    alt="PharmaFlow"
                    className="object-cover w-full h-full absolute top-0 left-0"
                />
            </div>
            <div className="relative z-10 container mx-auto flex flex-col items-center px-4 text-center md:flex-row md:text-left">
                {/* Left Column: Content */}
                <div className="flex flex-col md:w-3/5 lg:w-1/2 p-8">
                    <h1 className="text-4xl font-bold leading-tight mb-4 text-black">
                        Welcome to Pharma<span className='text-green-600'>Flow</span>
                    </h1>
                    <p className="text-lg mb-8 text-black">
                        Streamlining the pharmaceutical supply chain for better efficiency, safety, and reliability. Join us to transform the way medicines reach those who need them.
                    </p>
                    <div className="flex flex-col md:flex-row md:justify-start space-y-4 md:space-x-4 md:space-y-0">
                        <Button className={cn("bg-green-600 hover:bg-green-700 text-white")}>
                            Get Started
                        </Button>
                        <Button variant="outline" className={cn("border-green-600 text-green-600 hover:bg-green-100")}>
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;