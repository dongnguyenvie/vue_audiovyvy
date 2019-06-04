export const GET_POST_BY_ID = `
query GET_POST_BY_ID($id: ID!) {
    post(id: $id) {
      title
      featuredImage {
        sourceUrl
      }
      content
      audioJson
    }
  }
  
`
