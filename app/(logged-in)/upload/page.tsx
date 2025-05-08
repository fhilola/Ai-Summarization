import { BgGradient, UploadForm, UploadHeader } from "@/app/ui/components";

export default function UploadPage() {
  return (
    <section className="min-h-screen">
      <BgGradient />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <UploadHeader />
        <UploadForm />
        
      </div>
    </section>
  );
}
