import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'camimarcote',
    name: 'Camila Marcote Pintado',
    isFollowing: true
  },
  {
    userName: 'nachovilaró',
    name: 'Nacho Vilaró',
    isFollowing: false
  },
  {
    userName: 'martinamarcote',
    name: 'Martina Marcote',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}