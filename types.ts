import { Package, MergePackages } from "frontity/types";
import Router from "@frontity/router/types";
import WpSource from "@frontity/wp-source/types";

export interface BRSGoogleReviews extends Package {
  name: "wp-google-places-review-slider",
}

export default BRSGoogleReviews;

export type Packages = MergePackages<WpSource, Router, BRSGoogleReviews>;



