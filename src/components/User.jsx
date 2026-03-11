import { connect } from 'react-redux';

function User({ username, status }) {
  return (
    <div className="flex flex-col">
      <h4>User Profile</h4>
      <span>Name: {username}</span>
      <span>Status: {status}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  username: state.username,
  status: state.status,
});

export default connect(mapStateToProps, null)(User);
