import {useTranslation} from "react-i18next";
import {Button, Grid, Header, Segment} from "semantic-ui-react";
import React, {useMemo, useState} from "react";
import {GetVowels, LoremIpsum} from "../../utils";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {useMemoDemoCode} from "../../static";
import {SyntaxHighlightStyles} from "../../constants";

export function UseMemoDemo() {

  const [someUnrelatedState, setSomeUnrelatedState] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const {t, i18n} = useTranslation();

  const paragraphs = [...Object.values(LoremIpsum)];
  const paragraph = paragraphs[paragraphIndex];

  const grabNumberOfVowels = (p: string) => {
    let i = 0;
    while (i < 1000000000) i++;
    return GetVowels(p).length;
  }

  const incrementParagraphIndex = () => {
    setParagraphIndex(paragraphIndex + 1 == paragraphs.length ? 0 : paragraphIndex + 1);
  }

  const vowelCount = useMemo(() => grabNumberOfVowels(paragraph), [paragraph])

  return (
    <Segment style={{padding: '8em 2em'}} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={14}>
            <Header as='h3' style={{fontSize: '2em'}}>
              {t('memo.title')}
            </Header>
            <p style={{fontSize: '1.33em'}}>
              {t('memo.subtitle')}
            </p>
            <SyntaxHighlighter language="typescript" style={SyntaxHighlightStyles.vs2015}>
              {useMemoDemoCode}
            </SyntaxHighlighter>
            <Button
              style={{margin: '1em 4px 1em 0'}}
              size='big'
              color='blue'
              onClick={incrementParagraphIndex}>
              {t('memo.button')}
            </Button>
            <Button
              style={{margin: '1em 0 1em 0'}}
              size='big'
              onClick={() => setSomeUnrelatedState(someUnrelatedState + 1)}>
              {t('memo.unrelatedStateButton')}
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column floated='left' width={6}>
            <Header as='h3' style={{fontSize: '2em'}}>
              {t('memo.preValueHeader')} {vowelCount} {t('memo.postValueHeader')}
            </Header>
            <p style={{fontSize: '1.33em'}}>
              {paragraph}
            </p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as='h3' style={{fontSize: '2em'}}>
              {t('memo.unrelatedHeader')} {someUnrelatedState}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
