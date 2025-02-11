import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  // Debugging log to see if posts are being filtered
  console.log("Checking Post:", data.title, "Publish Time:", data.pubDatetime);

  // Ensure posts are not marked as drafts
  if (data.draft) return false;

  // Only apply publish date filtering in production
  const isProduction = import.meta.env.PROD;
  if (isProduction) {
    const isPublishTimePassed =
      new Date(data.pubDatetime).getTime() <= Date.now() + SITE.scheduledPostMargin;
    return isPublishTimePassed;
  }

  return true; // In development, show all posts
};

export default postFilter;
