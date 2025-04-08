import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">OctoFit</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <h1 className="display-4">Welcome to OctoFit</h1>
        <p className="lead">Track your fitness journey with ease.</p>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Fitness Tracker</h5>
            <p className="card-text">Keep track of your workouts and progress.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>

        <table className="table mt-4">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Exercise</th>
              <th scope="col">Reps</th>
              <th scope="col">Sets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Push-ups</td>
              <td>15</td>
              <td>3</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Squats</td>
              <td>20</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>

        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">
          Open Modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                This is a Bootstrap modal example.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
