import functions from "./index";

export const fetchBusinesses = (fromStorage: any, setState: Function) => {
  setState((preState: any) => ({ ...preState, ...{ isLoading: true } }));

  let list = functions.business(fromStorage).onList();
  if (list) {
    setState({
      isLoading: false,
      data: list,
      status: true,
      error: null
    });
  } else {
    setState((prevState: any) => ({
      ...prevState,
      ...{
        status: false,
        isLoading: false,
        error: "Unable to fetch businesses"
      }
    }));
  }
};

export const fetchCategories = (fromStorage: any, setState: Function) => {
  setState((prevState: any) => ({ ...prevState, ...{ isLoading: true } }));
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
      setState((prevState: any) => ({
        ...prevState,
        ...{
          status: false,
          isLoading: false,
          error: "Unable to fetch Categories"
        }
      }));
    }
  }, 3000);
};

export const fetchBusiness = (
  setState: React.SetStateAction<any>,
  title: string,
  fromStorage: any
) => {
  if (title) {
    const fetch = functions.business(fromStorage).onView(title);
    setState((prevState: any) => ({ ...prevState, ...{ isLoading: true } }));
    if (fetch) {
      setState((prevState: any) => ({
        ...prevState,
        ...{ isLoading: false, data: fetch, status: true, error: false }
      }));
    } else {
      setState((prevState: any) => ({
        ...prevState,
        ...{ isLoading: false, status: false, error: "Unable to fetch item " }
      }));
    }
  }
};
