// NextAuth API route (pages dir used only for next-auth compatibility with App Router)
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: { username: {label:'Username', type:'text'}, password:{label:'Password', type:'password'} },
      async authorize(creds){ 
        if(!creds) return null
        // replace with real auth validation
        if(creds.username === 'demo' && creds.password === 'demo') return { id:'1', name:'Demo User', email:'demo@example.com' }
        return null
      }
    })
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }){ if(user) token.user = user; return token },
    async session({ session, token }){ (session as any).user = (token as any).user; return session }
  }
})
