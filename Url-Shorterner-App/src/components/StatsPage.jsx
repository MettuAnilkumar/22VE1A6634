import { useEffect, useState } from 'react';
import { getStats } from '../services/api';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';

const StatsPage = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getStats().then(setStats);
  }, []);

  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Typography variant="h4">Statistics</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Short URL</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Expires</TableCell>
            <TableCell>Clicks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stats.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.shortUrl}</TableCell>
              <TableCell>{item.createdAt}</TableCell>
              <TableCell>{item.expiresAt}</TableCell>
              <TableCell>{item.clickCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default StatsPage;