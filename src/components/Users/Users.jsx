import React from 'react';
import s from "./Users.module.css";
import User from "./User/User";



const Users = (props) => {
    const {
        onPageChanged, totalUsersCount, pageSize,
        currentPage, usersData, following, followingInProgress

    } = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let numberPages = [...Array(pagesCount).keys()].map(page => ++page)

    return (
        <div className={s.pageOfUsers}>
            <div className={s.pages}>
                {numberPages.map(numberPage =>
                    <span key={numberPage} className={currentPage === numberPage ? [s.usersPage_active, s.usersPage].join(' ') : s.usersPage}
                          onClick={ () => { onPageChanged(numberPage) }}>
                        { numberPage }
                    </span>)
                }
            </div>
            <div className={s.users}>
                {usersData
                    .map(user => <User userName={user.name} userData={user} id={user.id}
                                       avatar={user.photos.small}
                                       key={user.id}
                                       followed={user.followed}
                                       following={following}
                                       followingInProgress={followingInProgress}

                    />)
                }
            </div>

        </div>
    );
};

export default Users;