import { BreadcrumbWithCustomSeparator } from "@/components/common/bread-crumb";
import ContactForm from "@/components/form/contact/contact-form";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exclusion - Contact Us",
  description: "Every way you can reach us",
  // keywords to help google find
  keywords: ["gaming", "monitors", "furniture", "watches", "cart"],

  robots: {
    index: true,
    follow: true,
    // nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
};

const ContactPage = async () => {
  return (
    <div className="py-6 md:py-20 px-2">
      <BreadcrumbWithCustomSeparator />

      <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-6 md:mt-10 h-auto ">
        <div className="shadow rounded-sm px-6 py-8">
          <div className="grid gap-3">
            <div className="flex  items-center gap-3">
              <span className="w-10 h-10 rounded-full flex items-center justify-center bg-button-background">
                <Phone className="text-white" />
              </span>
              <p className="font-medium">Call To Us</p>
            </div>
            <p className="text-sm">We are available 24/7 , 7 days a week.</p>

            <p className="text-sm">Phone: +8801611112222</p>

            <Separator className="my-3 bg-text-secondary" />

            <div className="grid gap-3">
              <div className="flex  items-center gap-3">
                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-button-background">
                  <Mail className="text-white" />
                </span>
                <p className="font-medium">Write To US</p>
              </div>

              <p className="text-sm wrap-break-word">
                Fill out our form and we will contact you within 24 hours
              </p>
              <p className="text-sm wrap-break-word">
                Emails:customer@exclusive.com
              </p>
              <p className="text-sm wrap-break-word">
                Emails:support@exclusive.com
              </p>
            </div>
          </div>
        </div>

        <div className="shadow rounded-sm p-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
