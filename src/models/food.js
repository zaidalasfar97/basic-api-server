'use strict';

const uuid = require('uuid').v4;

class Foods {
    constructor() {
        this.db = [];
    }

    create(obj) {
        const record = {
            id: uuid(),
            data: obj,
        };
        this.db.push(record);
        return record;
    }

    read(id) {
        if (id) {
            return this.db.find((record) => record.id === id);
        } else {
            return this.db;
        }
    }

    update(id, obj) {
        for (let index = 0; index < this.db.length; index++) {
            if (this.db[index].id === id) {
                this.db[index].data = obj;
                return this.db[index];
            }
        }
    }

    delete(id) {
        this.db = this.db.filter((record) => record.id !== id);
        return this.db;
    }
}

module.exports = Foods;