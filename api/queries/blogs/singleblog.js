import * as zh from "graphql-request";

export const GRAPH_CMS_CLIENT = new zh.GraphQLClient(
  "https://eu-west-2.cdn.hygraph.com/content/cmapfd3ct02c307wftk09nygj/master"
);

export function fetchBlogDataMainQuery(slugURL) {
  const blogDataQueryMain = zh.gql`
{
  sautiBlogPost(where: {postSlug:"${slugURL}"}) {
    title
    postImage {
      url
    }
    postContent {
      html 
    }
    createdAt
  }
}

`;
  return GRAPH_CMS_CLIENT.request(blogDataQueryMain);
}
