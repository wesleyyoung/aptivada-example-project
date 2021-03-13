export const useMemoDemoCode = `
  const [someUnrelatedState, setSomeUnrelatedState] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);

  const paragraphs = [...Object.values(LoremIpsum)];
  const paragraph = paragraphs[paragraphIndex];

  const grabNumberOfVowels = (p: string) => {
    let i = 0;
    // Artificially increase compute time
    while (i < 1000000000) i++;
    return GetVowels(p).length;
  }

  const incrementParagraphIndex = () => {
    setParagraphIndex(paragraphIndex + 1 == paragraphs.length ? 0 : paragraphIndex + 1);
  }

  // The 'paragraph' constant is passed as a dependency, so it is only executed when
  // the value of 'paragraph' has changed, rather than on every render 
  const vowelCount = useMemo(() => grabNumberOfVowels(paragraph), [paragraph])
`;
