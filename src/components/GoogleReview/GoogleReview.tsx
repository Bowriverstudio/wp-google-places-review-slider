/**
 * External dependencies
 */
import {
  Box, Icon, Image, HStack, Text
} from "@chakra-ui/core";
import React, { useState } from "react";
import { styled } from "frontity";

import { GoogleReviewData } from "../../../types";
import StarRatings from "../StarRatings"
/**
 * Google Reviews
 */
const GoogleReview = ({ googleReview }) => {
  const maxLen = 185;
  const { rating, review_text, reviewer_name, userpic } = googleReview as GoogleReviewData
  const [showFullReview, setShowFullReview] = useState(review_text.length < maxLen);


  const ParitalReview = () => {
    // Reduces the review to the maxLen chars and to the nearest word.
    const shorten = (str, separator = ' ') => {
      if (str.length <= maxLen) return str;
      return str.substr(0, str.lastIndexOf(separator, maxLen));
    }

    const trimmedReivew = shorten(review_text)

    return <>{trimmedReivew} ... <a onClick={() => setShowFullReview(true)}>Read More</a></>
  }

  return (
    <Box p="10px">
      <Box pl="48px" position="relative" pr="20px" py="20px" boxShadow="rgb(0 0 0 / 10%) 2px 2px 2px 0" bg="#f4f4f4" >
        <QuoteBox>
          <QuoteIcon boxSize={6} ml="-30px" />
          <StarRatings rating={rating} />
          {showFullReview ? review_text : <ParitalReview />}
        </QuoteBox>
      </Box>
      <HStack mt="20px">
        <Image
          borderRadius="full"
          boxSize="50px"
          src={userpic}
          alt="Google Image Profile Picture"
        />
        <Box display="inline-block" as="span">{reviewer_name}</Box>
      </HStack>
    </Box>
  );
};

export default (GoogleReview);

const QuoteBox = styled.div`
  display:inline;

  &:after {
    bottom: -30px;
    box-sizing: border-box;
    color: #f4f4f4;
    content: '';
    display: block;
    height: 30px;
    left: 80px;
    position: absolute;
    right: 445px;
    text-size-adjust: 100%;
    width: 30px;
    column-rule-color: #f4f4f4;
    perspective-origin: 15px 15px;
    transform-origin: 15px 15px;
    filter: drop-shadow(rgba(0, 0, 0, .0980392) 2px 2px 1px);
    border-top: 30px solid #f4f4f4;
    border-right: 30px solid transparent;
    border-bottom: 0 solid transparent;
    border-left: 0 solid transparent;
    outline: #f4f4f4 none 0;
  }
`;


const QuoteIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path strokeWidth="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />

  </Icon>
)


