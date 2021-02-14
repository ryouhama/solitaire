export type IStatus = 'waiting' | 'start' | 'playing' | 'end';

export type ISetting = {
  status: IStatus,
  isLoading: boolean
};
