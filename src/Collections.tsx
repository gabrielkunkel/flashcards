import * as React from 'react';
import Collection from './Models/collection'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/LaunchOutlined';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

interface collections {
  collections: Collection[], 
  setActiveCollection: (col: Collection) => void,
  activeCollection: Collection
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);


export default function CollectionList (props: collections ) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
          {props.collections.map(col => (
              <GridListTile key={col.id + ''} >
                  <img src={col.image} alt={col.title} />
                  <GridListTileBar
                    title={col.title}
                    classes={{
                      root: props.activeCollection.id === col.id ? classes.titleBar : undefined,
                      title: props.activeCollection.id === col.id ? classes.title : undefined,
                    }}
                    actionIcon={
                    <IconButton onClick={() => props.setActiveCollection(col)} aria-label={`select ${col.title}`}>
                        <LaunchIcon />
                    </IconButton>
              }
            />
              </GridListTile>
          ))}
      </GridList>
    </div>
  );
}
