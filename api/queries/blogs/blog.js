import * as zh from "graphql-request";

export const GRAPH_CMS_CLIENT = new zh.GraphQLClient("https://eu-west-2.cdn.hygraph.com/content/cmapfd3ct02c307wftk09nygj/master");

const blogDataQuery = zh.gql`

{
  sautiBlogPosts {
    createdAt 
    title
    postImage {
      url
    }
    label
    shortDescription
    postSlug
  }
}

`;

export function fetchBlogDataQuery() {
  return GRAPH_CMS_CLIENT.request(blogDataQuery);
}