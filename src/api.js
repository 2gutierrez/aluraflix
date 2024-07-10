import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Asegúrate de que la URL apunte a tu json-server en el puerto 3001
});

export const fetchVideos = async () => {
  try {
    const response = await api.get('/videos');
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};

export const createVideo = async (video) => {
  try {
    const response = await api.post('/videos', video);
    return response.data;
  } catch (error) {
    console.error('Error creating video:', error);
    return null;
  }
};

export const updateVideo = async (video) => {
  try {
    const response = await api.put(`/videos/${video.id}`, video);
    return response.data;
  } catch (error) {
    console.error('Error updating video:', error);
    return null;
  }
};

export const deleteVideo = async (id) => {
  try {
    console.log(`Deleting video with ID: ${id}`);
    const response = await api.delete(`/videos/${id}`);
    console.log('Delete response:', response);
    return response.data;
  } catch (error) {
    console.error('Error deleting video:', error);
    return null;
  }
};
