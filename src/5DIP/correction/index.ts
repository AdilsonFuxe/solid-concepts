interface DBConnection {
    connect(): void;
}

class MSQLConnection implements DBConnection {
    connect() {}
}

class OracleConnection implements DBConnection {
    connect() {}
}

class SQLConnection implements DBConnection {
    connect() {}
}

class PostgresConnection implements DBConnection {
    connect() {}
}

class MongoDbConnection implements DBConnection {
    connect() {}
}

class PasswordReminder {
    protected dbConnection: DBConnection
    constructor(dbConnection: DBConnection){
        this.dbConnection = dbConnection;
    }
}