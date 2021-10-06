const { ApolloServer } = require('apollo-server');
var typeDefs = require('./Schema/Schema.js');

var users = [
    {
      id: 1,
      email: "karim@gmail.com",
      password: "heyyy",
      firstName: "karim",
      lastName: "ait",
    }
  ];

var posts = [];

const resolvers = {
    Query: {
      users: () => users,
      posts: () => posts,
    },
    Mutation: {
      createUser:(root, vars)=>{ 
        return users.push(vars.input)
      },
      updateUser:(root, vars)=>{ 
        try{
         users =  users.map((user)=>{
           if(user.id===vars.input.id){
               return vars.input
           }else{
             return user;
           }
         })
         return true;
        }catch(err){
          return false;
        }
       },
      deleteUser: (root, vars) => {
        users = users.filter( user => user.id !== vars.id)  
        return true
      },
      createPost:(root, vars)=>{
        return posts.push(vars.input)
      },
      updatePost:(root, vars)=>{
        try{
          posts =  posts.map((user)=>{
            if(posts.id===vars.input.id){
                return vars.input
            }else{
              return posts;
            }
          })
          return true;
         }catch(err){
           return false;
         }
      },
      deletePost: (root, vars) => {
        posts = posts.filter( posts => posts.id !== vars.id)  
        return true
      }
      
    }
  };


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});