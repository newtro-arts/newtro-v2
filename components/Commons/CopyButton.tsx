import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { FaRegCopy } from "react-icons/fa";

interface Props {
  className?: string;
  text: string;
  iconSize?: number;
}

function CopyButton({ text, className, iconSize }: Props) {
  const { copied, copyText } = useCopyToClipboard();

  const copyTextToClipboard = () => copyText(text);

  return (
    <>
      <button className={`flex items-center justify-center gap-2 ${className}`} onClick={copyTextToClipboard}>
        <span className='truncate'>{text}</span>
        <FaRegCopy size={iconSize} className="shrink-0" />
      </button>
      {copied && <span className="fixed z-10 right-3 bottom-3 px-6 py-3 bg-fifth-purple">Copied!</span>}
    </>
  )
}

export default CopyButton;