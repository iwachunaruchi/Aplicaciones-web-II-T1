// import { Request, Response } from 'express';
// import httpClient from '../services/httpClient';

// export const getAlumnos = async (req: Request, res: Response) => {
//   try {
//     const response = await httpClient.get('http://10.42.4.44:3000/api/alumnos');
//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching alumnos data' });
//   }
// };
import { Request, Response } from 'express';
import httpClient from '../services/httpClient';

export const getAlumnos = async (req: Request, res: Response) => {
  try {
    const data = await httpClient.get('http://10.42.4.44:3000/api/alumnos');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching alumnos data' });
  }
};
