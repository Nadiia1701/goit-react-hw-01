import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.container}>
            <div className={css.userContainer}>
                <img className={css.image}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.username}>{name}</p>
                <p className={css.userTag}>@{tag}</p>
                <p className={css.userLocation}>{location}</p>
            </div>

            <ul className={css.listContainer}>
                <li className={css.listItem}>
                    <span className={css.listItemText}>Followers</span>
                    <span className={css.listItemStats}>{stats.followers}</span>
                </li>
                <li className={css.listItem}>
                    <span className={css.listItemText}>Views</span>
                    <span className={css.listItemStats}>{stats.views}</span>
                </li>
                <li className={css.listItem}>
                    <span className={css.listItemText}>Likes</span>
                    <span className={css.listItemStats}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}