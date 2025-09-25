/*SELECT*/
create policy "Enable select for all users"
on "public"."memories"
to public
using (
    true
);

/*INSERT*/
create policy "Enable insert for authenticated users only"
on "public"."memories"
to authenticated
with check (
    true
);

/*DELETE*/
create policy "Enable delete for users based on user_id"
on "public"."memories"
for delete using (
  (select auth.uid()) = user_uid
);


/*UPDATE*/
create policy "update only registered users"
on "public"."memories" to public using (
  (auth.uid() = user_uid)
);