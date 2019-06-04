export const GET_POSTS = `
query GET_POSTS($first: Int) {
  hot: posts(first: $first, where: {categoryNotIn: [1, 13], tag: "top-truyen", status: PUBLISH}) {
    nodes {
      id
      postId
      title
      uri
      featuredImage {
        sourceUrl
      }
    }
  }
  new: posts(first: $first, where: {categoryNotIn: [1, 13], status: PUBLISH}) {
    nodes {
      id
      postId
      title
      uri
      featuredImage {
        sourceUrl
      }
    }
  }
  _tienhiep: posts(first: $first, where: {categoryNotIn: [1, 13], categoryId: 11, status: PUBLISH}) {
    nodes {
      postId
      title
      uri
      id
      featuredImage {
        sourceUrl
      }
    }
  }
  _ma: posts(first: $first, where: {categoryNotIn: [1, 13], categoryId: 28, status: PUBLISH}) {
    nodes {
      id
      postId
      title
      uri
      featuredImage {
        sourceUrl
      }
    }
  }
  _quan_truong: posts(first: $first, where: {categoryNotIn: [1, 13], categoryId: 6, status: PUBLISH}) {
    nodes {
      id
      postId
      title
      uri
      featuredImage {
        sourceUrl
      }
    }
  }
}

`
