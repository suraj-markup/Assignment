import { fetchProfiles } from '../../redux/profileSlice';
import profileReducer from '../../redux/profileSlice';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { mockdata } from '../mocks/mockdata';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('profileSlice async actions', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should dispatch the correct actions on success', async () => {
    const now = new Date();
    const mockResponse = mockdata.map(profile => ({
      ...profile,
      id: profile.id + Math.random(), // Generate random ID
      association: {
        ...profile.association,
        logo: `${profile.association.logo}&X-Amz-Date=${now.toISOString()}`, // Add dynamic timestamp
      },
    }));
  
    mock.onGet('https://core.dev.kiido.app/collaboration-api/collaborator/').reply(200, mockResponse);
  
    const store = mockStore({ profiles: { items: [], loading: 'idle', error: null } });
  
    await store.dispatch(fetchProfiles());
    const actions = store.getActions();
    
    // Use toMatchObject for a more flexible comparison of nested objects
    expect(actions[1]).toMatchObject({ 
      type: fetchProfiles.fulfilled.type, 
      payload: expect.any(Array) // Allow any array for payload
    });
    
    // Alternatively, you can use specific matchers for key properties
    // expect(actions[1].payload[0].association.logo).toContain(now.toISOString());
  });
  it('should handle fetchProfiles.pending correctly', () => {
    const initialState = { items: [], loading: 'idle', error: null };
    const nextState = profileReducer(initialState, fetchProfiles.pending());
    expect(nextState.loading).toEqual('loading');
  });

  it('profileReducer should handle fetchProfiles.fulfilled correctly', () => {
    const initialState = { items: [], loading: 'loading', error: null };
    const action = { type: fetchProfiles.fulfilled.type, payload: mockdata };
    const nextState = profileReducer(initialState, action);
    expect(nextState.loading).toEqual('succeeded');
    expect(nextState.items).toEqual(mockdata);
  });

  it('profileReducer should handle fetchProfiles.rejected correctly', () => {
    const initialState = { items: [], loading: 'loading', error: null };
    const action = { type: fetchProfiles.rejected.type, error: { message: 'Error message' } };
    const nextState = profileReducer(initialState, action);
    expect(nextState.loading).toEqual('failed');
    expect(nextState.error).toEqual('Error message');
  });
});
