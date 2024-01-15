import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const status = isOnline ? css.onlain : css.offlain;
  return (
    <div className="item">
      <img className="avatar" src={avatar} alt="Avatar" width="48" />
      <p className="name">{name}</p>
      <p className={status}>{isOnline ? 'Onlain' : 'Offlain'}</p>
    </div>
  );
};
