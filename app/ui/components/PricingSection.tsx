import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { MotionDiv, MotionSection } from "./MotionWrapper";
import { containerVariants, itemVariants } from "@/utils/constant";

interface IPlan {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
}

const plans: IPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    description: "Perfect for occasional use",
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    paymentLink: "",
    priceId: "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    paymentLink: "",
    priceId: "",
  },
];
const listVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

const PlanItem: FC<IPlan> = ({
  name,
  id,
  price,
  description,
  items,
  paymentLink,
}) => {
  return (
    <MotionDiv
      variants={listVariants}
      whileHover={{ scale: 1.02 }}
      className="relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300"
    >
      <div
        className={cn(
          "relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl",
          id === "pro" && "border-violet-500 gap-5 border-2"
        )}
      >
        <MotionDiv
          variants={listVariants}
          className="flex justify-between items-center gap-4"
        >
          <div>
            <p className="font-bold text-lg lg:text-xl capitalize">{name}</p>
            <p className="text-base-content/80 mt-2">{description}</p>
          </div>
        </MotionDiv>
        <div className="flex gap-2">
          <p className="text-5xl font-extrabold tracking-tight">{price}</p>
          <div className="flex flex-col justify-end mb-[4px]">
            <p className="text-xs uppercase font-semibold">USD</p>
            <p className="text-xs">/month</p>
          </div>
        </div>
        <MotionDiv
          variants={listVariants}
          className="space-y-2.5 leading-relaxed text-base flex-1"
        >
          {items.map((item, index) => {
            return (
              <li key={index} className="flex items-center gap-2">
                <CheckIcon size={16} />
                <span>{item}</span>
              </li>
            );
          })}
        </MotionDiv>
        <MotionDiv
          variants={listVariants}
          className="space-y-2 flex justify-center w-full "
        >
          <Link
            href={paymentLink}
            className={cn(
              "w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-violet-800 to-violet-500 hover:from-violet-500 hover:to-violet-800 text-white py-2 border-2",
              id === "pro"
                ? "border-violet-900"
                : "border-violet-100 from-violet-500 to-violet-400"
            )}
          >
            Buy Now <ArrowRight size={18} />
          </Link>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export function PricingSection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative overflow-hidden"
      id="pricing"
    >
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <MotionDiv
          variants={itemVariants}
          className="flex items-center justify-center w-full pb-12"
        >
          <h2 className="uppercase font-bold text-xl mb-8 text-violet-500">
            Pricing
          </h2>
        </MotionDiv>
        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {plans.map((plan, index) => {
            return <PlanItem key={index} {...plan} />;
          })}
        </div>
      </div>
    </MotionSection>
  );
}
