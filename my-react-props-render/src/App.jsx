import Student from './Student.jsx'
import UserGreetingRender from './UserGreetingRender.jsx';

function App() {

  return (
    <>
      <Student name="Osward" age={26} isStudent={true} />
      <Student name="Jason" age={29} isStudent={true} />
      <Student name="Sandy" age={6} isStudent={false} />
      <Student name="Wendy" age={36} isStudent={true} />
      <Student />

      <UserGreetingRender isLogged={true} userName="Bro"/>
    </>
  );
}

export default App
