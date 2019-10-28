import express from 'express'
import graphqlHttp from 'express-graphql';
import schema from './schema';

const app = express(); 

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});


const root = { friend : () => {
    return {
        id : 28718992,
        firstName : "James",
        lastName : "Spencer", 
        gender : "Male",
        language : "English",
        emails : [
            {email : "me@jspenc.com"},
            {email : "alsome@jspenc.com"}
        ]
    }
} };

app.use('/graphql', graphqlHttp({
    schema,
    rootValue: root,
    graphiql : true, 
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));