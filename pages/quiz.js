/* eslint-disable no-tabs */
import Head from 'next/head';
import React from 'react';

import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}



function Quiz() {
  // console.log(db.questions);
  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz - Xadrez</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>Em construção</Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
          </Widget.Content>
        </Widget>
        <Footer />

        <LoadingWidget />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/regisoda/nextjs-quizz-imersao" />
    </QuizBackground>
  );
}

export default Quiz;
