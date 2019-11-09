import React from "react";
import { Button } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Interface from "../../components/interface";
import { useHistory, useLocation } from "react-router";
import BusinessCard from "../../../../components/business-card";
import Filters from "../../../../components/filters";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: "flex"
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto"
    },
    cover: {
      width: 120
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 38,
      width: 38
    },
    bizCardContainer: {
      "&:hover": {
        cursor: "pointer",
        boxShadow: "0px 3px 6px #ccc",
        marginTop: "-0.3em"
      }
    }
  })
);

export default function ListBusinesses({  }: Props): any {
  const history = useHistory();
  const location = useLocation();
  const onCreateRoute = () => {
    history.push(`${location.pathname}/create`);
  };

  const onEditRoute = (title: string) => {
    const slugified = title;
    history.push(`${location.pathname}/${slugified}/update`);
  };

  const onViewRoute = (title: string) => {
    const slugified = title;
    history.push(`${location.pathname}/${slugified}`);
  };

  const onDelete = (title: string) => {};
  const getBusinesses = [
    {
      name: "Sellvy",
      website: "www.sellvy.com",
      phone: "08097373733737",
      logo: "https://sellvy.com/static/08fdc2f97f4e54f2f0757654936073f1.svg"
    },
    {
      name: "hewlett packard",
      website: "www.sellvy.com",
      phone: "08097373733737",
      logo:
        "data:image/png;base64,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"
    },
    {
      name: "CocaCola",
      website: "www.sellvy.com",
      phone: "08097373733737",
      logo:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2fd32b58324945.59f83720f0b79.jpg"
    },
    {
      name: "IDevices",
      website: "www.sellvy.com",
      phone: "08097373733737",
      logo:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUWFhb///8AAAAUFBQYGBj8/PwREREMDAx7e3sODg5qamrn5+cICAi0tLSbm5vw8PDKysrQ0NCSkpJFRUUuLi6zs7OCgoLb29t5eXlsbGw/Pz++vr7i4uL29vahoaHa2tpaWloiIiJMTEw6OjqJiYmXl5ceHh5UVFQpKSmqqqozMzM8PDwFbX7qAAAJMElEQVR4nO2cCZOiOhCAoQNBDgXEG8VjHEdm/v//e53gQQKiu/XqkfH1V7VbDqO7aTvpM4llEQRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBPILd/npHmMMY86DCw9fOm4nKLA7gZ8FgVIwGQYY/8DfTpsMnsV0nnnCn70H9u8DAVhlA30P6l4GRJuHo7STMNQnzt5Mw1SRM307CUJMwfDMJ2X6jSbjZv5e3gMDWCX6nEjFSYZESmlUvG86izV3gWyPGDI8EmOWdAoxXlEeMAYwbEo4BxcHo7f4+i0Fw8kwPXWGytqcYeF5/Zg5GaBBMdUODpmYYQD14czBsndrridmTl8HOxcFvV7dh+rBfJuKZqwkonyWLM3jyg/gHVlvxbGewiDgbZxdDOYMqVfJXZWx3EZcHKaODn718CfhZQ+cps8RqcysFDSESimmEMi3kGc7VCIYXvYoVauZSlAK67kVCe535qFQWu/r0bE5WO59AFl6/HPyAmSJWGqwttzUO08ueq1CKVd4DAvEvGCiimJAzbfKB08woXmUGxjkNB3aavRwLCfV4+6ESlcmMr3dgWoIcTVxbXXJLdOigR6Ovymu7k6hvkVTYaa0P8xBZfP9XAkrWJ7NmaRToLj0+8cbS/ANcOzBLiQwDLpU5+m0o/lpCDP3M0qHFYa6uQ5HDv+Lv62q7vXLxC+LP/9P/lmjlKgYxR5eGUr8uWV1A112ZNUct6fBnylIcilnaHZN2yDwzz+UjIrK8UwLjkyfOwt2E62RYlqOiLPNkHd/ePjQzv2BKtakAK/pqV5DUdZgUiwxUrN0xn7uiSmWgAgVRVtPZGBgsWyVEEbafO9Gl8es5PsbpPMKH2SA/eD1K0QmUqoSLRt4riEcfKIiox4jChShyMJkQMlnxsFD0yDItZKvAdefWJbRQwibbpdSdc++1Aee3V8bF2wqO4v4aEkrp50uhPUuKlC1nn9Nku52v1/NtmpTjwfJbNBcrVZqI91MXCC2NFrShiEcPvYBoHg7KNG6ZwZswLw5iCpspoRrBlA0J7fQbOAP4KJQoXc9J7E2yOBnn72Wh9KCMM5eW5iYGSlHiBARYvpIybsyzpkw1pC0S2kcR5ARbW1dZC+LbMM3mOBY/qyEaRt6KPzyCE70eicdn0wJvJsWpK2cN93aMW7nHQ2y78/K4GJfbZ+GcvTQubnMgUQcZMs5XlSA4LfMqwpkeLo7PX+Su3TVhEzBtOwoHbbBu5t9zizjiqND5F9qaSySD7jDvWpGucflhs0G4iyy4uoUAohVm7dHNesjtQ8GmNaq7fMQUhyHnkoiYh/oQZ3ALclLgTjiu+3F2diIG57lWRqwxxfBUqJH1HKJWEeU+mI0b7bMCbnWaXQTFDOobvdh+FADzWNJsSl0Ix7Ngfw1We4OxyWCUp2GrZUxvQc0W+AfaRiUU8/fzqQi5O+scmzDNR4NJnzHcvUzR1IS75+wkXx1RuohpGZG3j+eW71th+6drz+IeKxoMujTwFVXG1D37bWsp+nHXJw6HzcOJeqXHjJ/zroF9QhWMr9tGiGsSg7oErJYOvw7vT8Lu5tn6EpnmbbMMTSRD+dH+wPaZDjOvNxHbCzE3JpyfXJkpto/QW7n2iXurZxL2F8Gxll0ydYrKI34+XEf4W1Rw05VqDHpbiE5XA1QWBXkUiH2Wj7y2KFV9Rf6zRvGot15iZ+dFzLwFcAzcHu6zZIxvRG38WVJVmKlDQSptzeP6rqghux+8ZdObMTrsXofSRqCpfGgpmAjNMfeHRntVob91+MyWyvJ8lKHXe2hqwkrR3X3GHm3p880kI1TiJw6xXUS+F6t1z/2PzuJNj/6QdcY00toc0NgkmxO3mim7jGpckQmK6K5Dwh5jmu64tNoahS7dWmOeoXsMdivPTaHZI1fobxmyztzi8hQXYcTmQ3WUmCp632deJRZzsKKWBW1GbtGVH17JgfuQ6D4NsgIuptjFVPi79SsyID/syvHvWhQFi+OiXndhsApX3rWj+sMZb/TDzcjxrVqd5sFKEnWYMENzM6mtQwY7ewxyK6N4D2bIei1SNLrNqNPciDrjkpEHkRwpjtdhgA4kAfi4/la0qRoeMTCt092ol6rEn6Jnj2ZfdEN3c3sLnnMLZIQxPeq6N01A1qh5N0jLhWiAro4pms99vYeRYJalG9PEuKr+8whOKGYTy75oigu3vFvPLbqLnfI+kZYY1nvCaXoOr6N7wmYMvrLuMHr1V+rn4rNv2G4Fcdzl+3P7XI1oJD/A85S0Xrj0k+ouzOsfCtCGfI3Tbh2GowwVeFa/CiGhlkAdPAMFRBj6xdNXkbRvZwuT0U8EfgRLLQaK0W6qEpp7/FJsJJHbZH5mn8Uwz5M0TZN8WBZjaUeBYwCXNXoVUkJFrSvj2vg3LiHkfTfQDS52CXnwM3WvO9vqEjJlz3tuXHv0ArM8nzPZAHVYPVyu9nOh1Ie8dRuYkLDmTt1JjxlhN/B14JcrE66Pqh1rYoF62eeD6FwcmK1LWBq7CkVRI87Hgb6pEmCymw1lk6bVX26FLa3N0k1mSv9X47a/1MW0bjgaHwXj0TRP19J4SvHaZmkiJKxbGlP3lz6tzj9C7AhWW6Um7hFu7PP+Awphaer+0Mx93vpe/T/gCIzva1GCmXv1G+ct/oBdhEZKOdll4HmLJ/XAbnCSqtmTwLQzM81zT68j3aG+Ydq8c0/Ns2svI9L5ZhfLtLNrLecPX6ZonJAy8fxh8wzpi4YV35VhLugpAZ2JZ0hbzgG/BmrrxJn/oT2eGWZnBI2z3JvyFSW68hhfvU13PcttmA6txnn8MINJfh1xF2NRkol+wXn8+p0Kri3vVOCwerax25X+HvkNdyrU78VwxV5LzNN9ODy7F6O4lgV+wb0YgvrdJnKYHpwXHXebLM93k/IL7jYRXO+nudoJeZ0gBMOW+2mm8n6aW0Xml9xPY8k7hlitnCsqNixqvWMIlCuTfskdQ+I0YdQyxsf3RKkFK/PviXrE+9z19Yj3v6/t/e/c+z/cm/j+d1++//2l734H7fvfI6zdBe2/313Q73+ft4SpfxEEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQbTyD9FCceqeqFcLAAAAAElFTkSuQmCC"
    }
  ];

  const cardRouteActions = {
    onEditRoute,
    onViewRoute,
    onDelete,
    mode: "manage"
  };

  const businesses = getBusinesses.map((business: any) => ({
    ...business,
    ...cardRouteActions
  }));

  return (
    <React.Fragment>
      <Interface
        title="Manage Business Directories"
        actions={
          <Button variant="outlined" color="primary" onClick={onCreateRoute}>
            Add a Business
          </Button>
        }
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "inherit",
            padding: "0 4% 0 4%",
            flexDirection: "column"
          }}
        >
          <Filters />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              marginTop: "2em",
              height: "60vh"
            }}
          >
            {businesses.map((item: any, i: number) => (
              <BusinessCard {...item} key={i.toString()} />
            ))}
          </div>
        </div>
      </Interface>
    </React.Fragment>
  );
}
