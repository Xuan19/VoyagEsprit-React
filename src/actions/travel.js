export const FETCH_TRAVEL = 'FETCH_TRAVEL';
export const SAVE_TRAVEL = 'SAVE_TRAVEL';

export const fetchTravel = () => ({
  type: FETCH_TRAVEL,
});

export const saveTravel = (travel) => ({
  type: SAVE_TRAVEL,
  travel,
});
