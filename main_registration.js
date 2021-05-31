import Signup from "./Signup";

function MainRegistration() {
  function addsignuphandler(signupData) {
    const user = {
      'name': 'ashlesh',
      'password':'ashu'
    }
      fetch("http://127.0.0.1:8000/main/sample", {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Content-Type': "application/json",
        

      },
      mode:"no-cors",
      body: JSON.stringify({ title: 'React POST Request Example' }),
    })
      .then((response) => { return response.json()})
      .catch((err) => console.log('erro'));
  }

  return (
    <section>
      <h1>Signup</h1>
      <Signup onsignup={addsignuphandler} />
    </section>
  );
}

export default MainRegistration;
