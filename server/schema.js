//import graphql
const { GraphQLID,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLEnumType,
    GraphQLNonNull } = require('graphql')
const { clients, projects } = require('./dumyData.js')

const Project = require('./model/Project.js')
const Client = require('./model/Client.js')

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
        clientId: { type: GraphQLID },
        client: {
            type: clientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, id) {
                return Client.findById(parent.clientId)
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
                return Client.find({})
            }
        },
        client: {
            type: clientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Client.findById(args.id)
            }
        },
        //get all project
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find()
            }
        },
        //get project by id
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Project.findById(args.id)
            }
        }
    }
})
//mutation
const myMutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addClient: {
            type: clientType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const client = new Client({
                    name: args.name,
                    email: args.email,
                    phone: args.phone
                })
                return client.save()
            }
        },
        deleteClient: {
            type: clientType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Client.findByIdAndDelete(args.id)
            }
        },
        updateClient: {
            type: clientType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                phone: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Client.findByIdAndUpdate(args.id, {
                    $set: {
                        name: args.name,
                        email: args.email,
                        phone: args.phone,
                    }
                });
            }
        },

        addProject: {
            type: ProjectType,
            args: {
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                status: {
                    type: new GraphQLEnumType({
                        name: "projectStatus",
                        values: {
                            new: { value: 'Not Started' },
                            progress: { value: 'In Progress' },
                            completed: { value: 'Completed' },
                        },

                    }),
                    defaultValue: 'Not Started',
                },
                clientId: { type: GraphQLString }
            },
            resolve(parent, args) {
                const project = new Project({
                    name: args.name,
                    description: args.description,
                    status: args.status,
                    clientId: args.clientId
                })
                return project.save()
            }
        },
        deleteProject: {
            type: ProjectType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Project.findByIdAndDelete(args.id)
            }
        },
        updateProject: {
            type: ProjectType,
            args: {
                id: { type: GraphQLID },
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                status: {
                    type: new GraphQLEnumType({
                        name: 'updateProject',
                        values: {
                            new: { value: 'Not Started' },
                            progress: { value: 'In Progress' },
                            completed: { value: 'Completed' },
                        }
                    }),
                    defaultValue: 'Not Started!',
                },
                clientId: { type: GraphQLString }
            },
            resolve(parent, args) {
                return Project.findByIdAndUpdate(args.id, {
                    $set: {
                        name: args.name,
                        description: args.description,
                        status: args.status,
                        clientId: args.clientId

                    }
                },
                    { new: true }
                )
            }
        },
    }
})
//build a schema
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: myMutation
})