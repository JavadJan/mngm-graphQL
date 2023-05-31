//import graphql
const { GraphQLID,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList } = require('graphql')
const { clients, projects } = require('./dumyData.js')
// create an object 
const clientType = new GraphQLObjectType({
    name: 'client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
})

//create project type
const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        clientId:{type:GraphQLID},
        client:{
            type:clientType,
            args:{id:{type:GraphQLID}},
            resolve(parent , id ){
                return clients.find(client=> client.id===parent.clientId)
            }
        }
    })
})
//create a query 
const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    fields: {
        clients: {
            type: new GraphQLList(clientType),
            resolve(parent, args) {
                return clients
            }
        },
        client: {
            type: clientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return clients.find((client) => client.id === args.id)
            }
        },
        //get all project
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return projects
            }
        },
        //get project by id
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return projects.find((project) => project.id === args.id)
            }
        }
    }
})
//build a schema
module.exports = new GraphQLSchema({
    query: RootQuery
})