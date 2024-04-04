import {Avatar} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {styles} from './UserProfile.styles';

interface ProfileProps {
    image_url?: string;
    default_txt?: string;
    onBtnPress?: () => void;
}

const UserProfile: React.FC<ProfileProps> = props => {
    const {
        image_url = 'https://randomuser.me/api/portraits/men/36.jpg',
        onBtnPress,
        default_txt = '',
    } = props;
    return (
        <View style={styles.container}>
            <Avatar
                onPress={onBtnPress}
                size={'large'}
                rounded
                title={default_txt}
                containerStyle={styles.profileContainer}
                source={{uri: image_url && image_url !== null ? image_url : undefined}}
            />
        </View>
    );
};

export default UserProfile;
