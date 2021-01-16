import { Handler, Pattern } from "@frontity/wp-source/types";

const googleReviewsHandler: Pattern<Handler> = {
  name: "googleReviewsHandler",
  priority: 10,
  pattern: "/googleReviews",
  func: async ({ link, state, libraries }) => {
    const { api } = libraries.source;

    // 1. fetch   the data you want from the endpoint page
    const response = await api.get({
      endpoint: `/brs/v1/get_google_reviews`,
    });

    // 2. get an array with each item in json format
    const items = await response.json();

    // 3. add data to source
    const currentPageData = state.source.data[link];
    Object.assign(currentPageData, {
      items: items,
      isGoogleReviews: true,
    });
  },
};

export default googleReviewsHandler;
