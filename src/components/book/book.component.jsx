import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },

  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarGridList({data}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container fixed>
      <GridList cellHeight='auto' className={classes.gridList} cols={4} >
        {data.map((data) => (
          <GridListTile >
            <img src="https://via.placeholder.com/305x435" alt="placeholder"/>
            <GridListTileBar
              title={data.title}
              subtitle={<span>Author: {data.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${data.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </Container>
    </div>
  );
}
