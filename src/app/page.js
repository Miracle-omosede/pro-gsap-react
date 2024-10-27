import { useGSAP } from "@gsap/react";

export default function Home() {
  useGSAP (() => 
    {
      gsap.to("#blue-box", {
        x: 250
      })
    }, [])
  return (
    <div className="">
      <div id="blue-box" className="bg-blue-800 h-32 w-32 rounded-lg"></div>
    </div>
  );
}
