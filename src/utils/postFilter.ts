import type { CollectionEntry } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"blog">) => {
  console.log("Filtering Post:", data.title, "Publish Time:", data.pubDatetime);
  return !data.draft; // Removes unnecessary filtering based on publish date
};

export default postFilter;
