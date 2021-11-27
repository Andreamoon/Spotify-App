import { ajax } from "rxjs/ajax";

export const retrieveViaAjax: Function = (token: string, url: string) => {
  return ajax({
    url: url,
    crossDomain: true,
    method: "GET",
    withCredentials: false,
    headers: {
      Authorization: "Bearer " + token,
    },
    responseType: "json",
  });
};

export const updateViaAjax = (token: string, url: string, data: Object) => {
  return ajax({
    url: url,
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: data,
  });
};

export const deleteViaAjax = (token: string, url: string) => {
  return ajax({
    url: url,
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getViaAjax = (url: string) => {
  return ajax({
    url: url,
    method: "GET",
  });
};
