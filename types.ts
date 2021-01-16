import Data from "@frontity/source/types";
import { Package, MergePackages } from "frontity/types";
import Router from "@frontity/router/types";
import WpSource from "@frontity/wp-source/types";

export interface BRSGoogleReviews extends Package {
  name: "wp-google-places-review-slider",
}

export default BRSGoogleReviews;

export type Packages = MergePackages<WpSource, Router, BRSGoogleReviews>;

/**
 * Data for the google reviews.
 */
export interface GoogleReviewsData extends Data {
  /**
   * Google Reviews
   */
  items: [GoogleReviewData];

  /**
   * Google Reviews
   */
  isGoogleReviews: boolean;

  /**
   * Should not need this - we might have to exend a different type.
   */
  isReady: boolean;
}

/**
 * 
 * @link https://developers.google.com/my-business/content/review-data
 * @link https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews#Review
 * 
 */
type GoogleReviewData = {
  /**
   * Created time of the review
   */
  created_time: string;
  created_time_stamp: number;

  /**
   * URL of the orginal review
   */
  from_url: string;

  /**
   * Not sure
   */
  hide?: string;

  /**
   * id stored in custom table wpfb_reviews
   */
  id: number;

  /**
   * TODO not sure what this is.
   */
  pageid: string;

  /**
   * TODO not sure what this is.
   */
  pagename: string;

  /**
   * The star rating of the review.
   * The star rating out of five, where five is the highest rated.
   * @link https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews#StarRating
   */
  rating: 1 | 2 | 3 | 4 | 5;

  /**
   * Number of chars of the review_text
   */
  review_length: number;

  /**
   * The body of the review as plain text with markups.
   */
  review_text: string;

  /**
   * The encrypted unique identifier.
   */
  reviewer_id: string;

  /**
   * The name of the reviewer. Only populated with the reviewer's real name if isAnonymous is false.
   */
  reviewer_name: string;

  /**
   * TODO not sure.
   */
  type: "Google";

  /**
   * The profile photo link of the reviewer. Only populated if isAnonymous is false.
   */
  userpic: string;
};

