/**
 * USAGE:
 * psql -f initial-db.sql -Upostgres
 */
drop database if exists company;
create database company OWNER=postgres;

\connect company;

drop table if exists employee;
create table if not exists employee (
	id serial,
    name text not null unique,
    tel text,
    primary key(id)
);

insert into employee(name, tel) values('hogehoge', '000-0000-0000');
insert into employee(name, tel) values('piyopiyo', '111-1111-1111');
insert into employee(name, tel) values('fugafuga', '222-2222-2222');
