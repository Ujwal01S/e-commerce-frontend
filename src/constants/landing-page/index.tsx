import { ComputerSVG, PhoneSVG, WatchSVG } from "@/svgs/landing-page";
import { Camera, Gamepad, Headphones } from "lucide-react";

interface ICategoryProps {
  title: string;
  icon: React.ReactNode;
}

export const categoryCarouselData: ICategoryProps[] = [
  { title: "Phones", icon: <PhoneSVG /> },
  { title: "Computers", icon: <ComputerSVG /> },
  { title: "SmartWatch", icon: <WatchSVG /> },
  {
    title: "Camera",
    icon: (
      <Camera
        strokeWidth={1}
        width={54}
        height={54}
      />
    ),
  },
  {
    title: "HeadPhones",
    icon: (
      <Headphones
        strokeWidth={1}
        width={54}
        height={54}
      />
    ),
  },
  {
    title: "Gaming",
    icon: (
      <Gamepad
        strokeWidth={1}
        width={54}
        height={54}
      />
    ),
  },
];
