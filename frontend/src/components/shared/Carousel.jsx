import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Carousel123 = () => {
    return (
        <div className="flex justify-center items-center py-8">
            <div className="relative w-full max-w-xl">
                <Carousel className="relative">
                    <CarouselContent className="flex overflow-hidden">
                        <CarouselItem className="flex-shrink-0 w-full h-64 bg-gray-200 flex items-center justify-center text-xl font-bold">
                            123
                        </CarouselItem>
                        <CarouselItem className="flex-shrink-0 w-full h-64 bg-gray-300 flex items-center justify-center text-xl font-bold">
                            123
                        </CarouselItem>
                        <CarouselItem className="flex-shrink-0 w-full h-64 bg-gray-400 flex items-center justify-center text-xl font-bold">
                            123
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-100">
                        &lt;
                    </CarouselPrevious>
                    <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-100">
                        &gt;
                    </CarouselNext>
                </Carousel>
            </div>
        </div>
    );
};

export default Carousel123;
