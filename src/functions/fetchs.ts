import functions from "./index";

export const fetchBusinesses = (
  state: any,
  fromStorage: any,
  setState: Function
) => {
  setState({ ...state, isLoading: true });
  setTimeout(() => {
    let list = functions.business(fromStorage).onList();
    if (list) {
      setState({
        isLoading: false,
        data: list,
        status: true,
        error: null
      });
    } else {
      setState({
        ...state,
        ...{
          status: false,
          isLoading: false,
          error: "Unable to fetch businesses"
        }
      });
    }
  }, 3000);
};

export const fetchCategories = (
  state: any,
  fromStorage: any,
  setState: Function
) => {
  setState({ ...state, isLoading: true });
  setTimeout(() => {
    let list = functions.category(fromStorage).onList();
    if (list) {
      setState({
        isLoading: false,
        data: list,
        status: true,
        error: null
      });
    } else {
      setState({
        ...state,
        ...{
          status: false,
          isLoading: false,
          error: "Unable to fetch Categories"
        }
      });
    }
  }, 3000);
};
