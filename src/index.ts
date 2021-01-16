import React from "react";
import googleReviewsHandler from "./handlers/googleReviewsHandler"
import { googleReviewsProcessor } from "./processors/googleReviewsProcessor"
import { BRSGoogleReviews } from "../types";

const brsGoogleReviews: BRSGoogleReviews = {
  name: "wp-google-places-review-slider",
  libraries: {
    html2react: {
      processors: [googleReviewsProcessor],
    },
    source: {
      handlers: [googleReviewsHandler],
    },
  },
};
export default brsGoogleReviews