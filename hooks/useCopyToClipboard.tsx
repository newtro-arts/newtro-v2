import { useCallback, useState } from "react";

function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copyText = useCallback(async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    return setTimeout(() => setCopied(false), 1000);
  }, []);

  return { copied, copyText };
}

export default useCopyToClipboard;