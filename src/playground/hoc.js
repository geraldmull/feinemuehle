// Higher Order Component (HOC), a component that renders another component
// reuse code
// render hijacking
// props manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private Info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please Login to view the info:</p>
            )}
        </div>
    );
};

const AdminInfo= withAdminWarning(Info);
const AuthInfo= requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="this are the details" />, document.getElementById('app'));
//ReactDOM.render(<AuthInfo isAuthenticated={false} info="this are the details" />, document.getElementById('app'));