
PRAGMA foreign_keys = ON;
create table if not exists flavors (
    id integer not null primary key autoincrement default 1,
    flavorName text not null,
    actualFlavor text not null
);
create table if not exists flavorRequests (
    id integer not null primary key autoincrement default 1,
    flavor integer not null,
    replyEmail text not null,
    foreign key(flavor) references flavors(id)
);

create table if not exists admins (
    id integer not null primary key autoincrement default 1,
    email text not null
);