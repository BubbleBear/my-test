const fs = require('fs');

const mongo = require('mongodb');

!async function() {
    const client = await mongo.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
    });

    const db = client.db('qq_music_crawler');

    const cc = db.collection('company');

    const al = db.collection('album');

    const company = await cc.findOne({
        company_id: 2,
    });

    const albumList = company.albumList;

    const songsList = await Promise.all(albumList.map(async a => {
        const album = await al.findOne({
            album_id: Number(a.album_id),
        });
    
        const songs = album.list.map(v => `${v.songname} ####### ${v.albumname} ####### ${v.singer && v.singer[0] && v.singer[0].name}`);

        return songs;
    }));

    const songs = songsList.reduce((acc, cur) => {
        acc = acc.concat(cur);

        return acc;
    }, []);

    const ws = fs.createWriteStream('c2s.json');
    ws.write(JSON.stringify(songs));
    ws.end();

    await client.close();
}()
