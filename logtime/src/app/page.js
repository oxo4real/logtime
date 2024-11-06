import { Pin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-no-repeat bg-center bg-cover"
	  style={{
	  backgroundImage: 'url(/images/blob.png)', // Correct path to the SVG file
	  backgroundSize: 'cover', // Make sure it covers the whole area
	  backgroundPosition: 'center', // Center the background image
	  }}>
        <div className="parent ">
          <div className="div1" >Logtime Leaderboard
		  <Pin />
		  </div>
          <div className="div2"> </div>
          <div className="div3"> </div>
          <div className="div4"> </div>
          <div className="div5"> </div>
          <div className="div6"> </div>
          <div className="div7"> </div>
          <div className="div8"> </div>
        </div>
      </div>
    </>
  );
}
