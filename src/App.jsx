import './App.css';
import User from './components/User';
import UserForm from './components/UserForm';

function App() {
  return (
    <>
      <main>
        <h1 className="container max-w-3xl mx-auto px-8 flex flex-col flex-1">React Homework 14</h1>

        <section>
          <div className="container max-w-3xl mx-auto px-8 flex flex-col flex-1">
            <h2>
              Задача 1: Приложения для управления состоянием пользователя с использованием React и
              Redux
            </h2>

            <div className="flex flex-col gap-8 mt-8 max-w-[240px]">
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
