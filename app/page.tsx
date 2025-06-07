import CssIcon from "@/components/icons/css-icon";
import HtmlIcon from "@/components/icons/html-icon";
import JavascriptIcon from "@/components/icons/javascript-icon";
import NextIcon from "@/components/icons/next-icon";
import ReactIcon from "@/components/icons/react-icon";
import TypescriptIcon from "@/components/icons/typescript-icon";
import UpworkIcon from "@/components/icons/upwork-icon";
import WhatsappIcon from "@/components/icons/whatsapp-icon";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Page() {
  const accounts = [
    {
      title: "Gmail",
      url: "mailto:safisiddiqui.work@gmail.com",
      icon: Mail,
      subTitle: "safisiddiqui.work@gmail.com",
    },
    {
      title: "Github",
      url: "https://github.com/safi-siddiqui-github",
      icon: Github,
      subTitle: "safi-siddiqui-github",
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/safi-siddiqui-70377a283/",
      icon: Linkedin,
      subTitle: "safi-siddiqui-70377a283",
    },
    {
      title: "Upwork",
      url: "https://www.upwork.com/freelancers/~01d057b3173e1e2c63",
      icon: UpworkIcon,
      subTitle: "Safi S.",
    },
    {
      title: "Whatsapp",
      url: "https://wa.me/00923117737230",
      icon: WhatsappIcon,
      subTitle: "0311-7737230",
    },
  ];

  const skills = [
    {
      title: "Html 5",
      icon: HtmlIcon,
    },
    {
      title: "Css 3",
      icon: CssIcon,
    },
    {
      title: "JavaScript ES6",
      icon: JavascriptIcon,
    },
    {
      title: "TypeScript 5",
      icon: TypescriptIcon,
    },
    {
      title: "React JS/TS",
      icon: ReactIcon,
    },
    {
      title: "Next JS",
      icon: NextIcon,
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-medium">Safi Siddiqui</h1>
        <h2 className="text-lg">Full Stack Next JS Developer</h2>
      </div>

      <div className="flex flex-col gap-3 items-start">
        <p className="text-lg font-medium">Emails / Accounts</p>

        {accounts.map((each, index) => (
          <div className="flex flex-col gap-1" key={`accounts-${index}`}>
            <p>{each.title}</p>
            <a href={each.url} className="flex gap-1 items-center">
              <each.icon />
              <span>{each.subTitle}</span>
            </a>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 items-start">
        <p className="text-lg font-medium">Skills / Frameworks</p>

        {skills.map((each, index) => (
          <div className="flex gap-1 items-center" key={`skills-${index}`}>
            <each.icon />
            <p>{each.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
