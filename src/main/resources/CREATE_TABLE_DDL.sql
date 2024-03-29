set schema 'public';

create sequence pc_spotify_access_tokens_seq start 1;
create sequence pc_scopes_seq start 1;

create table pc_spotify_access_tokens
(
    id bigint not null default nextval('pc_spotify_access_tokens_seq'::regclass),
    name text collate pg_catalog."default" not null,
    client_id text collate pg_catalog."default" not null,
    client_secret text collate pg_catalog."default" not null,
    refresh_token text collate pg_catalog."default",
    access_token text collate pg_catalog."default",
    status text collate pg_catalog."default" not null,
    constraint "PC_AUTHENTICATION_pkey" primary key (id)
)
with (
    oids = false
)
tablespace pg_default;

create table pc_scopes
(
    id bigint not null default nextval('pc_scopes_seq'::regclass),
    name text collate pg_catalog."default" not null,
    auth_token_id bigint references pc_spotify_access_tokens(id),
    constraint "PC_SCOPES_pkey" primary key (id)
)
with (
    oids = false
)
tablespace pg_default;