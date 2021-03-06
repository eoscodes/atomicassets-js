import { expect } from 'chai';
import ExplorerApi from '../src/API/Explorer';

// tslint:disable-next-line:no-var-requires
const fetch = require('node-fetch');

describe('Explorer API', () => {
    const api = new ExplorerApi('https://test.wax.api.atomicassets.io', 'atomicassets', {fetch});

    const exampleAsset = {
        owner: 'testuser2222',
        id: '1099511627784'
    };

    it('fetch asset ' + exampleAsset.id, async () => {
        const assets = await api.getAssets({
            owner: exampleAsset.owner
        });

        expect(assets).to.deep.equal(assets);
    }).timeout(10000);
});
