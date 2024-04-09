import {RTKBuilderType} from '../clientApi';

export interface PaginitionResponse {
    page: number;
    per_page: number;
    next_page: string;
    photos: Array<any>;
}
export interface PaginitionRequest {
    page: number;
    per_page: number;
}
const getPagintionData = (builder: RTKBuilderType) =>
    builder.query<PaginitionResponse, PaginitionRequest>({
        query: ({page, per_page}) => {
            console.log(page, per_page, 'page, per_page....');
            const query = {
                url: `https://api.pexels.com/v1/curated?page=${page}&per_page=${per_page}`,
                method: 'GET',
                headers: {
                    Authorization: `Rvk0Go6pi0NdnLnsvcwcvdRF639O3I0zGeZYU3URHLKjIjPe2XgZp4bJ`,
                },
            };
            return query;
        },
    });

export default getPagintionData;
