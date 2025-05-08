import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionH2, MotionP, MotionSection } from "./MotionWrapper";
import { containerVariants, itemVariants } from "@/utils/constant";

const buttonVariants = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};

export function CTASection() {
  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-50 py-12"
    >
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="space-y-2">
            <MotionH2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Ready to Save Hours of Reading Time?
            </MotionH2>
            <MotionP
              variants={itemVariants}
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              Transform lengthy documents into clear, actionable insights with
              our AI-powered summarizer.
            </MotionP>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <MotionDiv variants={itemVariants} whileHover={buttonVariants}>
              <Button
                size={"lg"}
                variant={"link"}
                className="w-full min-[400px]:w-auto bg-linear-to-r from-slate-900 to-violet-500 hover:from-violet-500 hover:to-slate-900 hover:text-white hover:no-underline text-white transition-colors duration-300"
              >
                <Link
                  href={"/#pricing"}
                  className="flex items-center justify-center"
                >
                  Get Started{" "}
                  <ArrowRight className="w-4 h-4 ml-2 animate-pulse" />
                </Link>
              </Button>
            </MotionDiv>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
