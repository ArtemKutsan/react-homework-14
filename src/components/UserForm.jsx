import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setUserInfoAction } from '../redux/actions';

function UserForm({ setUserInfo }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      status: '',
    },
  });

  const onSubmit = (data) => {
    setUserInfo(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
    >
      <h3>Edit User Information</h3>

      <input
        type="text"
        placeholder="Username"
        {...register('username', { required: 'Username is required' })}
      />
      {errors.username && <span style={{ color: 'red' }}>{errors.username.message}</span>}

      <input
        type="text"
        placeholder="Status"
        {...register('status', { required: 'Status is required' })}
      />
      {errors.status && <span style={{ color: 'red' }}>{errors.status.message}</span>}

      <button type="submit">Save</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (payload) => dispatch(setUserInfoAction(payload)),
});

export default connect(null, mapDispatchToProps)(UserForm);
