import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating, Checkbox, Link } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styled from '@emotion/styled';

const OfferCard = styled(Card)`
  overflow: visible;
  max-width: 345px;
`;

const PremiumMark = styled.div`
  position: absolute;
  top: -5px;
  left: -3px;
  padding: 5px 15px 5px 9px;
  font-size: 12px;
  line-height: 1.1667;
  font-weight: 700;
  color: #fff;
  background-color: #4481c3;
  transform: skew(-10deg);
  border-radius: 3px;
  z-index: 1000;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckboxButton = styled(Checkbox)`
  padding: 0;
`;

const OfferTitle = styled.h3`
  margin-top: 5px;
  font-size: 18px;
  line-height: 1.223;
  font-weight: 700;
  font-style: oblique;
`;

const OfferLink = styled(Link)`
  display: block;
  transform: skew(-15deg);
  transition: background .3s,color .3s,text-shadow .3s;
`;


const OfferItem: React.FC = () => {
  return (
    <article>
      <OfferCard>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="../img/apartment-01.jpg"
            alt="green iguana"
          />
          <CardContent>
            <PremiumMark>
              <span>Premium</span>
            </PremiumMark>
            <TitleBox>
              <div>
                <Typography variant="h6" component="span">
                  €120
                </Typography>
                <Typography variant="body2" component="span">
                  /night
                </Typography>
              </div>
              <CheckboxButton
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon color='secondary'/>}
                aria-label="Add to favorites"
              />
            </TitleBox>
            <Rating value={4} readOnly />
            <OfferTitle>
              <OfferLink href="#" aria-label="Open the offer">
                Beautiful & luxurious apartment at great location
              </OfferLink>
            </OfferTitle>
            <Typography variant="body2">
              Apartment
            </Typography>
          </CardContent>
        </CardActionArea>
      </OfferCard>
    </article>
  );
};

export default OfferItem;
