import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  return (
    <AwesomeSlider className="w-full p-0 m-0 h-40">
      <div className="bg-red-600  h-full">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta!
        Accusamus repudiandae voluptates ratione ipsam corrupti aliquid, ea rem
        maiores numquam repellendus asperiores! Ut ad odio quidem aliquam nam
        est.
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta!
        Accusamus repudiandae voluptates ratione ipsam corrupti aliquid, ea rem
        maiores numquam repellendus asperiores! Ut ad odio quidem aliquam nam
        est.
      </div>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, soluta!
        Accusamus repudiandae voluptates ratione ipsam corrupti aliquid, ea rem
        maiores numquam repellendus asperiores! Ut ad odio quidem aliquam nam
        est.
      </div>
    </AwesomeSlider>
  );
};

export default Slider;
