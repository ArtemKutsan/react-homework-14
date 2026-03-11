import './App.css';
import User from './components/User';
import UserForm from './components/UserForm';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* <header className="py-4">
          <div className="container max-w-3xl px-8 mx-auto">
            <span className="font-semibold">React</span>
          </div>
        </header> */}

        <main className="flex-1 py-8">
          <section>
            <div className="container max-w-3xl mx-auto px-8 prose">
              <h1>React Homework 14</h1>
              <h2>
                Задача 1: Приложения для управления состоянием пользователя с использованием React и
                Redux
              </h2>

              <div className="flex flex-col max-w-60">
                <User />
                <UserForm />
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* <footer></footer> */}
    </>
  );
}

export default App;
