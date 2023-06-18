.open yeet.db

-- create a table
create table if not exists test (
    id integer primary key AUTOINCREMENT);

-- insert some data
--insert into test default values;

-- print the data
select * from test;

.exit 0

