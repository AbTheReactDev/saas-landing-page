import clsx from "clsx";
import CheckIcon from "../assets/check.svg";

interface PricingTierInterface {
  title: string;
  features: string[];
  buttonText: string;
  monthlyPrice: number;
  popular: boolean;
  inverse: boolean;
}

const pricingTiers: PricingTierInterface[] = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container ">
        <h2 className="gradient-heading text-center">Pricing</h2>
        <p className="description py-3 max-w-[350px] mx-auto">
          Free forever. Upgrade for unlimited tasks, better security, and
          exclusive features.
        </p>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end">
          {pricingTiers.map(
            ({
              title,
              buttonText,
              features,
              inverse,
              monthlyPrice,
              popular,
            }) => (
              <div
                key={title}
                className={clsx("card", inverse && "bg-black text-white")}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-lg font-bold ${
                      inverse ? "text-white/60" : "text-black/50"
                    }`}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm rounded-xl border px-4 py-1.5 border-white/20">
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] font-medium text-transparent bg-clip-text">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline my-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>
                <button
                  className={`btn w-full mb-[30px] ${
                    inverse ? "bg-white text-black" : "btn-primary"
                  } `}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5">
                  {features.map((feature) => (
                    <li
                      className="text-sm flex items-center gap-4"
                      key={feature}
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
