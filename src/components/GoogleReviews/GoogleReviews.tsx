/**
 * External dependencies
 */
import {
  Box, HStack, Image, SimpleGrid, Text
} from "@chakra-ui/core";
import React, { useEffect } from "react";
import { connect, useConnect } from "frontity";
import { Packages, GoogleReviewsData } from "../../../types";

/**
 * Google Reviews
 */
const GoogleReviews = () => {
  const { state, actions } = useConnect<Packages>();

  useEffect(() => {
    actions.source.fetch(`/googleReviews`);
  }, []);


  const data = state.source.get(`/googleReviews`) as GoogleReviewsData;

  console.log(data)
  console.log("Hello")

  // Load the reviews, but only if the data is ready.
  if (!data.isReady) return null;


  return (
    <Box >
      Google Reivews
    </Box>
  );
};

export default connect(GoogleReviews);

