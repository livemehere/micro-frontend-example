import dynamic from "next/dynamic";

const NiceButton = dynamic(() => import("ui/NiceButton"),{ ssr: false });
export default function Home() {
  return (
    <>
        <div>HI</div>
        <NiceButton text={'HI'} color={'red'}/>
    </>
  )
}
