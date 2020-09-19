//REACT
import React, { Suspense, useState } from "react";

//MATERIAL UI
import {
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

//STYLES
import { useStyles } from "./styles";

//TYPESCRIPT
import { News } from "../../interfaces/news";

//UTILS
import { fallbackImg } from "../../utils/constants";
import { normalizeTitle } from "../../utils/news";

type NewsProps = Omit<News, "id">;

interface Props extends NewsProps {
  type?: string;
}

const CardImage: React.FC<{ url: string; styles: any }> = ({ url, styles }) => {
  const [imgSrc, setImgSrc] = useState(url || fallbackImg);

  return (
    <Suspense fallback={<img src={fallbackImg} alt="fallback" />}>
      <img
        src={imgSrc}
        alt="news"
        className={styles}
        onError={() => {
          setImgSrc(fallbackImg);
        }}
      />
    </Suspense>
  );
};

const NewsCard: React.FC<Props> = ({
  title,
  imgUrl,
  sourceName,
  url,
  type,
}) => {
  const styles = useStyles({ imgUrl, type });

  const setImageStyles = (type?: string) => {
    switch (type) {
      case "big":
        return styles.largeImage;
      case "medium":
        return styles.mediumImage;
      default:
        return styles.smallImage;
    }
  };

  return (
    <Card variant="outlined" classes={{ root: styles.root }}>
      <CardImage url={imgUrl} styles={setImageStyles(type)} />
      <CardContent classes={{ root: styles.cardContent }}>
        <Typography
          variant="h4"
          component="h2"
          classes={{ root: styles.title }}
        >
          {normalizeTitle(title)}
        </Typography>
        <Typography variant="body1" component="p">
          Fuente: {sourceName}
        </Typography>
      </CardContent>
      <CardActions classes={{ root: styles.buttonContainer }}>
        <Button
          size="medium"
          variant="contained"
          href={url}
          classes={{ root: styles.button }}
          disableRipple
        >
          Ver Más
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
