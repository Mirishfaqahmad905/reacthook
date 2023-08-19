import React from 'react';
import { FcApproval } from 'react-icons/fc';

const GiDatahub = ({ gitUsers }) => {
  return (
    <div className="container">
      <div className="row">
        {gitUsers.map((user) => (
          <div key={user.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={user.avatar_url} alt={`Avatar of ${user.login}`} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{user.login}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiDatahub;
