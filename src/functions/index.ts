import schema, {
  IBusiness,
  ICategories,
  IBusinesses,
  ICategory
} from "../types/schema";
import jsonWebToken from "jsonwebtoken";

export const business = (fromStorage: schema) => {
  const onCreate = (saveToStorage: Function, data: IBusiness) => {
    const findBusiness = onView(data.name);
    const list = onList();
    if (!findBusiness && saveToStorage && data && list) {
      if (Array.isArray(list)) {
        list.push(data);
        const saveData = { ...fromStorage, businesses: list };
        try {
          saveToStorage(saveData);
          return { status: true, message: "Created new businesses directory" };
        } catch (e) {
          return {
            e,
            status: false
          };
        }
      }
    }
    return false;
  };
  const onView = (name: string): IBusiness | null => {
    let isValid = fromStorage && name ? true : false;
    isValid = fromStorage.businesses ? true : false;
    const businesses = fromStorage.businesses;

    if (isValid && Array.isArray(businesses)) {
      return businesses.filter(
        (business: IBusiness) => name === business.name
      )[0];
    }

    return null;
  };

  const onUpdate = (name: string, saveToStorage: Function, data: IBusiness) => {
    let isValid = fromStorage && name && saveToStorage ? true : false;
    const businessName = onView(name);
    const list = onList();
    if (isValid && businessName && list) {
      const newList = list.filter(
        (item: IBusiness) => item.name !== businessName.name
      );
      newList.push(data);
      const saveData = { ...fromStorage, ...{ businesses: newList } };
      try {
        saveToStorage(saveData);
        return { status: true, message: "Saved entry successfully" };
      } catch (e) {
        return {
          e,
          status: false
        };
      }
    }

    return false;
  };

  const onDelete = (name: string, saveToStorage: Function) => {
    let isValid = fromStorage && name && saveToStorage ? true : false;
    const businessName = onView(name);
    const list = onList();
    if (isValid && list && businessName) {
      const newList = list.filter(
        (item: IBusiness) => item.name !== businessName.name
      );
      const saveData = { ...fromStorage, ...{ businesses: newList } };
      try {
        saveToStorage(saveData);
        return { status: true, message: "Deleted successfully" };
      } catch (e) {
        return {
          e,
          status: false
        };
      }
    }
    return false;
  };

  const onList = () => {
    let isValid = fromStorage ? true : false;
    isValid = fromStorage.businesses ? true : false;
    if (isValid && Array.isArray(fromStorage.businesses)) {
      return fromStorage.businesses;
    }
    return null;
  };
  return { onView, onCreate, onUpdate, onDelete, onList };
};

export const category = (fromStorage: schema) => {
  const onView = (name: string) => {
    let isValid = fromStorage && name ? true : false;
    isValid = fromStorage.categories ? true : false;
    const categories = fromStorage.categories;

    if (isValid && Array.isArray(categories)) {
      return categories.filter(
        (category: ICategory) => name === category.title
      )[0];
    }

    return null;
  };

  const onCreate = (saveToStorage: Function, data: ICategory) => {
    let isValid = fromStorage && data ? true : false;
    const list = onList();
    const findCategory = onView(data.title);
    if (!findCategory && saveToStorage && list && isValid) {
      if (Array.isArray(list)) {
        list.push(data);
        const saveData = { ...fromStorage, categories: list };
        try {
          saveToStorage(saveData);
          return {
            status: true,
            message: "Created a new category"
          };
        } catch (e) {
          return { e, status: false };
        }
      }
    }
    return false;
  };

  const onUpdate = (saveToStorage: Function, data: ICategory) => {
    let isValid = fromStorage && data && saveToStorage ? true : false;
    const list = onList();
    const category = onView(data.description);
    if (isValid && list && category) {
      const newList = list.filter(
        (category: ICategory) => category.title !== data.title
      );
      newList.push(data);
      const saveData = { ...fromStorage, ...{ categories: newList } };
      try {
        saveToStorage(saveData);
        return { status: true, message: "Saved entry successfully" };
      } catch (e) {
        return {
          e,
          status: false
        };
      }
    }
    return false;
  };

  const onDelete = (name: string, saveToStorage: Function) => {
    let isValid = fromStorage && name && saveToStorage ? true : false;
    const businessName = onView(name);
    const list = onList();
    if (isValid && businessName && list) {
      const newFilter = list.filter(
        (category: ICategory) => category.title !== name
      );
      const saveData = { ...fromStorage, categories: newFilter };
      try {
        saveToStorage(saveData);
        return { status: true, message: "Deleted successfully" };
      } catch (e) {
        return {
          e,
          status: false
        };
      }
    }

    return false;
  };

  const onList = () => {
    let isValid = fromStorage ? true : false;
    isValid = fromStorage.categories ? true : false;
    if (isValid && Array.isArray(fromStorage.categories)) {
      return fromStorage.categories;
    }
    return null;
  };

  return { onView, onCreate, onUpdate, onDelete };
};

export const admin = () => {
  const generateToken = () => {};

  const verifyToken = () => {};

  const onRegister = () => {};

  const onLogin = () => {};

  return { onRegister, onLogin };
};

export const upload = () => {
  const onInitialize = () => {};
  const onSuccessful = () => {};
  const onFailure = () => {};

  return { onInitialize, onSuccessful, onFailure };
};

export const filter = () => {
  const byCategory = () => {};

  return { byCategory };
};

export const analytics = () => {
  const onViewBusiness = () => {};

  const retrieveNoViews = () => {};

  return { onViewBusiness, retrieveNoViews };
};

/**
 *
 * @param fromStorage
 */

export const app = (fromStorage: Record<string, any>) => {
  /**
   * @description bootstraps app, store defaults data to localStorage
   * @param saveToStorage
   */

  const onBootstrap = (saveToStorage: Function) => {
    const CurrentDate = new Date();
    const initializeStorage = () => {
      const dataSchema: schema = {
        businesses: [],
        admin: null,
        categories: [],
        analytics: { noViews: 0 },
        app: { isInitialized: true }
      };
      try {
        saveToStorage(dataSchema);
        return dataSchema;
      } catch (e) {
        console.log(e);
        return null;
      }
    };

    const dumbBusinessListings = (data: Record<string, any>) => {
      const businessListings: IBusinesses = [
        {
          name: "Sellvy",
          description: "A social commerce platform to share and earn",
          categories: [
            {
              title: "e-commerce",
              description: "commerce",
              createdAt: CurrentDate,
              updatedAt: CurrentDate
            },
            {
              title: "social-media",
              description: "online communication",
              createdAt: CurrentDate,
              updatedAt: CurrentDate
            }
          ],
          address: "131 Kofo Aboyomi Street, Martins, Victorial Island Lagos",
          logo:
            "https://sellvy.com/static/08fdc2f97f4e54f2f0757654936073f1.svg",
          websiteUrl: "https://sellvy.com",
          listedAt: CurrentDate,
          updatedAt: CurrentDate,
          contactEmail: "info@sellvy.com",
          phone: "0903839393"
        },

        {
          name: "Locus Group",
          description: "A sales and marketing company",
          categories: [
            {
              title: "Sales & Marketing",
              description: "selling of goods and services",
              createdAt: CurrentDate,
              updatedAt: CurrentDate
            }
          ],
          address: "131 Kofo Aboyomi Street, Martins, Victorial Island Lagos",
          logo:
            "https://sellvy.com/static/08fdc2f97f4e54f2f0757654936073f1.svg",
          websiteUrl: "https://sellvy.com",
          listedAt: CurrentDate,
          updatedAt: CurrentDate,
          contactEmail: "info@sellvy.com",
          phone: "0903839393"
        }
      ];

      const savedItems = { ...data, ...{ businesses: businessListings } };
      try {
        saveToStorage(savedItems);
        return savedItems;
      } catch (e) {
        console.log(e);
        return null;
      }
    };

    const dumbCategories = (data: Record<string, any>) => {
      const categories: ICategories = [
        {
          title: "e-commerce",
          description: "commerce",
          createdAt: CurrentDate,
          updatedAt: CurrentDate
        },
        {
          title: "social-media",
          description: "online communication",
          createdAt: CurrentDate,
          updatedAt: CurrentDate
        },
        {
          title: "Sales & Marketing",
          description: "selling of goods and services",
          createdAt: CurrentDate,
          updatedAt: CurrentDate
        }
      ];
      const savedItems = { ...data, ...{ categories } };
      try {
        saveToStorage(savedItems);
        return savedItems;
      } catch (e) {
        console.log(e);
        return null;
      }
    };

    const init = () => {
      const initData = initializeStorage();
      console.log(initData);
      if (initData) {
        const categories = dumbCategories(initData);
        if (categories) {
          dumbBusinessListings(categories);
        }
      }
      return initData;
    };

    return init();
  };

  /**
   * @description returns true if app has been bootstraped
   */
  const isBootstrapped = () => {
    if (fromStorage && fromStorage.app) {
      if (fromStorage.app.isInitialized) return true;
      return false;
    }
    return false;
  };

  return { onBootstrap, isBootstrapped };
};

export default {
  app,
  admin,
  analytics,
  business,
  category,
  filter,
  upload
};
