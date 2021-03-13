import {Container, Header} from "semantic-ui-react";
import './Heading.css';
import React from "react";
import {useTranslation} from "react-i18next";

export function Heading() {

  const {t, i18n} = useTranslation();

  return (
    <Container text>
      <Header
        as='h1'
        content={t('heading.title')}
        inverted
        className={'header-heading'}
      />
      <Header
        as='h2'
        content={t('heading.subtitle')}
        inverted
        className={'header-subheading'}
      />
    </Container>
  )
}
