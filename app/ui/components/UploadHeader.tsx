import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function UploadHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-violet-200 via-violet-500 to-violet-800 animate-gradient-x group">
        <Badge
          variant={"secondary"}
          className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-violet-50 group-hover:cursor-pointer transition-colors"
        >
          <Sparkles className="!h-6 !w-6 mr-2 text-violet-600 animate-pulse" />
          <p className="text-base text-violet-600">
            AI-Powered Contenct Creation
          </p>
        </Badge>
      </div>
      <div className="capitalize text-3xl sm:text-4xl font-bold text-gray-900 ">
        Start uploading{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">your PDFs</span>
          <span
            className="absolute inset-0 bg-violet-200/50 -rotate-2 rounded-lg transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>
        <div className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">
          <p>Upload your PDF and let our AI do the magic! ✨</p>
        </div>
      </div>
    </div>
  );
}
