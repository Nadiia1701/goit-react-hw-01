import css from "./Profile.module.css"

export default function Profile({ username, tag, location, image, stats }) {
    return (
        <div className={css.container}>
            <div>
                <img className={css.image}
                    src={image}
                    alt="User avatar"
                />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul className={css.listContainer}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}