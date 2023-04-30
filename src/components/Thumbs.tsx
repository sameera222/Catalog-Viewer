import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  items: { thumb: string; image: string }[];
  currentIndex: number;
  handleClick: (index: number) => void;
}

const useStyles = makeStyles({
  thumbActive: {
    border: "6px solid yellow",
    width: 200, // set desired width
    height: 200, // set desired height
  },
  thumbInactive: {
    border: " 4px gray",
    width: 200, // set desired width
    height: 200, // set desired height
  },
  thumbsContainer:{
overflowX: 'hidden',
  },
  image: {
    overflow: 'hidden',
    width: 50,
    height: '50%'
  }
});

function Thumbs({ items, currentIndex, handleClick }: Props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.thumbsContainer} style={{ overflowX: "hidden" }}>
      {items.map((item, idx) => {
        const thumbClasses = idx === currentIndex
          ? classes.thumbActive
          : classes.thumbInactive;

        return (
          <img
            key={item.image}
            src={item.image}
            alt={"gallery"}
            onClick={() => handleClick(idx)}
            className={thumbClasses}
          />
        );
      })}
    </div>
    </>

  );
}

export default Thumbs;
