const { Database, aql } = require('arangojs');

const db = new Database({
    url: 'http://localhost:8529',
});

async function test() {
    try {
        const cursor = await db.query(aql`FOR u IN test RETURN u`);
        let res = await cursor.all();
        console.log(res);

    } catch (e) {
        console.log(e);
    }
}

async function getCaseById(id) {
    try {
        const cursor = await db.query(aql`RETURN DOCUMENT(CONCAT('test/', ${id}))`);
        let res = await cursor.all();
        console.log(res);
    } catch (e) {
        console.log(e.stack);
    }
}

getCaseById(1937);
// test();