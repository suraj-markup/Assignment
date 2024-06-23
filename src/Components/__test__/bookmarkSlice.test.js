import bookmarkReducer from '../../redux/bookmarkSlice';
import { addBookmark, removeBookmark, clearBookmarks } from '../../redux/bookmarkSlice';

describe('bookmarkSlice reducers', () => {
  it('addBookmark should add a bookmark to state', () => {
    const initialState = { items: [] };
    const action = addBookmark({ id: 1, name: 'Bookmark 1' });
    const nextState = bookmarkReducer(initialState, action);
    expect(nextState.items.length).toEqual(1);
    expect(nextState.items[0].name).toEqual('Bookmark 1');
  });

  it('removeBookmark should remove a bookmark from state', () => {
    const initialState = { items: [{ id: 1, name: 'Bookmark 1' }, { id: 2, name: 'Bookmark 2' }] };
    const action = removeBookmark({ id: 1 });
    const nextState = bookmarkReducer(initialState, action);
    expect(nextState.items.length).toEqual(1);
    expect(nextState.items.map(item => item.id)).not.toContain(1);
  });

  it('clearBookmarks should clear all bookmarks from state', () => {
    const initialState = { items: [{ id: 1, name: 'Bookmark 1' }, { id: 2, name: 'Bookmark 2' }] };
    const action = clearBookmarks();
    const nextState = bookmarkReducer(initialState, action);
    expect(nextState.items.length).toEqual(0);
  });
});
