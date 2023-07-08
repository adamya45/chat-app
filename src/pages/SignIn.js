import React, { useState } from 'react';
import firebase from 'firebase/app';
import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';
import { auth, database } from '../misc/firebase';

const SignIn = () => {
  /* */ const [isConnected, setIsConnected] = useState({
    'google.com': auth.currentUser?.providerData?.some(
      data => data.providerId === 'google.com'
    ),
    'facebook.com': auth.currentUser?.providerData?.some(
      data => data.providerId === 'facebook.com'
    ),
  }); /* */

  const signInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      /* here */ setIsConnected(prevState => ({
        ...prevState,
        'google.com': auth.currentUser?.providerData?.some(
          data => data.providerId === 'google.com'
        ),
        'facebook.com': auth.currentUser?.providerData?.some(
          data => data.providerId === 'facebook.com'
        ),
      })); /* */

      Alert.success('Signed in', 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  const onFacebookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to the Chat</h2>
                {/*<p>Progressive chat platform for neophytes</p>*/}
              </div>

              <div className="mt-3">
                <Button
                  block
                  color="blue"
                  onClick={onFacebookSignIn}
                  disabled={isConnected['facebook.com']}
                >
                  <Icon icon="facebook" /> Continue with facebook
                </Button>

                <Button
                  block
                  color="green"
                  onClick={onGoogleSignIn}
                  disabled={isConnected['google.com']}
                >
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
