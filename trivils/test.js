const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
    hello: () => {
        return 'hello world';
    }
};

async function boot() {
    const res = await graphql(schema, '{ hello }', root);
    console.log(res);
}

boot();
