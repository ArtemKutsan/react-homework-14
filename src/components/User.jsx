import { connect } from 'react-redux';

function User({ username, status }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
