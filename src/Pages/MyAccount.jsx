import './CSS/MyAccount.css'
import myaccountFieldsimg from '../Components/Assets/myaccountFields.svg'

const ProfilePage = () => {

  return (
    <div className="profile-page">
      <div className='profile-container'>
        <div className="sidebar">
          <h3>Manage My Account</h3>
          <ul>
            <li className="active">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>
          <h3>My Orders</h3>
          <ul>
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>
          <h3>My Wishlist</h3>
        </div>
        <div className="profile-right">
          <img src={myaccountFieldsimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
