//Virtuals in Mongoose.

/*

Virtuals are document properties that we can get and set,
but that do not get persisted to MongoDB. The getters are
useful for formatting or combining fields, while setters
are useful for decomposing a single value into multiple
values for storage. 

Virtuals are additional fields for a given model. Their values
can be set manually or automatically with defined
functionality. A common virtual property is the full
name of a person, composed of user’s first and last name.

Keep in mind: virtual properties don’t get persisted in
the database. They only exist logically and are
not written to the document’s collection.



*/
