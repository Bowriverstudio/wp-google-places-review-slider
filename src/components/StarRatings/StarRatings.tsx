/**
 * External dependencies
 */
import {
  Box, HStack, Image, SimpleGrid, Text
} from "@chakra-ui/core";
import React from "react";
import { connect, useConnect } from "frontity";

import { GoogleReviewData, Packages } from "../../../types";

type Props = {
  rating: 1 | 2 | 3 | 4 | 5
}
/**
 * Google Reviews
 */
const StarRating = ({ rating }: Props) => {
  const { state } = useConnect<Packages>();
  const alt = rating + ' star review'

  const imageName = 'stars_' + rating + '_yellow.png'
  const imagePath = state.source.api + '/../wp-content/plugins/wp-google-places-review-slider/public/partials/imgs/' + imageName


  return (
    <Box as="span" display="inline-block">
      <Image src={imagePath} alt={alt} mr={2} />
    </Box>
  );
};

export default connect(StarRating);

