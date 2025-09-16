import React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

export default function ProfileCard({profile}) {
  if(!profile) return null;
  const { name, headline, skills, avatarUrl, bio } = profile;
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow overflow-hidden">
      <div className="p-6 flex gap-6">
        <Avatar src={avatarUrl} sx={{ width: 96, height: 96 }} />
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm text-gray-600 mb-2">{headline}</p>
          <p className="text-sm text-gray-700 mb-4">{bio}</p>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {skills?.map(s => <Chip key={s} label={s} size="small" />)}
          </Box>
        </div>
      </div>
    </div>
  );
}
