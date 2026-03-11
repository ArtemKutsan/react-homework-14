import './App.css';
import User from './components/User';
import UserForm from './components/UserForm';

function App() {
  return (
    <>
      <main>
        <h1 className="container">React Homework 14</h1>

        <section>
          <div className="container">
            <h2>
              Задача 1: Приложения для управления состоянием пользователя с использованием React и
              Redux
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                marginTop: '2rem',
                maxWidth: '240px',
              }}
            >
              <User />
              <UserForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
