import axios from 'axios';

const baseURL = 'https://w-miles-nc-news.herokuapp.com/api';

export const fetchAllUsers = () => {
  return axios.get(`${baseURL}/users`).then(({ data }) => {
    return data.users;
  });
};

export const fetchUser = username => {
  return axios.get(`${baseURL}/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const fetchArticles = (topic, sort_by, order) => {
  return axios
    .get(`${baseURL}/articles`, { params: { topic, sort_by, order } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticleData = id => {
  return axios.get(`${baseURL}/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const fetchCommentData = id => {
  return axios.get(`${baseURL}/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postNewComment = (id, username, body) => {
  return axios
    .post(`${baseURL}/articles/${id}/comments`, { username, body })
    .then(({ data }) => {
      return data.comment;
    });
};
