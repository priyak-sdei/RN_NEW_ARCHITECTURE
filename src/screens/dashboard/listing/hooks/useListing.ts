import {useGetPagintionDataQuery} from '@/redux/api/ListingAPIs/listingAPI';
import {useEffect, useState} from 'react';
import {showToast} from '@helpers/Utility';
import {strings} from '@localization/Localization';
export const useListing = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [listData, setListData] = useState<Array<any>>([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const {
        data: PagitionResult,
        isFetching,
        isError,
        refetch,
    } = useGetPagintionDataQuery({
        page: currentPage,
        per_page: 20,
    });

    useEffect(() => {
        if (!isFetching && isError) {
            showToast(strings.common.listError, strings.common.error, strings.common.Error);
        }
    }, [isFetching, isError]);

    useEffect(() => {
        console.log(PagitionResult, 'PagitionResult.......');
        if (PagitionResult?.photos && currentPage && currentPage === 1) {
            setIsRefreshing(false);
            setListData(PagitionResult?.photos ?? []);
        } else {
            setIsRefreshing(false);
            setListData([...listData, ...(PagitionResult?.photos ?? [])]);
        }
    }, [PagitionResult]);

    useEffect(() => {
        refetch();
    }, [currentPage]);

    const onRefresh = () => {
        setIsRefreshing(true);
        if (currentPage === 1) {
            setCurrentPage(2);
        } else {
            setCurrentPage(1);
        }
    };

    return {
        listData,
        currentPage,
        setCurrentPage,
        onRefresh,
        isRefreshing,
    };
};
