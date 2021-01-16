import { Handler, Pattern } from "@frontity/wp-source/types";

const googleReviewsHandler: Pattern<Handler> = {
  name: "googleReviewsHandler",
  priority: 10,
  pattern: "/googleReviews",
  func: async ({ state, libraries }) => {
    const { api } = libraries.source;

    console.log("Hello")

  },
};

export default googleReviewsHandler;
