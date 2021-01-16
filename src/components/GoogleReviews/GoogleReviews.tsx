/**
 * External dependencies
 */
import {
  Box, HStack, Image, SimpleGrid, Text
} from "@chakra-ui/core";
import React from "react";
import { connect, useConnect } from "frontity";
import { Packages } from "../../../types";

/**
 * Google Reviews
 */
const GoogleReviews = () => {
  const { state, actions } = useConnect<Packages>();

  actions.source.fetch(`/googleReviews`);

  return (
    <Box >
      Google Reivews
    </Box>
  );
};

export default connect(GoogleReviews);

