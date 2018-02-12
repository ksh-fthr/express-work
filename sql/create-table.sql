/**
 * USAGE:
 * psql -f create_tbl.sql -Upostgres
 */
drop database if exists company;
create database company OWNER postgres;

\connect company;

drop table if exists project_tbl;
create table if not exists project_tbl (
	id serial,
    project_id text not null unique,
    project_name text,
    primary key(id)
);

drop table if exists team_tbl;
create table if not exists team_tbl (
	id serial,
    project_id text not null,
    team_id text not null unique,
    team_name text,
    primary key(id),
    foreign key(project_id) references project_tbl(project_id)
);

drop table if exists member_tbl;
create table if not exists member_tbl (
    id serial,
    project_id text not null,
    team_id text not null,
    member_id text not null unique,
    member_name text,
    primary key(id),
    foreign key(project_id) references project_tbl(project_id),
    foreign key(team_id) references team_tbl(team_id)
);
