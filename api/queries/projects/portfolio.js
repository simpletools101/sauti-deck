import * as zh from "graphql-request";

export const GRAPH_CMS_CLIENT = new zh.GraphQLClient("https://eu-west-2.cdn.hygraph.com/content/cmapfd3ct02c307wftk09nygj/master");

const porfolioDataQuery = zh.gql`

{
  sautiPortfolios {
    projectTitle
    projectSlug
    projectImage {
      url
    }
    createdAt
    
  }
}

`;

export function fetchporfolioDataQuery() {
  return GRAPH_CMS_CLIENT.request(porfolioDataQuery);
}