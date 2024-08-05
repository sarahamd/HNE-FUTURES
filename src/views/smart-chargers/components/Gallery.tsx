import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import Lightbox from "react-18-image-lightbox";

import "react-18-image-lightbox/style.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { ImageList, ImageListItem, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gallery = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    {
      srcSmall: "/photos/photo7-full.jpg",
      srcFull: "/photos/photo7-full.jpg",
      rows: 2,
      cols: 1,
    },
    {
      srcSmall: "/photos/photo6-full.jpg",
      srcFull: "/photos/photo6-full.jpg",
      // rows: 2,
      // cols: 1,
    },
    {
      srcSmall: "/photos/photo1-small.webp",
      srcFull: "/photos/photo1-full.webp",
      // rows: 2,
      // cols: 1,
    },
    {
      srcSmall: "/photos/photo2-small.webp",
      srcFull: "/photos/photo2-full.webp",
      rows: 1,
      cols: 2,
    },
    {
      srcSmall: "/photos/photo4-small.webp",
      srcFull: "/photos/photo4-full.webp",
      rows: 1,
      cols: 1,
    },
    {
      srcSmall: "/photos/photo5-small.webp",
      srcFull: "/photos/photo5-full.webp",
      rows: 1,
      cols: 1,
    },
    {
      srcSmall: "/photos/photo3-small.webp",
      srcFull: "/photos/photo3-full.webp",
      rows: 1,
      cols: 2,
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length - 1);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"secondary"}
          align={"center"}
        >
          Gallery
        </Typography>
        <Box component={Typography} fontWeight={700} variant={"h3"} align={"center"}>
          Our Chargers in Action
        </Box>
      </Box>
      <Box>
        <ImageList
          variant="masonry"
          cols={4}
          rowHeight={isMd ? 250 : 200}
          gap={isMd ? 16 : 8}
          sx={{ overflow: "hidden" }}
        >
          {photosToShow.map((item, i) => (
            <ImageListItem key={i} cols={isMd ? item.cols || 1 : 2} rows={isMd ? item.rows || 1 : 1}>
              <LazyLoadImage
                height={"100%"}
                width={"100%"}
                src={item.srcSmall}
                alt="..."
                effect="blur"
                onClick={() => openLightbox(i)}
                style={{
                  objectFit: "cover",
                  cursor: "poiner",
                  borderRadius: 4,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].srcFull}
          nextSrc={photos[(currentImage + 1) % photos.length].srcFull}
          prevSrc={photos[(currentImage + photos.length - 1) % photos.length].srcFull}
          onImageLoad={() => {
            window.dispatchEvent(new Event("resize"));
          }}
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() => setCurrentImage((currentImage + photos.length - 1) % photos.length)}
          onMoveNextRequest={() => setCurrentImage((currentImage + 1) % photos.length)}
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </Box>
  );
};

export default Gallery;
