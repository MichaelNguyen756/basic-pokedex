import { asyncStatus } from '../components/constants';

export interface asyncState {
  status: string;
  data: any;
  error: Error | null;
}

export const defaultState: asyncState = {
  status: asyncStatus.idle,
  data: null,
  error: null,
};

export default function asyncReducer(_state: asyncState, action: any): asyncState {
  switch (action.type) {
    case asyncStatus.pending:
      return { status: asyncStatus.pending, data: null, error: null };
    case asyncStatus.resolved:
      return { status: asyncStatus.resolved, data: action.data, error: null };
    case asyncStatus.rejected:
      return { status: asyncStatus.rejected, data: null, error: null };
    default:
      throw new Error(`Action type: ${action.type} is not implemented`);
  }
}
