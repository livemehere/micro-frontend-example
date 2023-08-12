interface Props {
    text: string;
    color: string;
}
export default function NiceButton({text, color}: Props){
    return <button style={{color}}>{text}</button>
}