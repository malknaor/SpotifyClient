import ls from 'local-storage';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/StorageKeys';

const LocalStorageService = (() => {
    let _service;

    const _getService = () => {
        if (!_service) {
            _service = this;
        }

        return _service;
    }

    const _setToken = ({ access_token, refresh_token = undefined }) => {
        ls.set(ACCESS_TOKEN, access_token);
        
        if (refresh_token !== undefined) {
            ls.set(REFRESH_TOKEN, refresh_token);
        }
    }
    
    const _getAccessToken = () => {
        return ls.get(ACCESS_TOKEN);
    }
    
    const _getRefreshToken = () => {
        return ls.get(REFRESH_TOKEN);
    }

    const _clearToken = () => {
        ls.remove(ACCESS_TOKEN);
        ls.remove(REFRESH_TOKEN);
    }

    return {
        getService: _getService,
        setToken: _setToken,
        getToken: _getAccessToken,
        getRefreshToken: _getRefreshToken,
        clearToken: _clearToken
    }
})();

export default LocalStorageService;