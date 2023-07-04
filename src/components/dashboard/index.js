import React from 'react'
import { Alert, Button, Divider, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';
import EditableInput from '../EditableInput';
import { database } from '../../misc/firebase';
import ProviderBlock from './ProviderBlock';
import AvataeUploadBtn from './AvataeUploadBtn';

const Dashboard = ({onSignOut}) => {

  const { profile } = useProfile();
  const onSave = async newData => {

    const userNicknaeRef = database.ref(`/profiles/${profile.uid}`).child('name');

    try {
      await userNicknaeRef.set(newData);

      Alert.success('Nickname has been updated', 4000);

    } catch (err) {
      Alert.error(err.message, 4000);      
    }

  }

  return (
    <>
    <Drawer.Header>
      <Drawer.Title>
        Dashboard
      </Drawer.Title>
    </Drawer.Header>

    <Drawer.Body>
      <h3>Hello, {profile.name}</h3>
      <ProviderBlock />
      <Divider />
      <EditableInput
        name="nicknake"
        initialValue = {profile.name}
        onSave = {onSave}
        label = {<h6 className='mb-2'>Nickname</h6>}
        />
        <AvataeUploadBtn  />
    </Drawer.Body>

    <Drawer.Footer>
      <Button block color='red' onClick={onSignOut}>
        Sign Out
      </Button>
    </Drawer.Footer>
    </>
  );
};

export default Dashboard;