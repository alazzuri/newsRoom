import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../actions";
import { HOME_FEED } from "../../utils/constants";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Button,
  CardActionArea,
  GridList,
  GridListTile,
  ListSubheader,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

const news = {
  id: 1722425,
  imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
  sourceName: "Olé",
  title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
  url:
    "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
};

const NewsCard = () => (
  <Card>
    <CardActionArea>
      <CardMedia src={news.imgUrl} title="nanan" component="img" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {news.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {news.sourceName}
        </Typography>
        <Button size="small" color="primary" href={news.url} target="_blank">
          Learn More
        </Button>
      </CardContent>
    </CardActionArea>
  </Card>
);

const Home = () => {
  const lala = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={1}>
      <Grid item lg={6} xs={12}>
        <GridListTile key={news.id} rows={2} cols={6}>
          <img src={news.imgUrl} alt={news.title} />
          <GridListTileBar
            title={news.title}
            subtitle={<span>by: {news.sourceName}</span>}
            actionIcon={
              <IconButton aria-label={`info about ${news.title}`}>
                See more
              </IconButton>
            }
          />
        </GridListTile>
      </Grid>
      <Grid item lg={6} xs={12}>
        <GridList cols={6}>
          <GridListTile key={news.id} rows={1} cols={3}>
            <img src={news.imgUrl} alt={news.title} />
            <GridListTileBar
              title={news.title}
              subtitle={<span>by: {news.sourceName}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${news.title}`}>
                  See more
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile key={news.id} rows={1} cols={3}>
            <img src={news.imgUrl} alt={news.title} />
            <GridListTileBar
              title={news.title}
              subtitle={<span>by: {news.sourceName}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${news.title}`}>
                  See more
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile key={news.id} rows={1.5} cols={6}>
            <img src={news.imgUrl} alt={news.title} />
            <GridListTileBar
              title={news.title}
              subtitle={<span>by: {news.sourceName}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${news.title}`}>
                  See more
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile key={news.id} rows={1} cols={3}>
            <img src={news.imgUrl} alt={news.title} />
            <GridListTileBar
              title={news.title}
              subtitle={<span>by: {news.sourceName}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${news.title}`}>
                  See more
                </IconButton>
              }
            />
          </GridListTile>{" "}
          <GridListTile key={news.id} rows={1} cols={3}>
            <img src={news.imgUrl} alt={news.title} />
            <GridListTileBar
              title={news.title}
              subtitle={<span>by: {news.sourceName}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${news.title}`}>
                  See more
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
      </Grid>
      <Grid item lg={3} xs={12}>
        <GridListTile key={news.id} rows={1} cols={3}>
          <img src={news.imgUrl} alt={news.title} />
          <GridListTileBar
            title={news.title}
            subtitle={<span>by: {news.sourceName}</span>}
            actionIcon={
              <IconButton aria-label={`info about ${news.title}`}>
                See more
              </IconButton>
            }
          />
        </GridListTile>
      </Grid>
      <Grid item lg={3} xs={12}>
        <GridListTile key={news.id} rows={1} cols={3}>
          <img src={news.imgUrl} alt={news.title} />
          <GridListTileBar
            title={news.title}
            subtitle={<span>by: {news.sourceName}</span>}
            actionIcon={
              <IconButton aria-label={`info about ${news.title}`}>
                See more
              </IconButton>
            }
          />
        </GridListTile>
      </Grid>{" "}
      <Grid item lg={3} xs={12}>
        <GridListTile key={news.id} rows={1} cols={3}>
          <img src={news.imgUrl} alt={news.title} />
          <GridListTileBar
            title={news.title}
            subtitle={<span>by: {news.sourceName}</span>}
            actionIcon={
              <IconButton aria-label={`info about ${news.title}`}>
                See more
              </IconButton>
            }
          />
        </GridListTile>
      </Grid>{" "}
      <Grid item lg={3} xs={12}>
        <GridListTile key={news.id} rows={1} cols={3}>
          <img src={news.imgUrl} alt={news.title} />
          <GridListTileBar
            title={news.title}
            subtitle={<span>by: {news.sourceName}</span>}
            actionIcon={
              <IconButton aria-label={`info about ${news.title}`}>
                See more
              </IconButton>
            }
          />
        </GridListTile>
      </Grid>
    </Grid>
  );
};

export default Home;
