const fs = require('fs');
const stream = require('stream');
const path = require('path');

const mongo = require('mongodb');

const tmpFile = fs.createWriteStream(path.resolve(__dirname, 'tmp.json'));

(async () => {
    const client = await mongo.MongoClient.connect('mongodb://localhost', {
        useNewUrlParser: true,
    });
    
    try {
        const db = client.db('wld');

        const collections = await db.collections();

        const collectionNames = collections.map(collection => {
            return collection.collectionName;
        });

        // const res = await db.collection('tp_tasks').find({ award: 5000 }).toArray();

        await db.collection('tp_task_records')
        .updateOne({
            _id: mongo.ObjectID('5c384fadad01f4411e038cfc'),
            // 'uploads._id': mongo.ObjectID('5c2c6548378e462880506376'),
            'uploads.type': 'image',
        }, {
            $set: {
                'uploads.$[].desc': '1af',
            },
        }, {

        });

        const res = await db.collection('tp_task_records')
        .find({
            _id: mongo.ObjectID('5c384fadad01f4411e038cfc'),
        }, {
            projection: {
                // uploads: {
                //     $elemMatch: {
                //         _id: mongo.ObjectID('5c2c6548378e462880506376'),
                //     }
                // },
                uploads: 1,
                _id: 0,
            },
            // explain: true,
        })
        // .hint()
        .toArray()

        // console.dir(res, {
        //     depth: null,
        // })

        const aggre = await db.collection('tp_task_records')
        .aggregate([
            // {
            //     $match: {
            //         award: {
            //             $gt: 5000
            //         }
            //     }
            // },
            {
                $sort: {
                    award: 1,
                },
            },
            {
                $project: {
                    _id: 0,
                    uploads: 1,
                }
            },
            {
                $unwind: {
                    path: '$uploads',
                    preserveNullAndEmptyArrays: false,
                }
            },
            {
                $group: {
                    _id: '$uploads._id',
                    mergedUploads: {
                        $addToSet: '$uploads',
                    },
                    count: {
                        $sum: 1,
                    },
                },
            },
        ])
        .toArray();
        
        const readstream = new stream.Readable({ read() {} });

        readstream.push(JSON.stringify(aggre));

        readstream.pipe(tmpFile);
    } catch (e) {
        console.log(e)
    } finally {
        client.close();
    }
})()
