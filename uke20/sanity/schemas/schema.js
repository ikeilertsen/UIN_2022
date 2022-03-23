// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

//fra forelesning
import quiz from './documents/quiz'
import categories from './documents/categories'
import question from './objects/question'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import answer from './objects/answer'
import game from './documents/game'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  //Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    quiz,
    categories,
    question,
    answer,
    game,
  ]),
})
