/**
 * External dependencies
 * 
 */
import {
  Box, useTheme,
} from "@chakra-ui/core";
import React, { useEffect } from "react";
import { connect, useConnect } from "frontity";
import Carousel from 'react-elastic-carousel' //@link https://sag1v.github.io/react-elastic-carousel/  @link https://codesandbox.io/s/21o46mkwnr?file=/src/index.js
import { Global, css } from "frontity";

/**
 * Internal Dependencies
 */
import { Packages, GoogleReviewsData } from "../../../types";
import GoogleReview from "../GoogleReview"
/**
 * Google Reviews
 */
const GoogleReviews = () => {
  const { state, actions } = useConnect<Packages>();
  const theme = useTheme()

  useEffect(() => {
    actions.source.fetch(`/googleReviews`);
  }, []);

  const data = state.source.get(`/googleReviews`) as GoogleReviewsData;

  // Load the reviews, but only if the data is ready.
  if (!data.isReady) return null;
  if (!data.items) return null;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 762, itemsToShow: 2, itemsToScroll: 2 },
  ];

  return (
    <>
      <Global
        styles={css`
        .rec.rec-arrow:disabled {
          visibility: hidden;
      }

      
        .rec .rec-arrow{
          background:${theme.colors.brand['green-dark']};
        }
        .rec-arrow:hover:enabled{
          background:${theme.colors.brand['green-light']};
        }

        .rec.rec-dot.rec-dot_active{
          background:${theme.colors.brand['green-light']};
          box-shadow: 0 0 1px 3px ${theme.colors.brand['green-dark']};
        }
          `}
      />
      <Box>
        <Carousel breakPoints={breakPoints}>
          {
            Object.entries(data.items).map(([, googleReview]) => {
              return (
                <GoogleReview key={googleReview.id} googleReview={googleReview} />
              );
            })
          }
        </Carousel>
      </Box>
    </>
  );
};



export default connect(GoogleReviews);

