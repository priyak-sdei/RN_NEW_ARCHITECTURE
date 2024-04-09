import {CustomHeader, CustomTextView, ParentContainer} from '@components/index';
import {strings} from '@localization/Localization';
import React from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useListing} from './hooks/useListing';
import styles from './listing.style';
import GLOBAL_THEME from '@theme/index';
const {COLORS} = GLOBAL_THEME;
function Listing(): JSX.Element {
    const {listData, currentPage, setCurrentPage, onRefresh, isRefreshing} = useListing();

    const renderItem = ({item}: {item: any}) => (
        <View style={styles.listElementContainer}>
            <FastImage
                style={styles.imageContainer}
                source={{
                    uri: item?.src?.tiny,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            <CustomTextView attr={{h4: true}} text={item.photographer} />
        </View>
    );

    const onEndReached = () => {
        setCurrentPage(currentPage + 1);
    };
    const refreshControl = (
        <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={COLORS.THEME}
            colors={[COLORS.THEME]}
        />
    );
    return (
        <ParentContainer>
            <CustomHeader title={strings.paginition.title} showBack={true} />
            <View style={styles.mainContainer}>
                <FlatList
                    data={listData}
                    keyExtractor={(item, index) => `${item.id}${index}`}
                    renderItem={renderItem}
                    numColumns={1}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={1}
                    refreshControl={refreshControl}
                />
            </View>
        </ParentContainer>
    );
}

export default Listing;
