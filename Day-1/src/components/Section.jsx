import React from "react";

const Section = () => {
  return (
    <div>
      <h1 className="text-3xl mt-10 mb-10 font-bold text-black">
        Welcome To Website
      </h1>
      <p className="text-xl mb-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, unde
        fuga. Assumenda deserunt a molestias officia ab dolorum, vero voluptas,
        reiciendis voluptatem et perspiciatis vitae cupiditate beatae sint
        libero rem eius provident ipsa iure odit ad at dignissimos? Architecto
        voluptates at sint nobis repellat repudiandae dolore incidunt veniam
        unde eius.
      </p>
      <div className="flex items-start justify-center gap-40 mb-10">
        <div className="h-70 w-70 bg-emerald-950 rounded-3xl px-10 py-10">
          <img
            className="h-50 w-50 "
            src="https://imgd.aeplcdn.com/370x208/cw/ec/38219/Mahindra-XUV300-Exterior-147500.jpg?wm=0&q=80"
            alt="img-1"
          />
        </div>
        <div className="h-70 w-70 bg-emerald-950 rounded-3xl px-10 py-10">
          <img
            className="h-50 w-50"
            src="https://auto.hindustantimes.com/cms-images/tata_sierra/images/exterior_tata-sierra_front-left-side_844x468.jpg?imwidth=640"
            alt="img-2"
          />
        </div>
        <div className="h-70 w-70 bg-emerald-950 rounded-3xl px-10 py-10">
          <img
            className="h-50 w-50"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToU4nxsh_mhWC1gcHWGm3-LV5ICjpjfZ39dg&s"
            alt="img-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
