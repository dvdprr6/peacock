set schema 'public';

create sequence pc_auth_token_seq start 1;

create table pc_auth_token
(
    id bigint not null default nextval('pc_auth_token_seq'::regclass),
    client_id text collate pg_catalog."default" not null,
    client_secret text collate pg_catalog."default" not null,
    url text collate pg_catalog."default" not null,
    constraint "PC_AUTHENTICATION_pkey" primary key (id)
)
with (
    oids = false
    )
tablespace pg_default;