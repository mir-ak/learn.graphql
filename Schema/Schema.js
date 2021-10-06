const {  gql } = require('apollo-server');
module.exports = gql`
  input UserInput {
    id: Int
    email: String
    password: String
    firstName: String
    lastName: String
  }

  type User {
    id: Int
    email: String
    password: String
    firstName: String
    lastName: String
  }
  input PostInput{
    id: Int
      author: UserInput
      comments: PostInput
      content: String
      createdAt: String
      updatedAt: String
  }
  type Post {
      id: Int
      author: User
      comments: Post
      content: String
      createdAt: String
      updatedAt: String
  } 
  type Query {
    users:[User]
    posts: [Post]
  }

  type Mutation {
    createUser(input: UserInput!): Boolean
    updateUser(id: ID!, input: UserInput): Boolean
    deleteUser(id: Int!): Boolean
    createPost(input : PostInput!): Boolean
    updatePost(input : PostInput!): Boolean
    deletePost(id: Int!): Boolean 
  }
`;