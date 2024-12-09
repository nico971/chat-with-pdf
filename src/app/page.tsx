import { Button } from "@/components/ui/button";
import { BrainCogIcon,EyeIcon,GlobeIcon,MonitorSmartphoneIcon,ServerCogIcon,ZapIcon } from "lucide-react"
import Link from "next/link";
import Image from "next/image";
const features =[
  {
    name : "Enregistrez votre PDF",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    icon:BrainCogIcon
  },
  {
    name : "Enregistrez votre PDF1",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    icon:GlobeIcon
  },
  {
    name : "Enregistrez votre PDF2",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    icon:EyeIcon
  },
  {
    name : "Enregistrez votre PDF3",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    icon:GlobeIcon
  }
]

export default function Home() {
  return (
      <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-red-600">
        <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
          <div className="flex flex-col justify-center items-center mx-auto mx-w-7xl px-6 lg:px-8">
            <div className="mx-auto mx-w-2xl sm:text-center">
              <h2 className="text-base font—semibold leading-7 text-red-600">
                Transform Your Interactive Document Companion
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs into Interactive Conversations
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Introduction{" "}
                <span className="font-bold text-red-600">Chat With PDF</span>
                <br />
                <br />Upload your document , and our chatbot will answer your questions, summurize your document, and much more. Ideal for everyone <span className="font-bold">Chat With PDF</span>{" "}turns static documents into{" "}<span className="font-bold text-red-600">interactive conversations</span>.
              </p>
            </div>
            <Button asChild className="mt-10">
              <Link href='/dashboard'>Get Started</Link>
            </Button>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image 
              alt="App Screenshot"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2432} height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              <div aria-hidden="true" className="relative">
                <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"/>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon 
                    aria-hidden="true"
                    className="absolute top-1 left-1 h-5 w-5 text-red-600"
                  />
                  </dt>
                  
                  <dd>{feature.description}</dd>
                
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>
  );
}
