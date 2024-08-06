import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
const users = [
    {
        id: 1,
        userName: 'Ceciliagarcia155',
        name: 'Cecilia Garcia',
        isFollowing: true
    },
    {
        id: 2,
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false
    },
    {
        id: 3,
        userName: 'julianmartinez',
        name: 'Julian Martinez',
        isFollowing: true
    },
    {
        id: 4,
        userName: 'lauragonzalez',
        name: 'Laura Gonzalez',
        isFollowing: false
    },
    {
        id: 5,
        userName: 'joseperez',
        name: 'Jose Perez',
        isFollowing: true
    }
];

export function App(){

    return(
        <section className='App'>
        {
            users.map(user => {
                const {id,userName, name, isFollowing} = user;
                const formatUserName = (userName) => `@${userName}`;
                return(
                    <TwitterFollowCard  
                        key={id}
                        formatUserName={formatUserName} 
                        userName={userName} 
                        initialIsFollowing={isFollowing} >
                        {name}
                    </TwitterFollowCard>
                )
            })
        }

        </section>

    )
}