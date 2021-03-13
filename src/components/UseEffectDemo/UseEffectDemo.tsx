import React, {useEffect} from "react";
import {Grid, Header, Segment, Button} from "semantic-ui-react";
import './UseEffectDemo.css';
import {SemanticToastContainer, toast} from "react-semantic-toasts";
import {useTranslation} from "react-i18next";
import {useCountStore} from "../../state";
import {SyntaxHighlightStyles} from "../../constants";
import {useEffectDemoCode} from "../../static";
import SyntaxHighlighter from "react-syntax-highlighter";

export function UseEffectDemo() {

  const count = useCountStore(state => state.count);
  const increment = useCountStore(state => state.increment);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    toast({
      title: t('effectHook.toastTitle'),
      description: `This toast was generated on click number ${count}`,
      time: 750
    });
  })

  return (
    <Segment style={{padding: '8em 2em'}} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{fontSize: '2em'}}>
              {t('effectHook.title')}
            </Header>
            <p style={{fontSize: '1.33em'}}>
              {t('effectHook.subtitle')}
            </p>
            <SyntaxHighlighter language="typescript" style={SyntaxHighlightStyles.vs2015}>
              {useEffectDemoCode}
            </SyntaxHighlighter>
            <Button size='huge' color='blue' onClick={increment}>
              {t('effectHook.button')}
            </Button>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <SemanticToastContainer position="top-right" className="toast-container"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
