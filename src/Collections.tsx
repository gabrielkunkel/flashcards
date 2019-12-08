import * as React from 'react';
import Collection from './Models/collection'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/LaunchOutlined';


export default function CollectionList (props: { collections: Collection[]} ) {
  return (
    <div>
      <GridList>
          {props.collections.map(col => (
              <GridListTile key={col.id + ''}>
                  <img src={col.image} alt={col.title} />
                  <GridListTileBar
                    title={col.title}
                    actionIcon={
                    <IconButton aria-label={`star ${col.title}`}>
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
