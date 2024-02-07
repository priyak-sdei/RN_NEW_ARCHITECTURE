import React from 'react';
import {View} from 'react-native';
import {styles} from './UserProfile.styles';
import {Avatar} from '@rneui/themed';

interface ProfileProps {
    image_url?: string;
    default_txt?: string;
}

const UserProfile: React.FC<ProfileProps> = props => {
    const {image_url = 'https://randomuser.me/api/portraits/men/36.jpg'} = props;
    return (
        <View style={[styles.container]}>
            <Avatar
                size={'large'}
                rounded
                title="Rd"
                containerStyle={{backgroundColor: 'blue'}}
                source={{uri: image_url}}
            />
        </View>
    );
};

export default UserProfile;
