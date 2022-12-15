const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } = graphql

const Product = require('../mongoDB/productSchema')

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        _id: { type: GraphQLID },
        tag: { type: GraphQLString },
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        price: { type: GraphQLString },
        imageName: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        product: {
            type: ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Product.findById(args.id)
            }
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return Product.find({})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})