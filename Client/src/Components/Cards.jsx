import React from 'react';

function Cards() {
  return (
    <div class="flex justify-center">
    <div className="container BgCards flex justify-center Card bg-white border rounded-md px-4 sm:px-6 lg:px-8"> 
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <div class="group relative flex flex-col cards h-80 max-w-md p-4 min-h-64 border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2" key={index}>
              <div class="flex-grow p-4 ! pt-0 transition-opacity group-hover:opacity-0 sm:p-6 lg:p-8 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* SVG path here */}
                </svg>
                <h2 class="mt-4 text-xl font-medium sm:text-2xl text-center">Go around the world</h2>
              </div>
              <div class="absolute inset-0 flex-grow p-4 opacity-0 transition-opacity group-hover:opacity-100 sm:p-6 lg:p-8">
                <h3 class="mt-4 text-xl font-medium sm:text-2xl text-center">Go around the world</h3>
                <p class="mt-4 text-sm sm:text-base text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem omnis atque culpa repellendus.
                </p>
                <p class="mt-8 font-bold text-center">Read more</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;







