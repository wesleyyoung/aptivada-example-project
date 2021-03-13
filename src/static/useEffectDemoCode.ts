
export const useEffectDemoCode = `
  const count = useCountStore(state => state.count);
  const increment = useCountStore(state => state.increment);

  useEffect(() => {
    toast({
      title: t('effectHook.toastTitle'),
      description:
        \`This toast was generated on click number \${count}\`,
      time: 750
    });
  })
`;
