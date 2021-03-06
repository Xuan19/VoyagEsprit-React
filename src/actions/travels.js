export const FETCH_TRAVELS = 'FETCH_TRAVELS';
export const SAVE_TRAVELS = 'SAVE_TRAVELS';

export const fetchTravels = () => ({
  type: FETCH_TRAVELS,
});

export const saveTravels = (travels) => ({
  type: SAVE_TRAVELS,
  travels,
});
