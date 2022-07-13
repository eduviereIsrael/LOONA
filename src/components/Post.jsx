import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'

const Post = () => {
  return (
    <div>
        <Card sx={{margin: 5}}>
        <CardHeader
          avatar={<Avatar sx={{backgroundColor: 'red'}} aria-label="recipe">
            R
          </Avatar>
          }
          action = {
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title = "John Doe"
          subheader="July 14, 2022"
        />
        <CardMedia 
          component="img"
          height="350px"
          image="https://images.pexels.com/photos/10433895/pexels-photo-10433895.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="a certain man's photo"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </CardContent>
        <CardActions disabledSpacing>
          <IconButton aria-label="add to favourites">
            <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color: 'red'}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Post