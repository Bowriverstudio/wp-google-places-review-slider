import { Element, Processor } from "@frontity/html2react/types";
import GoogleReviews from "../components/GoogleReviews"

export const googleReviewsProcessor: Processor<Element> = {
  name: "GoogleReviews",
  priority: 20,
  test: ({ node }) =>
    node.component === "google-reviews",
  processor: () => {
    return {
      component: GoogleReviews,
    };
  },
};
