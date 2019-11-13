export interface IDefaultState {
  isLoading: boolean;
  data: null | Record<string, any>;
  error: null | boolean | Record<string, any>;
  status: null | boolean;
}
