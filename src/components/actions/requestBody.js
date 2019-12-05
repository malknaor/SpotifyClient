import LocalStorageService from '../../Services/LocalStorageService';
import { ACCESS_TOKEN } from '../../constants/StorageKeys';

const requestBody = {
    headers: {
        Authorization: `Bearer ${LocalStorageService.getToken(ACCESS_TOKEN)}`
    }
};

export default requestBody;
