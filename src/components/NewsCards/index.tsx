//REACT
import React from "react";

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

type NewsProps = Omit<News, "id">;

interface Props extends NewsProps {
  type?: string;
}

const NewsCard: React.FC<Props> = ({
  title,
  imgUrl,
  sourceName,
  url,
  type,
}) => {
  const styles = useStyles({ imgUrl, type });

  return (
    <Card variant="outlined" classes={{ root: styles.root }}>
      <CardContent classes={{ root: styles.cardContent }}>
        <Typography
          variant="h4"
          component="h2"
          classes={{ root: styles.title }}
        >
          {title}
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
