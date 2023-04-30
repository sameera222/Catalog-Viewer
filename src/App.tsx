import React, { Fragment, useState, useEffect } from "react";
import { catalogsList } from "./components/CatalogsList";
import { Thumbs } from "./components";
import ImageGallery from "./components/ImageGallery";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

function App() {
  const [catalogs, setCatalogs] = useState([...catalogsList]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDuration] = useState(3000);
  const classes = useStyles();

  const handleNextClick = () => {
    if (activeIndex === 3) {
      const _catalogs = catalogs.slice(1).concat(catalogs[0]);
      setCatalogs([..._catalogs]);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeIndex === 0) {
      const _catalogs = new Array(catalogs[3]).concat(catalogs.slice(0, 3));
      setCatalogs([..._catalogs]);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleThumbClick = (idx: any) => {
    setActiveIndex(idx);
  };


  const handlePlayClick = () => {
    setIsSliding(!isSliding);
  };

  useEffect(() => {
    if (isSliding) {
      const interval = setInterval(() => {
        handleNextClick();
      }, slideDuration);
      return () => clearInterval(interval);
    }
  }, [isSliding, activeIndex, catalogs]);

  return (
    <Fragment>
      <div className="layout-column justify-content-center mt-75">
        <div className="layout-row justify-content-center">
          <div className="card pt-25">
            <ImageGallery
              catalogs={catalogs}
              activeIndex={activeIndex}
              handlePlayClick={handlePlayClick}
              isSliding={isSliding}
            />
            <div className="layout-row justify-content-center align-items-center">
              <div className={classes.root}>
                <ImageList className={classes.imageList} cols={9}>
                  <ArrowCircleLeftIcon onClick={handlePrevClick} />
                  <Thumbs
                    items={catalogs}
                    currentIndex={activeIndex}
                    handleClick={handleThumbClick}
                  />
                  <ArrowCircleRight onClick={handleNextClick} />
                </ImageList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;


