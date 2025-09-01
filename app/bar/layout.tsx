import Image from "next/image";
import React, { ReactNode } from "react";

const BarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="https://placehold.co/600x400"
            alt="Drink at the bar"
            width={600}
            height={400}
            className="max-w-full lg:max-w-sm rounded-lg shadow-2xl"
            unoptimized
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to our Bar</h1>
            <p className="py-6 ">
              Feel free to order as many drinks as you like
            </p>
            <button className="btn btn-primary">Let's get some</button>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default BarLayout;
