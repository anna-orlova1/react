import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1, photoUrl: 'https://www.film.ru/sites/default/files/people/1466544-1448629.jpg',
                    followed: false, fullName: 'DimKa', status: 'Hey Anka', location: { city: 'Chisinau', country: 'Moldova' }
                },

                {
                    id: 2, photoUrl: 'https://www.film.ru/sites/default/files/people/1466544-1448629.jpg',
                    followed: true, fullName: 'Anka', status: 'Hey Dimka', location: { city: 'Moscva', country: 'Russia' }
                },

                {
                    id: 3, photoUrl: 'https://www.film.ru/sites/default/files/people/1466544-1448629.jpg ',
                    followed: false, fullName: 'Ktoto', status: 'Hey all', location: { city: 'Kiev', country: 'Ucraina' }
                },
            ]

        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div> {u.fullName} </div>
                        <div> {u.status} </div>
                    </span>
                    <span>
                        <div> {u.location.country} </div>
                        <div> {u.location.city} </div>
                    </span>
                </span>

            </div>)
        }
    </div>
}

export default Users;