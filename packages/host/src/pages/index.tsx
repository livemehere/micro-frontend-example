import dynamic from "next/dynamic";

const NiceButton = dynamic(() => import("ui/NiceButton"),{ ssr: false });
const NiceInput = dynamic(() => import("ui/NiceInput"),{ ssr: false });

export default function Home() {
  return (
    <>
        <div>HI</div>
        <NiceButton text={'HI'} color={'red'}/>
        <NiceInput/>
    </>
  )
}
