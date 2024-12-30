import Image from "next/image";
import ProductImage from "../assets/product-image.png";
import PyramidImage from "../assets/pyramid.png";
import TubeImage from "../assets/tube.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container text-center">
        <div className="max-w-[540px] mx-auto">
          <div className="tag">Boost your productivity</div>
          <h2 className="gradient-heading  py-3">
            {" "}
            A more effective way to track progress
          </h2>
          <p className="description mb-2">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="Product Image" />
          <Image
            src={PyramidImage}
            alt="Pyramid Image"
            className="absolute -top-32 -right-36 hidden md:block"
            height={262}
            width={262}
          />
          <Image
            src={TubeImage}
            alt="Tube Image"
            className="absolute bottom-10 -left-36 hidden md:block"
            height={252}
            width={252}
          />
        </div>
      </div>
    </section>
  );
};
