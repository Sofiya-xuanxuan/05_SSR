export default function ({redirect,store}) {
  if(!store.state.user.token) {
    redirect('/login')
  }
}
