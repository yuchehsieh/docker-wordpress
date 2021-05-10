import axios from 'axios';
import { SET_ANNOUNCEMENTS, SET_ANNOUNCEMENT_DETAIL } from './actionTypes';

const BASE_URL = 'https://dtd.ntue.edu.tw/wp-json/wp/v2';

export const getAnnouncements = async (dispatch) => {
  // const { perPage = 5, page = 1 } = options;

  // https://docker-wordpress-murphyhsieh.netlify.app/home

  // const url = `${BASE_URL}/posts?categories=31&_fields=id, title, category, date&per_page=${perPage}&page=${page}`;
  const url = 'https://docker-wordpress-murphyhsieh.netlify.app/api/wp-json/dtd/v1/staff'; // testing url
  const response = await axios.get(url);
  const announcements = response.data;

  dispatch({
    type: SET_ANNOUNCEMENTS,
    payload: announcements,
  });
};

export const getAnnouncementDetail = async (dispatch, options) => {
  const { id } = options;
  if (!id) {
    throw new Error('No id.');
  }

  const url = `${BASE_URL}/posts/${id}`;
  const response = await axios.get(url);
  const announcementDetail = response.data;

  dispatch({
    type: SET_ANNOUNCEMENT_DETAIL,
    payload: announcementDetail,
  });
};

export const getTestAnnouncementDetail = async (dispatch) => {
  const url = `http://localhost:8000/index.php?rest_route=/dtd/v1/projects`;
  const response = await axios.get(url);
  const announcementDetail = response.data;

  dispatch({
    type: SET_ANNOUNCEMENT_DETAIL,
    payload: announcementDetail,
  });
};

// let url = 'https://dtd.ntue.edu.tw/wp-json/dtd/v1/announcements';
