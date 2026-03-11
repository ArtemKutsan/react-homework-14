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
      className="flex flex-col gap-2"
    >
      <h3>Edit User Information</h3>

      <input
        type="text"
        placeholder="Username"
        {...register('username', { required: 'Username is required' })}
      />
      {errors.username && <span className="text-red-500">{errors.username.message}</span>}

      <input
        type="text"
        placeholder="Status"
        {...register('status', { required: 'Status is required' })}
      />
      {errors.status && <span className="text-red-500">{errors.status.message}</span>}

      <button type="submit">Save</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (payload) => dispatch(setUserInfoAction(payload)),
});

export default connect(null, mapDispatchToProps)(UserForm);
