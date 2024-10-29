export const page = () =>{
    session
return (<div>
    {session && <Link href='api/auth/signin'>sign in</Link>}
</div>)
}