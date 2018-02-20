/**
 * USAGE:
 * psql -f create-table.sql -Upostgres
 */
drop database if exists company;
create database company OWNER=postgres;

\connect company;

drop table if exists project;
create table if not exists project (
	id serial,
    project_id text not null unique,
    project_name text,
    primary key(id)
);

drop table if exists team;
create table if not exists team (
	id serial,
    project_id text not null,
    team_id text not null unique,
    team_name text,
    primary key(id),
    foreign key(project_id) references project(project_id)
);

drop table if exists member;
create table if not exists member (
    id serial,
    project_id text not null,
    team_id text not null,
    member_id text not null unique,
    member_name text,
    primary key(id),
    foreign key(project_id) references project(project_id),
    foreign key(team_id) references team(team_id)
);

insert into project(project_id, project_name) values('pj0001', 'pj_hoge');
insert into team(project_id, team_id, team_name) values('pj0001', 'tm0001', 'tm_team');
insert into member(project_id, team_id, member_id, member_name) values('pj0001', 'tm0001', 'mb0001', 'mb_foo');
insert into member(project_id, team_id, member_id, member_name) values('pj0001', 'tm0001', 'mb0002', 'mb_piyo');
