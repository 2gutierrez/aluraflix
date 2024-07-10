import axios from 'axios';

const API_URL = 'http://localhost:3001/videos';

export const fetchVideos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};

export const createVideo = async (videoData) => {
  try {
    const response = await axios.post(API_URL, videoData);
    return response.data;
  } catch (error) {
    console.error('Error creating video:', error);
    return null;
  }
};

export const updateVideo = async (videoData) => {
  try {
    const response = await axios.put(`${API_URL}/${videoData.id}`, videoData);
    return response.data;
  } catch (error) {
    console.error('Error updating video:', error);
    return null;
  }
};

export const deleteVideo = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting video:', error);
    return null;
  }
};
