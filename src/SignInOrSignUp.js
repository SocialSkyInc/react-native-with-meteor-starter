import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
    },
    input: {
        height: 48,
        fontSize: 24,
        borderWidth: 1
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        backgroundColor: 'black'
    },
    buttonText: {
        color: 'white',
        fontSize: 24
    }
});

export default class SignInOrSignUp extends Component {
    static propTypes = {
        user: PropTypes.shape({
            email: PropTypes.string,
            username: PropTypes.string,
            password: PropTypes.string
        }),
        signIn: PropTypes.func.isRequired,
        signUp: PropTypes.func.isRequired
    }

    static defaultProps = {
        user: {}
    }

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: ''
        };

        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignIn() {
        const { signIn } = this.props;
        const { email, username, password } = this.state;
        signIn(email, username, password);
    }

    handleSignUp() {
        const { signUp } = this.props;
        const { email, username, password } = this.state;
        signUp(email, username, password);
    }

    render() {
        const { user } = this.props;
        const { email, username, password } = this.state;

        return (
            <View style={styles.container}>
                <Text>{user && user.username}</Text>
                <TextInput
                    value={email}
                    onChangeText={value => this.setState({ email: value })}
                    style={styles.input}
                />
                <TextInput
                    value={username}
                    onChangeText={value => this.setState({ username: value })}
                    style={styles.input}
                />
                <TextInput
                    value={password}
                    onChangeText={value => this.setState({ password: value })}
                    style={styles.input}
                />
                <TouchableHighlight onPress={this.handleSignIn}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.handleSignUp}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
