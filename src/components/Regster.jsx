import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvired';

const Regster = () => {
  const { userLogin } = useContext(AuthContext);
  const handlesigin = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then(result => {
        console.log(result.user);
        const lastSignInTime = result.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };
        fetch(`http://localhost:5000/users`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(loginInfo),
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          });
      })
      .catch(error => {
        console.log('ERROR', error.message);
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex justify-center text-center my-4">
        <form className="card-body" onSubmit={handlesigin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sigin</button>
          </div>
        </form>
        <p className="pb-4">
          if you have to account
          <Link to="/login" className="text-red-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regster;
