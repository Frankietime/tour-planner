import axios from './config/axiosConfig';

const API_URL = '/BandMembers';

export interface BandMember {
  id: string;
  name: string;
  role: string;
  contact: string;
}

export const getAllMembers = async (): Promise<BandMember[]> => {
  try {
    const response = await axios.get<BandMember[]>(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching band members:', error);
    throw error;
  }
};