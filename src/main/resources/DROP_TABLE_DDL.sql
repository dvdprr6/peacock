set schema 'public';

drop table if exists pc_scopes;
drop table if exists pc_auth_token;

drop sequence if exists pc_auth_token_seq;
drop sequence if exists pc_scopes_seq;