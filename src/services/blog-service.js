import Datastore from "nestdb";
const db = new Datastore({filename: "db.nestdb", autoload: true});

export function dbCreateBlog(blog) {
    return new Promise((resolve, reject) => {
        db.insert(blog, (err, doc) => {
            if(err) reject(err)
            resolve(doc);
        });
    });
}

export function dbUpdateBlog(blog) {
     return new Promise((resolve, reject) => {
        db.insert(blog, (err, doc) => {
            if(err) reject(err)
            resolve(doc);
        });
    });
}

export function dbListBlog() {
     return new Promise((resolve, reject) => {
        db.find({}, (err, docs) => {
            if(err) reject(err)
            resolve(docs);
        });
    });
}

export function dbGetBlog(_id) {
    return new Promise((resolve, reject) => {
        db.findOne({_id}, (err, docs) => {
            if(err) reject(err)
            resolve(docs);
        });
    });
}

export function dbDeleteBlog(_id) {
     return new Promise((resolve, reject) => {
        db.remove({_id}, (err, result) => {
            if(err) reject(err)
            resolve(result);
        });
    });
}