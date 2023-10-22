import {IMAGES} from '@assets/images/index';
import GLOBALS from '@constants/index';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Avatar, Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Navigation.style';
const {CONFIG, COLORS} = GLOBALS;

function CustomDrawerContent(props): JSX.Element {
    const {navigation} = props;
    const [menuItems, setMenuItems] = useState(CONFIG.menu_item);

    /**On Main Menu item click, highlight background color  */
    const onMenuItemClick = menu_item => {
        let updatedMenu = [...menuItems].map(item => {
            item.id === menu_item.id ? (item.isSelected = !item.isSelected ) : (item.isSelected = false);
            item.sub_menu = item.sub_menu.map(sub_item => {
                sub_item.isSelected = false;
                return sub_item;
            });
            return item;
        });
        setMenuItems(updatedMenu);
        if(menu_item.screen){
            navigation.navigate('HomeDrawer', {
            screen: menu_item.screen,
        });
        }
       
    };

    const onLogOutPress =()=>{
        navigation.reset({
            index: 1,
            routes: [
              {
                name: 'AuthStack',
                state: {
                  routes: [
                    {
                      name: 'Login',
                    },
                  ],
                },
              },
            ],
          });
    }

    /**Handle selected background color of sub menu item */
    const onSubMenuItemClick = ({sub_index}) => {
        let updatedMenu = [...menuItems].map(item => {
            item.sub_menu = item.sub_menu.map((sub_item, index) => {
                index === sub_index ? (sub_item.isSelected = true) : (sub_item.isSelected = false);
                return sub_item;
            });
            return item;
        });
        setMenuItems(updatedMenu);
    };

    /**Render side menu items */
    const renderItem = props => {
        let {item, index} = props;
        return (
            <View key={index}>
                <TouchableOpacity
                    onPress={() => onMenuItemClick(item)}
                    key={index}
                    style={[
                        styles.container,
                        item.isSelected ? {backgroundColor: COLORS.SELECTED_GRAY} : {},
                    ]}>
                    <Image source={item.icon} style={[styles.logoStyle]} resizeMode="contain" />
                    <Text style={styles.menuItem}>{item.title}</Text>
                    {item.sub_menu.length > 0 && (
                        <Icon
                            size={35}
                            name={!item.isSelected ? 'chevron-down' : 'chevron-up'}
                            type="material-community"
                            color="#5D7285"
                        />
                    )}
                </TouchableOpacity>
                <View style={styles.subMenuOuterContainer}>
                    {item.isSelected &&
                        item.sub_menu.map((sub_menu, sub_index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => onSubMenuItemClick({sub_index})}
                                    key={`${index}${sub_index}`}
                                    style={[
                                        styles.subMenuContainer,
                                        sub_menu.isSelected
                                            ? {backgroundColor: COLORS.SELECTED_GRAY}
                                            : {},
                                    ]}>
                                    <Text style={styles.subMenuItem}>{sub_menu.title}</Text>
                                </TouchableOpacity>
                            );
                        })}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.mainContainer}>
            <DrawerContentScrollView {...props} style={{}}>
                <Pressable onPress={() => navigation.closeDrawer()} style={styles.headerContainer}>
                    <View style={styles.headerItems}>
                        <Image
                            source={IMAGES.logoShort}
                            style={styles.logoStyle}
                            resizeMode="contain"
                        />
                        <Text style={styles.logoText}>SmartData</Text>
                    </View>
                </Pressable>
                {menuItems.map((item, index) => {
                    return renderItem({item, index});
                })}
            </DrawerContentScrollView>

            <TouchableOpacity style={[styles.bottomContainer]} onPress={() =>onLogOutPress()}>
                <Avatar
                    size="small"
                    icon={{name: 'logout', type: 'material', color: 'white', size: 20}}
                />
                <Text style={[styles.menuItem, {color: COLORS.WHITE}]}>{'Logout'}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default CustomDrawerContent;
