import React from "react";
import { googleReviewsProcessor } from "./processors/googleReviewsProcessor"
import { BRSGoogleReviews } from "../types";

const brsGoogleReviews: BRSGoogleReviews = {
  name: "wp-google-places-review-slider",
  libraries: {
    html2react: {
      processors: [googleReviewsProcessor],
    },
  },
};
export default brsGoogleReviews