import { connect } from 'react-redux';

function User({ username, status }) {
  return (
    <div className="flex flex-col gap-2">
      <h3>User Profile</h3>
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
