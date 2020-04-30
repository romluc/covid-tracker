import React from 'react';

import { Grid, Card, CardContent, Typography } from '@material-ui/core';

import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const content = [
    {
      text: 'Confirmed',
      styleClass: 'rgba(55, 0, 255, 0.5)',
      class: confirmed,
      contentPhrase: `Number of COVID-19 active cases`,
    },
    {
      text: 'Recovered',
      styleClass: 'rgba(0, 128, 128, 0.6)',
      class: recovered,
      contentPhrase: `Number of COVID-19 recovered cases`,
    },
    {
      text: 'Deaths',
      styleClass: 'rgba(255, 111, 0, 0.5)',
      class: deaths,
      contentPhrase: `Number of deaths from COVID-19`,
    },
  ];

  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        {content.map((content) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={styles.card}
            style={{
              margin: '0 2%',
              backgroundColor: '#eee',
              boxShadow: '0 0 8px 2px rgba(0, 0, 0, 0.2)',
              borderBottom: '10px solid ' + content.styleClass,
            }}
          >
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                {content.text}
              </Typography>
              <Typography variant='h5'>
                <CountUp
                  start={0}
                  end={content.class.value}
                  duration={1.5}
                  separator=','
                />
              </Typography>
              <Typography color='textSecondary'>
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant='body2'>{content.contentPhrase}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
