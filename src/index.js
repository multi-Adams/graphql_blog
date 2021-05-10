import { GraphQLServer } from "graphql-yoga";
import { users, posts, me } from "../data/users";

// sample data

// type definitions or schema
const typeDefs = `
type Query {
   me: User!
   greeting(name: String): String
   posts(query: String): [Post!]!
   users(query: String): [User!]!
   post: Post!
} 




type User {
  id: ID!
      name: String!,
      username: String!
      age: Int!
      job: String
      employed: Boolean
      email: String!
      phone: String!
      website: String
    }

    type Post {
      title: String!
      author: User!
      body: String!
      likes: Int!
      id: ID!
      published: Boolean
      tags: [String!]
    }
`;

// resolver functions resolvers
const resolvers = {
  Query: {
    users: (parent, args, ctx, info) => {
      if (!args.query) {
        return users;
      }
      return users.filter((user) => {
        const nameMatch = user.name
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const usernameMatch = user.username
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return nameMatch || usernameMatch;
      });
    },

    greeting(parent, args, ctx, info) {
      if (args.name) {
        return `Welcome ${args.name}!`;
      } else {
        return `Welcome User!`;
      }
    },
    me(parent, args, ctx, info) {
      return me;
    },

    post() {
      return {
        title: "How to build a GraphQL api with NodeJs",
        author: "7",
        body:
          "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 0,
        id: "7hffui9844q348438",
        published: true,
        tags: ["NodeJS", "GraphQl", "API", "apollo", "web development"],
      };
    },

    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }
      return posts.filter((post) => {
        const titleMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const bodyMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return titleMatch || bodyMatch;
      });
    },
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log(`server started!`);
});
