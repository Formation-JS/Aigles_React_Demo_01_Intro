type WelcomeProps = {
  firstname: string;
  lastname: string;
}

const Welcome = ({firstname, lastname} : WelcomeProps) => {

  return (
    <p>Bienvenue {firstname} {lastname} !</p>
  );
};

export default Welcome;