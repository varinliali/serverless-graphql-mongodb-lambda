const { gql } = require('apollo-server-lambda')
module.exports.typeDefs = gql`
  type Query {
    hello: String
  }
`