import { SplashLogo } from "@/components/static/SplashLogo";

export default function Loader() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="grid h-screen w-screen place-items-center"><div className="h-1/4 w-1/3"><SplashLogo /></div></div>;
  }