/*
db.<collection_name.aggregate(
    [
        <stage1>
        <stage2>
        <stage3>
        <stage4>
        ...
    ]
)
*/
// Here, it is an array of objects.

// Aggregation request returns cursor from the server.

// In order to convert cursor to array, we can use:
//     db.<collection_name>.aggregate([]).toArray()  . 

// db.<collection_name>.aggregate([])   will result the
// same output(i.e. a cursor) as the command,
// db.<collection_name>.find()


// Expressions:
// Expressions refer to the name of the field in the
// input document.

/*

$match() stage – filters those documents we need to work with, those that fit our needs
$group() stage – does the aggregation job
$sort()  stage – sorts the resulting documents the way we require (ascending or descending)


The input of the pipeline can be one or several collections.
The output of each stage willbe the input of the next.

Syntax:
This is an example of how we build the aggregation query:

pipeline = [
  { $match : { … },
  { $group : { … },
  { $sort : { … },
  ...
]
db.collectionName.aggregate(pipeline, options)

Regarding aggregation stage limits:
Up to 100 MB of RAM can be used per aggregation
stage. You will get an error from the database
if you exceed this limit.


To choose the page to disk method, you just need 
to use the option allowDiskUse, in this way:

db.collectionName.aggregate(pipeline, { allowDiskUse : true })

            #1:

$match - match specific documents with query.
match uses standard MongoDB queries and supports all query operators.

E.g.:
{ $match : {<query>} }


            #2

$group - groups input documents by certain expressions.

$count - counts the number of input documents.
E.g. { $count : "countries" }

Syntax: {$count : <"any_desired string">}

An alternative to count is:

1. 
db.<collection_name>.aggregate([]).toArray().length

toArray -> this will convert the cursor to array.
length property -> this will find the length of the array.

Time taken -> 1,7 seconds.


2. itcount() method.

db.<collection_name>.aggregate().itcount()   

Time taken -> 1,4 seconds.


Reason for previous two methods being more time expensive:

Ans. Previous two methods are client - side, where cursor
iterates through the array. The simple count method does
server-side computation and returns only the count. Hence,
less time expensive operation.

Q. Comparison of aggregation and find count.
Ans.

db.<collection_name>.aggregate( [{ $count : "total" }] )
Time taken -> 0,21 seconds

db.<collection_name>.find( {} ).count()
Time taken -> 0,21 seconds (same as previous).

Note:
find count() is a wrapper of the aggregate $count.


            #3

$sort stage: sorts input documents by certain fields.
Syntax:

{<$sort> : { <field1> : -1|1, <field2> : -1|1, ... }}

Note:
field : 1 -> ascending order
field : -1 -> descending order


            #4

$project stage: includes,excludes or adds new fields.

<$project> :  { <field1> : <1>, <field2> : <0>, <newField> : <expression>... }

Here, the expression field will get renamed to newField.


            $5

$limit stage: outputs first 'n' documents from the input.

Note($limit is used in):

1. sampled aggregation requests with $limit as first stage.
2. after $sort to produce topN results.

Syntax: { $limit : <number_of_output_to_display>  }


            $6

$unwind stage: splits each document with specified array
to several documents - one document per array.

Syntax:  { $unwind : <arrayReferenceExpression> }
Note: unwind can be used with project or group or any other
as we want.

db.<collection_name>.aggregate( [
    {$unwind : "$tags"},
    {$group : { _id : "$tags" }}
] )

--------------------Accumulators------------------------

Accumulators: they are special operators which consist of
$sum, $avg, $max and $min.

They are used inside aggregation stages.
Very very important Note: Most accumulators are used only in the $group stage.

Accumulator syntax:

{ $<accumulatorOperator> : <expression> }

E.g. {$sum : "$quantity" }
     {$avg : "$age"}
     {$max : "$spentMoney"}

    
(a). sum operator:
sums numeric values for the documents in each group.
Syntax: {$sum : <expression | number> }

(b). avg operator:
calculates average value of the certain values in the document
for each group.

Syntax: { $avg : <expression> }

E.g. ->  {avgAge : {$avg : "age"}}


----------------------Unary operators----------------------------

Unary operators: They perform operation on each document. They don't
work for entire group.

Note:
1. Unary operators are usually used in the $project stage.

2. In the $group stage Unary operators can be used only
in conjunction with accumulators.

-----------type unary operator----------------
Returns bson type of the field value.
{$type : expression}

E.g. -> {$type : "$age"}
        {$type : "$name"}

----------out unary operator------------------
Writes resulting documents to the mongoDB collection.

Syntax: {$out : "<outputCollectionName>" }
E.g. -> {$out : "newCollection"}

Note:
1. $out must be last stage in the pipeline.

2. If output collection doesn't exist,
it will be created automatically.

E.g.(again):

db.persons.aggregate([
    {$group : {_id : {age : "$age", eyeColor : "$eyeColor" }}},
    {$out : "aggregationResults"}
])

Here, documents from the $group stage will be written
to the collection "aggregationResults"

----------------------allowDiskUse---------------------------

allowDiskUse : true

1. All aggregation stages can use maximum 100 MB of RAM.
2. Server will return error if RAM limit is exceeded.
3. Following option will enable MongoDB to write
stages data to the temporal file.

{allowDiskUse : true}

Syntax: db.<collection_name>.aggregate([], {allowDiskUse : true})

*/
