import { render } from '@testing-library/react';
import { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
class MyAlert extends Component{

    render(){


        return (
            <>
                {[
                    'warning'
                ].map((variant) => (
                    <Alert key={variant} variant={variant}>
                        This is a {variant} {this.props.errormsg}!
                    </Alert>
                ))}
            </>
        );
    }
}
export default MyAlert;